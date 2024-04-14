"use server";

import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

type Filetree = {
    "tree": [
        {
            "path": string,
        }
    ]
}

export async function getEventsByName(fileName: string): Promise<IEvents | undefined> {

    try {
        const res = await fetch(`https://raw.githubusercontent.com/PravinkumarS15/Instronix-mdx-files/main/${fileName}`, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            }
        })

        if (!res.ok) return undefined

        const rawMDX = await res.text()

        if(rawMDX === '404: Not Found') return undefined

        const { frontmatter, content } = await compileMDX<{id: string, title: string, description:string, date: string, type: string, tags: string[], link: string, image: string, when : string }>({
            source: rawMDX,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        // @ts-expect-error
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, {
                            behavior: 'wrap'
                        }],
                    ],
                },
            }
        })

        const eventsObj: IEvents = { meta: { id: frontmatter.id, type: frontmatter.type, title: frontmatter.title, description:frontmatter.description, date: frontmatter.date, when: frontmatter.when, tags: frontmatter.tags || [], link: frontmatter.link, image: frontmatter.image }, content }

        return eventsObj
    } catch(error: any|unknown) {
        console.log(error)
    }
}

export async function getEventsMeta(): Promise<IMeta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/PravinkumarS15/Instronix-mdx-files/git/trees/main?recursive=1' , {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    if(!res.ok) return undefined;

    const repoFiletree: Filetree = await res.json()

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const events: IMeta[] = []

    for (const file of filesArray) {
        const post = await getEventsByName(file)
        if (post) {
            const { meta } = post
            events.push(meta)
        }
    }

    return events.sort((a, b) => a.date < b.date ? 1 : -1)
}


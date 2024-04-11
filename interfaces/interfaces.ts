interface INavLinks {
    title: string;
    href: string;
}
interface ISocialLinks {
    title: string;
    icon: string;
    href: string;
}

interface IMeta {
    id: string,
    title: string,
    description : string,
    date: string,
    tags: string[],
    link: string,
    image: string,
    when : string
}

interface IEvents {
    meta: IMeta,
    content: any
}

interface IImageCardProps {
    id: string,
    image: string;
    title: string;
    when: string;
    link: string;
    tags: string[];
    subTitle: string;
  }

interface IAboutContent {
    title: string;
    description: string;
    image: string
}
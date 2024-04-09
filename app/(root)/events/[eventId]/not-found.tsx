import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-center">
            <p className="my-40">Sorry, the requested event does not exist.</p>
            <Link href="/">Back to Home</Link>
        </div>
    )
}
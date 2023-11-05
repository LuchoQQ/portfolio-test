import Link from "next/link";

export default function AppLink({ href, text }: { href: string, text: string }) {
    return (
        <>
            <Link href={href} className="self-center">
                <p className='text-gray-500 font-medium align-center text-base hover:text-white cursor-pointer self-center'>
                    {text}
                </p>
            </Link>
        </>
    )
}
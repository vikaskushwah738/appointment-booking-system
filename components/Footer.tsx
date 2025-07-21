import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-muted/50 py-12">
            <div className="container max-auto px-4 text-center text-gray-200">
                Made with by <Link className='text-emerald-400' href="https://vikas-me.vercel.app/">
                    vikas kushwah
                </Link>
            </div>

        </footer>
    )
}

export default Footer
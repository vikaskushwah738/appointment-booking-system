import Link from "next/link"
import Image from "next/image"
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Button } from "./ui/button"
const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">

            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <Image
                        alt="Clinic Now logo"
                        src={'/logo.png'}
                        height={50}
                        width={90}
                        className="pt-3 w-auto object-contain"
                    />
                </Link>

                <div className="flex space-x-2 items-center">
                    <SignedOut>
                        <SignInButton >
                            <Button variant="secondary">Sign In</Button>
                        </SignInButton>
                        {/* <SignUpButton>

                        </SignUpButton> */}
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10, h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header
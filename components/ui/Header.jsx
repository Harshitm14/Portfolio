import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./button"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <h1 className="text-4xl font-semibold">
            Harshit<span className="text-accent">.</span>
            </h1>
        </Link>
        {/*Creating the desktop view Navbar */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact" passHref>
          <Button>Hire Me</Button>
        </Link>
        </div>

        {/*Creating the mobile view Navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

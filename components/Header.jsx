import Link from "next/link"
import { Button } from "./ui/button"
// components
import Nav from "./Nav"
const Header = () => {
  return (
    < header className="py-8 xl:py-12 text-primary">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link href='/'>
          <h1 className="text-4xl font-semibold">
            Ali Rashild <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href="/contact">
            <button>Hire me</button>
          </Link>
        </div>
        <div className="xl:hidden">moblie nav</div>
      </div>

    </header>
  )
}

export default Header

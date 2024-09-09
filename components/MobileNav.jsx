"use client"
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Close the sheet when the pathname changes
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                <CiMenuFries className="text-[32px] Mtext-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col p-4 md:p-8">
                <div className="mt-20 mb-35 text-center text-2xl">
                    {/* logo */}
                    <Link href='/'>
                        <h1 className="text-2xl font-semibold">
                            WorkingWithAli <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent" } text-xl capitalize hover:text-accent font-medium transition-all`}
                            onClick={() => setIsOpen(false)}  // Close sheet after selecting a link
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;

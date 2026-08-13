"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  // Home page has a dark brown background, other pages are light/bright/white
  const isDarkHero = pathname === "/";
  
  return (
    <header className={`site-header ${isDarkHero ? "theme-dark-header" : "theme-light-header"}`}>
      <div className="header-container">
        <nav className="header-nav">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/services" className={pathname === "/services" ? "active" : ""}>
            Services
          </Link>
          <Link href="/portfolio" className={pathname === "/portfolio" ? "active" : ""}>
            Gallery
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>

        <div className="header-logo">
          <Link href="/">
            <Image
              src="/assets/salon_logo2.png"
              alt="Chandraka Salon"
              width={200}
              height={100}
              priority
              className="logo-img"
            />
          </Link>
        </div>

        <div className="header-actions">
          <Link href="/book-appointment" className="btn-book">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

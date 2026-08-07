import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Hours & Address */}
        <div className="footer-col hours-col">
          <h3 className="footer-title">HOURS</h3>
          <ul className="hours-list">
            <li>Tue: CLOSED</li>
            <li>Mon to Sun: 9 AM – 7 PM</li>
            <li>Sat to Sun: 10 AM – 7 PM</li>
          </ul>
          <p className="footer-address">
            A-101, REVATI PLAZA, OPPOSITE ZUDIO, BHAKTI CIRCLE, NIKOL, AHMEDABAD., Gujrat 382350
          </p>
        </div>

        {/* Column 2: Menu */}
        <div className="footer-col menu-col">
          <h3 className="footer-title">MENU</h3>
          <ul className="footer-links">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/book-appointment">Book appointment</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div className="footer-col social-col">
          <h3 className="footer-title">FOLLOW US</h3>
          <ul className="footer-links">
            <li>
              <a href="https://instagram.com/squarespace" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/squarespace" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/squarespace" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/squarespace" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chandramauli Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Visit us</h1>

        <div className="contact-details-grid">
          {/* Column 1: Hours */}
          <div className="contact-detail-col">
            <ul className="contact-details-list">
              <li>Tue: CLOSED</li>
              <li>Mon to Fri: 9 AM – 7 PM</li>
              <li>Sat to Sun: 10 AM – 7 PM</li>
            </ul>
          </div>

          {/* Column 2: Location & Contact */}
          <div className="contact-detail-col">
            <p className="contact-address-text">
              A-101, REVATI PLAZA, OPPOSITE ZUDIO, BHAKTI CIRCLE, NIKOL, AHMEDABAD., Gujrat 382350
            </p>
            <a href="mailto:email@example.com" className="contact-email-link">
              email@example.com
            </a>
          </div>
        </div>

        {/* Bottom arched image & footer note */}
        <div className="contact-image-wrapper">
          <div className="contact-arched-container">
            <Image
              src="/assets/image_24.jpg"
              alt="Arched view of beautiful styled wavy hair"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="contact-arched-img"
            />
          </div>
          <h2 className="contact-bottom-text">See you soon</h2>
        </div>
      </div>
    </div>
  );
}

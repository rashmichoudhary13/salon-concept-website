"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TESTIMONIALS = [
  {
    text: `"Their attention to detail and commitment" to quality truly stood out. We’ve already recommended them to others.`,
    author: "—Former Customer",
  },
  {
    text: `"Creative, reliable, and genuinely passionate about what they do."`,
    author: "—Former Customer",
  },
  {
    text: `"A professional team that delivers on their promises."`,
    author: "—Former Customer",
  },
  {
    text: `"Every detail was thoughtfully executed. We're thrilled with the outcome."`,
    author: "—Former Customer",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">🏆 Haircraft S4 Winner</span>
            <h1 className="hero-title">
              Luxury Hair Transformations That Turn Heads
            </h1>
            <p className="hero-tags">
              Balayage &bull; Global Colour &bull; Aqua Therapy &bull; Brazilian Treatment
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-val">12+</span>
                <span className="stat-lbl">Years<br />Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">5000+</span>
                <span className="stat-lbl">Happy<br />Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">4.6 ★</span>
                <span className="stat-lbl">Google<br />Ratings</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="arched-image-container">
              <Image
                src="/assets/image_1.jpg"
                alt="Smiling client with long wavy brown hair"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="arched-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT ROW BANNER */}
      <div className="contact-bar">
        <div className="contact-bar-item">
          📍 Revati Plaza, Nikol, Ahmedabad
        </div>
        <div className="contact-bar-item">
          📞 382350555-5555
        </div>
        <div className="contact-bar-item">
          ✉️ Chandramauli@gmail.com
        </div>
      </div>

      {/* 3. OUR SERVICES GRID */}
      <section className="home-services-section">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
        </div>
        <div className="services-grid">
          {/* Card 1: Haircuts */}
          <div className="service-card">
            <div className="service-card-img-wrapper">
              <Image
                src="/assets/image_2.jpg"
                alt="Haircuts"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="service-card-img"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">Haircuts</h3>
              <Link href="/services" className="service-card-btn">
                Our services &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2: Hair Coloring */}
          <div className="service-card">
            <div className="service-card-img-wrapper">
              <Image
                src="/assets/image_3.jpg"
                alt="Hair Coloring"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="service-card-img"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">Hair Coloring</h3>
              <Link href="/services" className="service-card-btn">
                Our services &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3: Hair Treatment */}
          <div className="service-card">
            <div className="service-card-img-wrapper">
              <Image
                src="/assets/image_4.jpg"
                alt="Hair Treatment"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="service-card-img"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">Hair Treatment</h3>
              <Link href="/services" className="service-card-btn">
                Our services &rarr;
              </Link>
            </div>
          </div>

          {/* Card 4: Makeup & Styling */}
          <div className="service-card">
            <div className="service-card-img-wrapper">
              <Image
                src="/assets/image_5.jpg"
                alt="Makeup & Styling"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="service-card-img"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">Makeup &amp; Styling</h3>
              <Link href="/services" className="service-card-btn">
                Our services &rarr;
              </Link>
            </div>
          </div>

          {/* Card 5: Hair Consultation */}
          <div className="service-card">
            <div className="service-card-img-wrapper">
              <Image
                src="/assets/image_6.jpg"
                alt="Hair Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="service-card-img"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">Hair Consultation</h3>
              <Link href="/" className="service-card-btn">
                Consult &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AQUA THERAPY PROMO */}
      <section className="aqua-therapy-section">
        <div className="aqua-therapy-container">
          <div className="aqua-image-wrapper">
            <div className="aqua-image-container">
              <Image
                src="/assets/image_7.jpg"
                alt="Client getting hair washed at salon wash station"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="aqua-image"
              />
            </div>
          </div>
          <div className="aqua-content">
            <h2 className="aqua-title">Aqua Therapy</h2>
            <p className="aqua-desc">
              Experience the ultimate hydration with our signature Aqua Therapy treatment.
              Specially designed for dry, frizzy, and chemically treated hair, this
              intensive therapy deeply nourishes each strand, restores moisture balance,
              enhances shine, and improves overall hair health.
            </p>
            <p className="aqua-desc">
              The result is silky-smooth, stronger, and more manageable hair with a
              healthy, radiant finish that lasts.
            </p>
            <Link href="/book-appointment" className="btn-aqua">
              Book Aqua Therapy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4b. FULL WIDTH SALON VIDEO */}
      <section className="full-width-video-section">
        <video 
          src="/salon_video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          controls 
          className="full-width-video"
        />
      </section>

      {/* 5. BEFORE & AFTER SECTION */}
      <section className="before-after-section">
        <div className="max-width-container">
          <h2 className="before-after-title">Before &amp; After</h2>
          <div className="before-after-grid">
            {/* Video Item 1 */}
            <div className="before-after-item">
              <Image
                src="/assets/image_8.jpg"
                alt="Before/After Hair 1"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="before-after-img"
              />
              <div className="play-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-icon-svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Item 2 */}
            <div className="before-after-item">
              <Image
                src="/assets/image_9.jpg"
                alt="Before/After Hair 2"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="before-after-img"
              />
              <div className="play-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-icon-svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Item 3 */}
            <div className="before-after-item">
              <Image
                src="/assets/image_10.jpg"
                alt="Before/After Hair 3"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="before-after-img"
              />
              <div className="play-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-icon-svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Item 4 */}
            <div className="before-after-item">
              <Image
                src="/assets/image_11.jpg"
                alt="Before/After Hair 4"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="before-after-img"
              />
              <div className="play-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-icon-svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <span className="testimonials-subtitle">What People Are Saying</span>
          <div className="testimonial-slide">
            <h2 className="testimonial-text">
              {TESTIMONIALS[currentTestimonial].text}
            </h2>
            <p className="testimonial-author">
              {TESTIMONIALS[currentTestimonial].author}
            </p>
          </div>
          <div className="testimonials-nav">
            <button className="btn-nav-slider" onClick={prevTestimonial} aria-label="Previous review">
              <svg viewBox="0 0 24 24" className="nav-arrow-svg">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button className="btn-nav-slider" onClick={nextTestimonial} aria-label="Next review">
              <svg viewBox="0 0 24 24" className="nav-arrow-svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 6b. POST-FEEDBACK IMAGES GRID */}
      <section className="post-feedback-images-section">
        <div className="post-feedback-grid">
          <div className="post-feedback-item">
            <Image 
              src="/assets/image_8.jpg" 
              alt="Hair color transformation 1" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw" 
              className="post-feedback-img" 
            />
          </div>
          <div className="post-feedback-item">
            <Image 
              src="/assets/image_9.jpg" 
              alt="Hair color transformation 2" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw" 
              className="post-feedback-img" 
            />
          </div>
          <div className="post-feedback-item">
            <Image 
              src="/assets/image_10.jpg" 
              alt="Hair color transformation 3" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw" 
              className="post-feedback-img" 
            />
          </div>
          <div className="post-feedback-item">
            <Image 
              src="/assets/image_11.jpg" 
              alt="Hair color transformation 4" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw" 
              className="post-feedback-img" 
            />
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER TICKER SECTION */}
      <section className="see-you-soon-section">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            {/* Duplicated for smooth infinite loop */}
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
            <span className="marquee-text">See you soon</span>
          </div>
        </div>
        <Link href="/book-appointment" className="btn-ticker-book">
          Book appointment &rarr;
        </Link>
      </section>
    </div>
  );
}

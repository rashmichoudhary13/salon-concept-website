import React from "react";

const BOOKING_MENU = {
  "Featured Packages": [
    { name: "Haircut + Color", duration: "2 hours", price: "", desc: "Please specify what type of cut and color service you want" }
  ],
  "Haircut": [
    { name: "Cuts", duration: "45 minutes", price: "₹110-150", desc: "" },
    { name: "Bang trim", duration: "15 minutes", price: "₹25-20", desc: "" },
    { name: "Buzz cut", duration: "30 minutes", price: "₹60", desc: "" }
  ],
  "Color": [
    { name: "Single process", duration: "1 hour 30 minutes", price: "₹110-130", desc: "" },
    { name: "Full head highlight", duration: "2 hours", price: "₹160-200", desc: "" },
    { name: "Half head highlight", duration: "1 hour 30 minutes", price: "₹120-180", desc: "" },
    { name: "Balayage", duration: "2 hours 30 minutes", price: "₹180-250", desc: "" },
    { name: "Glaze/Toner", duration: "45 minutes", price: "₹70-90", desc: "" },
    { name: "Color correction", duration: "Price upon consultation", price: "", desc: "" },
    { name: "Double process", duration: "Price upon consultation", price: "", desc: "" }
  ],
  "Styling": [
    { name: "Blow out", duration: "45 minutes", price: "₹45", desc: "" },
    { name: "Relaxer", duration: "Price upon consultation", price: "", desc: "" }
  ],
  "Treatments": [
    { name: "Conditioning treatment", duration: "30 minutes", price: "₹60-90", desc: "" },
    { name: "Keratin", duration: "2 hours", price: "₹110-140", desc: "" },
    { name: "Scalp", duration: "45 minutes", price: "₹60-90", desc: "" }
  ]
};

export default function BookAppointmentPage() {
  return (
    <div className="booking-page-wrap" style={{ backgroundImage: "url('/assets/image_25.jpg')" }}>
      <div className="booking-page-overlay">
        <div className="booking-widget-card">
          {/* Header */}
          <div className="booking-widget-header">
            <svg viewBox="0 0 24 24" className="calendar-icon" width="24" height="24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="booking-widget-title">Select Appointment</span>
          </div>

          <div className="booking-widget-content">
            {Object.entries(BOOKING_MENU).map(([category, items]) => (
              <React.Fragment key={category}>
                <h3 className="booking-category-heading">{category}</h3>
                {items.map((item, idx) => (
                  <div key={idx} className="booking-item-card">
                    <div className="booking-item-details">
                      <h3 className="booking-item-name">{item.name}</h3>
                      <p className="booking-item-duration" style={{ marginBottom: item.desc ? '12px' : '0px' }}>
                        {item.duration}{item.price ? ` @ ${item.price}` : ''}
                      </p>
                      {item.desc && (
                        <p className="booking-item-description">{item.desc}</p>
                      )}
                    </div>
                    <button className="booking-item-btn">BOOK</button>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

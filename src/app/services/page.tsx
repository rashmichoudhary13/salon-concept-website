"use client";
import React, { useState } from "react";
import Image from "next/image";

const MENU_DATA = {
  HAIRCUT: [
    { title: "Cuts", description: "", price: "₹110-150" },
    { title: "Bang trim", description: "", price: "₹25-20" },
    { title: "Buzz cut", description: "", price: "₹60" },
  ],
  COLOR: [
    { title: "Single process", description: "", price: "₹110-130" },
    { title: "Full head highlight", description: "", price: "₹160-200" },
    { title: "Half head highlight", description: "", price: "₹120-180" },
    { title: "Balayage", description: "", price: "₹180-250" },
    { title: "Glaze/Toner", description: "", price: "₹70-90" },
    { title: "Color correction", description: "Price upon consultation", price: "" },
    { title: "Double process", description: "Price upon consultation", price: "" },
  ],
  STYLING: [
    { title: "Blow out", description: "", price: "₹45" },
    { title: "Relaxer", description: "Price upon consultation", price: "" },
  ],
  TREATMENTS: [
    { title: "Conditioning treatment", description: "", price: "₹60-90" },
    { title: "Keratin", description: "", price: "₹110-140" },
    { title: "Scalp", description: "", price: "₹60-90" },
  ],
};

type TabName = keyof typeof MENU_DATA;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabName>("HAIRCUT");

  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="services-main-title">Our services</h1>
      </div>

      {/* Tabs list navigation */}
      <div className="services-tabs-container">
        {(Object.keys(MENU_DATA) as TabName[]).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Split layout columns */}
      <div className="services-split-container">
        <div className="services-list-panel">
          <h2 className="services-panel-title">
            {activeTab === "HAIRCUT"
              ? "Haircut"
              : activeTab === "COLOR"
                ? "Color"
                : activeTab === "STYLING"
                  ? "Styling"
                  : "Treatments"}
          </h2>

          <div className="services-items-list">
            {MENU_DATA[activeTab].map((item, idx) => (
              <div key={idx} className="menu-service-item">
                <div className="menu-service-row">
                  <span className="menu-service-title">{item.title}</span>
                  {item.price && (
                    <span className="menu-service-price">
                      {item.price.startsWith("₹") ? (
                        <>
                          <span className="rupee-symbol">₹</span>
                          {item.price.substring(1)}
                        </>
                      ) : (
                        item.price
                      )}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="menu-service-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Image */}
        <div className="services-sidebar-image-wrapper">
          <div className="services-sidebar-container">
            <Image
              src="/assets/image_14.jpg"
              alt="Woman profile hair styling session"
              fill
              priority
              sizes="(max-width: 992px) 100vw, 450px"
              className="services-sidebar-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

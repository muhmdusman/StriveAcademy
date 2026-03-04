"use client";
import { useState } from "react";

const ContactLocationCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600' style={{ height: '100%' }}>
      <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
        <i className='ph ph-map-pin-line' />
      </span>
      <div className='flex-grow-1'>
        <h4 className='mb-12'>Our Location</h4>
        <div
          style={{
            overflow: 'hidden',
            maxHeight: expanded ? 'none' : '72px',
            transition: 'max-height 0.3s ease',
          }}
        >
          <p className='text-neutral-500 mb-0'>
            <strong>Branch 1:</strong> 510-Shehbaz Block Mustafa Town, Main Wahdat Road, Lahore
          </p>
          <p className='text-neutral-500 mt-8 mb-0'>
            <strong>Branch 2:</strong> 20-A Commercial Plaza (Basement of Cakes n Bakes), Izmir Town, Canal Road, Lahore
          </p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-main-600 fw-semibold text-decoration-underline mt-16 border-0 bg-transparent p-0'
          style={{ cursor: 'pointer' }}
        >
          {expanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default ContactLocationCard;

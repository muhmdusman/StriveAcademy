"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "923361401532"; // Replace with real number later
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppIcon = ({ size = 24, color = "#fff" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const WhatsAppFAB = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Popup Card */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-label="Contact via WhatsApp"
                    style={{
                        position: "fixed",
                        bottom: "90px",
                        right: "24px",
                        zIndex: 9999,
                        background: "#fff",
                        borderRadius: "16px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        width: "280px",
                        overflow: "hidden",
                        animation: "fabPopIn 0.22s ease-out",
                    }}
                >
                    {/* Popup Header */}
                    <div
                        style={{
                            background: "#25d366",
                            padding: "14px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <WhatsAppIcon size={22} color="#fff" />
                            <span
                                style={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                }}
                            >
                                WhatsApp Chat
                            </span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close WhatsApp popup"
                            style={{
                                background: "none",
                                border: "none",
                                color: "#fff",
                                fontSize: "20px",
                                cursor: "pointer",
                                lineHeight: 1,
                                padding: "0 2px",
                            }}
                        >
                            &times;
                        </button>
                    </div>

                    {/* Popup Body */}
                    <div style={{ padding: "16px" }}>
                        <p
                            style={{
                                fontSize: "13px",
                                color: "#666",
                                marginBottom: "14px",
                                lineHeight: 1.5,
                            }}
                        >
                            Hello! Click on our member below to contact us.
                        </p>

                        {/* Contact Entry */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Strive Star Academy on WhatsApp"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                background: "#f0fdf4",
                                border: "1.5px solid #25d36640",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                textDecoration: "none",
                                transition: "background 0.18s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#dcfce7")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "#f0fdf4")
                            }
                        >
                            <span
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    background: "#25d366",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <WhatsAppIcon size={20} color="#fff" />
                            </span>
                            <div>
                                <span
                                    style={{
                                        display: "block",
                                        fontWeight: 600,
                                        color: "#1a1a1a",
                                        fontSize: "14px",
                                    }}
                                >
                                    Strive Star Academy
                                </span>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: "12px",
                                        color: "#25d366",
                                        marginTop: "2px",
                                    }}
                                >
                                    Tap to chat on WhatsApp
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
                aria-expanded={isOpen}
                style={{
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    zIndex: 9999,
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#25d366",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
                    transition: "transform 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.12)";
                    e.currentTarget.style.boxShadow =
                        "0 6px 28px rgba(37,211,102,0.6)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(37,211,102,0.45)";
                }}
            >
                {isOpen ? (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <WhatsAppIcon size={28} color="#fff" />
                )}
            </button>

            <style>{`
        @keyframes fabPopIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
        </>
    );
};

export default WhatsAppFAB;

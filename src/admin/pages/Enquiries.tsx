import { useState } from "react";

import './Enquiry.css'

import AdminNav from "../component/AdminNav";

const seedEnquiries = [
  { id: 1, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 2, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 3, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 4, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
];

export default function Enquiries() {
  const [enquiries] = useState(seedEnquiries);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [sessionAmount, setSessionAmount] = useState("");

  const filtered = enquiries.filter(e =>
    e.customer.toLowerCase().includes(search.toLowerCase())
  );

  const openDetail = (item) => {
    setSelected(item);
    setSessionAmount("");
  };

  const handleAddToBooking = () => {
    // Hook up to your booking logic here
    alert(`Added ${selected.customer} to bookings with session amount: ${sessionAmount || "N/A"}`);
    setSelected(null);
  };

  return (
    <>
    <AdminNav />
    <div className="eq-app">

      <div className="eq-page">

        {/* Title */}
        <h1 className="eq-title">Enquiries</h1>

        {/* Filter Bar */}
        <div className="eq-filter">
          <div className="eq-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              placeholder="Search transactions"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="eq-date">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            2021-05-01 · 2021-05-01
          </div>
        </div>

        {/* Table */}
        <div className="eq-table-wrap">
          <div className="eq-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Amount</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Session Type</th>
                <th>Date/Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "#333", padding: "40px" }}>
                    No enquiries found.
                  </td>
                </tr>
              ) : (
                filtered.map(item => (
                  <tr key={item.id}>
                    <td>{item.customer}</td>
                    <td>{item.amount}</td>
                    <td>{item.phone}</td>
                    <td><span className="badge-paid">{item.status}</span></td>
                    <td>{item.sessionType}</td>
                    <td>{item.dateTime}</td>
                    <td>
                      <button className="eye-btn" onClick={() => openDetail(item)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          </div>

          {/* Mobile card layout */}
          <div className="eq-cards">
            {filtered.length === 0 ? (
              <p style={{textAlign:"center",color:"#333",padding:"40px 0",fontSize:"0.8rem"}}>No enquiries found.</p>
            ) : filtered.map(item => (
              <div className="eq-card" key={item.id}>
                <div className="eq-card-top">
                  <span className="eq-card-name">{item.customer}</span>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:0}}>
                    <span className="badge-paid">{item.status}</span>
                    <button className="eye-btn" onClick={() => openDetail(item)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="eq-card-body">
                  <div className="eq-card-field">
                    <span className="eq-card-key">Amount</span>
                    <span className="eq-card-val">{item.amount}</span>
                  </div>
                  <div className="eq-card-field">
                    <span className="eq-card-key">Phone</span>
                    <span className="eq-card-val">{item.phone}</span>
                  </div>
                  <div className="eq-card-field">
                    <span className="eq-card-key">Session</span>
                    <span className="eq-card-val">{item.sessionType}</span>
                  </div>
                  <div className="eq-card-field">
                    <span className="eq-card-key">Date</span>
                    <span className="eq-card-val">{item.dateTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="eq-pagination">
            <button className="page-btn">Prev</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>

      {/* ── Enquiries Details Drawer ── */}
      {selected && (
        <>
          <div className="overlay" onClick={() => setSelected(null)} />
          <div className="drawer">
            {/* Header */}
            <div className="d-header">
              <span className="d-title">Enquiries Details</span>
              <div className="d-actions">
                <button className="icon-btn" title="Edit">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="icon-btn" onClick={() => setSelected(null)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Customer Details */}
            <p className="section-label">Customer Details</p>

            {[
              ["Full Name",    selected.customer],
              ["Email",        selected.email],
              ["Phone Number", selected.phone],
              ["Session Type", "Rehersal session"],
              ["Date",         selected.date],
              ["Time",         selected.time],
              ["Status",       <span className="badge-paid" key="st">PAID</span>],
            ].map(([k, v], i) => (
              <div className="detail-row" key={i}>
                <span className="detail-key">{k}</span>
                <span className="detail-val">{v}</span>
              </div>
            ))}

            <hr className="divider" />

            {/* Session Amount */}
            <label className="form-label">Session Amount</label>
            <input
              className="form-input"
              placeholder="John Doe"
              value={sessionAmount}
              onChange={e => setSessionAmount(e.target.value)}
            />

            <button className="btn-add-booking" onClick={handleAddToBooking}>
              ADD TO BOOKING
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
}
import { useState } from "react";

import AdminNav from "../component/AdminNav";

/* ─────────────────────────── seed data ─────────────────────────── */
const seedEnquiries = [
  { id: 1, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 2, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 3, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
  { id: 4, customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", sessionType: "Edit role", dateTime: "24th may 2025", email: "preciousvwarho@gmail.com", date: "₦ 30,000,000", time: "12:15pm" },
];

/* ─────────────────────────── styles ─────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d0d0d;
  --surface: #161616;
  --border: #252525;
  --gold: #c9940a;
  --gold-hover: #e0a80c;
  --green: #22c55e;
  --green-bg: #14532d;
  --green-border: #166534;
  --text: #e8e8e8;
  --muted: #666;
}

.eq-app {
  font-family: 'Sora', sans-serif;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
}

/* ── Page ── */
.eq-page {
  padding: 4rem 10rem;
}

.eq-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 36px;
}

/* ── Filter Bar ── */
.eq-filter {
  background: var(--surface);
  border-radius: 8px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.eq-search {
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  min-width: 160px;
}
.eq-search svg { color: #555; flex-shrink: 0; }
.eq-search input {
  background: transparent;
  border: none;
  outline: none;
  color: #777;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  width: 100%;
}
.eq-search input::placeholder { color: #444; }
.eq-date {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #666;
  font-size: 0.75rem;
  white-space: nowrap;
}

/* ── Table ── */
.eq-table-wrap {
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
}

/* scrollable inner container with styled scrollbar */
.eq-table-scroll {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #c9940a66 #1a1a1a;
  padding-bottom: 6px;
  /* fade hints on edges */
  -webkit-mask-image: linear-gradient(to right, transparent 0px, black 14px, black calc(100% - 14px), transparent 100%);
  mask-image: linear-gradient(to right, transparent 0px, black 14px, black calc(100% - 14px), transparent 100%);
}
.eq-table-scroll::-webkit-scrollbar {
  height: 4px;
}
.eq-table-scroll::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 99px;
  margin: 0 20px;
}
.eq-table-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, var(--gold), #e0a80c);
  border-radius: 99px;
}
.eq-table-scroll::-webkit-scrollbar-thumb:hover {
  background: var(--gold-hover);
}

table { width: 100%; border-collapse: collapse; min-width: 620px; }
thead tr { border-bottom: 1px solid var(--border); }
thead th {
  padding: 16px 18px;
  text-align: left;
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}

tbody tr {
  border-bottom: 1px solid #1c1c1c;
  transition: background .15s;
}
tbody tr:last-child { border-bottom: none; }
tbody tr:hover { background: #1b1b1b; }
tbody td {
  padding: 16px 18px;
  font-size: 0.82rem;
  color: #ccc;
  white-space: nowrap;
}

.badge-paid {
  display: inline-block;
  background: var(--green-bg);
  color: var(--green);
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  border: 1px solid var(--green-border);
}
.eye-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #555;
  padding: 4px;
  border-radius: 4px;
  transition: color .2s;
  display: flex;
  align-items: center;
}
.eye-btn:hover { color: var(--gold); }

/* ── Mobile Cards (replaces table on small screens) ── */
.eq-cards { display: none; }

.eq-card {
  background: var(--surface);
  border-radius: 10px;
  padding: 16px 18px;
  margin-bottom: 10px;
  border: 1px solid var(--border);
  transition: border-color .2s;
}
.eq-card:hover { border-color: #3a3a3a; }

.eq-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 8px;
}
.eq-card-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.eq-card-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 12px;
}
.eq-card-field { display: flex; flex-direction: column; gap: 2px; }
.eq-card-key {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--muted);
}
.eq-card-val {
  font-size: 0.78rem;
  color: #ccc;
}

/* ── Pagination ── */
.eq-pagination {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 18px 6px;
}
.page-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: #777;
  font-family: 'Sora', sans-serif;
  font-size: 0.72rem;
  padding: 6px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color .2s, color .2s;
}
.page-btn:hover { border-color: var(--gold); color: var(--gold); }

/* ── Overlay + Drawer ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.68);
  z-index: 50;
  animation: fadeIn .2s ease;
}
@keyframes fadeIn { from{opacity:0} to{opacity:1} }

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 420px;
  background: var(--surface);
  z-index: 51;
  overflow-y: auto;
  padding: 32px 26px 52px;
  animation: slideIn .25s ease;
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a transparent;
}
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

/* ── Drawer Header ── */
.d-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.d-title {
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.d-actions { display: flex; gap: 10px; align-items: center; }
.icon-btn {
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 4px;
  transition: color .2s;
  display: flex;
}
.icon-btn:hover { color: var(--text); }

/* ── Customer Details Section ── */
.section-label {
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 11px 0;
  border-bottom: 1px solid #1e1e1e;
  font-size: 0.8rem;
}
.detail-row:last-of-type { border-bottom: none; }
.detail-key { color: var(--muted); flex-shrink: 0; }
.detail-val { color: var(--text); text-align: right; }

/* ── Session Amount ── */
.divider { border: none; border-top: 1px solid var(--border); margin: 22px 0 18px; }

.form-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 8px;
}
.form-input {
  width: 100%;
  background: #111;
  border: 1px solid #2c2c2c;
  border-radius: 5px;
  padding: 13px 14px;
  color: #e8e8e8;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  outline: none;
  transition: border-color .2s;
  margin-bottom: 16px;
}
.form-input:focus { border-color: var(--gold); }
.form-input::placeholder { color: #333; }

.btn-add-booking {
  width: 100%;
  background: var(--gold);
  color: #0d0d0d;
  border: none;
  padding: 15px;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: background .2s, transform .15s;
}
.btn-add-booking:hover { background: var(--gold-hover); transform: translateY(-1px); }
.btn-add-booking:active { transform: translateY(0); }

/* ── Responsive ── */
@media (max-width: 700px) {
  .eq-page { padding: 24px 16px; }
  .eq-filter { flex-direction: column; align-items: flex-start; }
  .drawer { max-width: 100%; padding: 26px 18px 48px; }

  /* swap table → cards */
  .eq-table-wrap table, .eq-table-wrap thead, .eq-table-wrap tbody { display: none; }
  .eq-cards { display: block; }
  .eq-pagination { padding: 4px 0 2px; }
}
`;

/* ─────────────────────────── component ─────────────────────────── */
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

      <style>{css}</style>
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
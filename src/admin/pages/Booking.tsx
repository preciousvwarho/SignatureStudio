import { useState } from "react";
import AdminNav from "../component/AdminNav";

/* ─────────────────────────── seed data ─────────────────────────── */
const seedBookings = [
  {
    id: 1,
    customer: "Precious Oghenevwarho",
    amount: "₦30,000",
    phone: "07035814787",
    status: "PAID",
    sessionType: "Rehearsal session",
    dateTime: "24th may 2025",
    email: "preciousvwarho@gmail.com",
    date: "25th Dec 2025",
    time: "12:13pm",
    payments: [
      { date: "25th Dec 2025", note: "", amount: "₦1,000,000" },
      { date: "10th Dec 2025", note: "", amount: "₦1,000,000" },
    ],
    total: "₦10,000,000",
  },
  {
    id: 2,
    customer: "Precious Oghenevwarho",
    amount: "₦30,000",
    phone: "07035814787",
    status: "PAID",
    sessionType: "Edit role",
    dateTime: "24th may 2025",
    email: "preciousvwarho@gmail.com",
    date: "24th may 2025",
    time: "10:00am",
    payments: [],
    total: "₦30,000",
  },
  {
    id: 3,
    customer: "Precious Oghenevwarho",
    amount: "₦30,000",
    phone: "07035814787",
    status: "PAID",
    sessionType: "Edit role",
    dateTime: "24th may 2025",
    email: "preciousvwarho@gmail.com",
    date: "24th may 2025",
    time: "10:00am",
    payments: [],
    total: "₦30,000",
  },
  {
    id: 4,
    customer: "Precious Oghenevwarho",
    amount: "₦30,000",
    phone: "07035814787",
    status: "PAID",
    sessionType: "Edit role",
    dateTime: "24th may 2025",
    email: "preciousvwarho@gmail.com",
    date: "24th may 2025",
    time: "10:00am",
    payments: [],
    total: "₦30,000",
  },
];

/* ─────────────────────────── styles ─────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d0d0d;
  --surface: #161616;
  --surface2: #1e1e1e;
  --border: #2a2a2a;
  --gold: #c9940a;
  --gold-hover: #e0a80c;
  --green: #22c55e;
  --text: #e8e8e8;
  --muted: #777;
  --danger: #ef4444;
}

body { background: var(--bg); }

.app {
  font-family: 'Sora', sans-serif;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
}

/* ── Page ── */
.page {
 padding: 4rem 10rem;
//   max-width: 1200px;
//   margin: 0 auto;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 14px;
}

.page-title {
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.5px;
}

.btn-gold {
  background: var(--gold);
  color: #0d0d0d;
  border: none;
  padding: 11px 24px;
  font-family: 'Sora', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  transition: background .2s, transform .15s;
  white-space: nowrap;
}
.btn-gold:hover { background: var(--gold-hover); transform: translateY(-1px); }
.btn-gold:active { transform: translateY(0); }

/* ── Filter Bar ── */
.filter-bar {
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
.search-wrap {
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  min-width: 160px;
}
.search-wrap svg { color: #555; flex-shrink: 0; }
.search-wrap input {
  background: transparent;
  border: none;
  outline: none;
  color: #777;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  width: 100%;
}
.search-wrap input::placeholder { color: #444; }
.date-range {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #666;
  font-size: 0.75rem;
  white-space: nowrap;
}

/* ── Table ── */
.table-wrap {
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
  overflow-x: auto;
}
table { width: 100%; border-collapse: collapse; min-width: 640px; }
thead tr { border-bottom: 1px solid var(--border); }
thead th {
  padding: 16px 18px;
  text-align: left;
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--muted);
}
tbody tr {
  border-bottom: 1px solid #1e1e1e;
  transition: background .15s;
}
tbody tr:last-child { border-bottom: none; }
tbody tr:hover { background: #1c1c1c; }
tbody td {
  padding: 18px 18px;
  font-size: 0.82rem;
  color: #ccc;
}
.badge-paid {
  display: inline-block;
  background: #14532d;
  color: var(--green);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  border: 1px solid #166534;
}
.eye-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;
  transition: color .2s;
  display: flex;
  align-items: center;
}
.eye-btn:hover { color: var(--gold); }

/* ── Pagination ── */
.pagination {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 18px 4px;
}
.page-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: #888;
  font-family: 'Sora', sans-serif;
  font-size: 0.72rem;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color .2s, color .2s;
}
.page-btn:hover { border-color: var(--gold); color: var(--gold); }

/* ── Drawer / Panel (shared) ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.65);
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
  max-width: 440px;
  background: var(--surface);
  z-index: 51;
  overflow-y: auto;
  padding: 36px 28px 48px;
  animation: slideIn .25s ease;
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a transparent;
}
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.drawer-title {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.drawer-actions { display: flex; gap: 10px; align-items: center; }
.icon-btn {
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color .2s;
  display: flex;
}
.icon-btn:hover { color: var(--text); }

/* ── Form ── */
.form-group { margin-bottom: 18px; }
.form-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 7px;
}
.form-input, .form-select {
  width: 100%;
  background: #111;
  border: 1px solid #2c2c2c;
  border-radius: 5px;
  padding: 12px 14px;
  color: #e8e8e8;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  outline: none;
  transition: border-color .2s;
  appearance: none;
}
.form-input:focus, .form-select:focus { border-color: var(--gold); }
.form-input::placeholder { color: #333; }
.form-select option { background: #1a1a1a; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

/* radio hours */
.hours-wrap {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}
.radio-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #aaa;
  cursor: pointer;
}
.radio-label input[type="radio"] {
  accent-color: var(--gold);
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.btn-submit-full {
  width: 100%;
  background: var(--gold);
  color: #0d0d0d;
  border: none;
  padding: 15px;
  font-family: 'Sora', sans-serif;
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background .2s, transform .15s;
}
.btn-submit-full:hover { background: var(--gold-hover); transform: translateY(-1px); }
.btn-submit-full:active { transform: translateY(0); }

/* ── Details Panel ── */
.section-label {
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 16px;
}
.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #1f1f1f;
  font-size: 0.8rem;
}
.detail-row:last-child { border-bottom: none; }
.detail-key { color: var(--muted); flex-shrink: 0; }
.detail-val { color: var(--text); text-align: right; }

.divider { border: none; border-top: 1px solid var(--border); margin: 24px 0; }

.payment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.btn-add-pay {
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-family: 'Sora', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background .2s, color .2s;
}
.btn-add-pay:hover { background: var(--gold); color: #0d0d0d; }

.add-pay-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 10px;
  margin-bottom: 18px;
  align-items: end;
}
.add-pay-form .form-input { margin: 0; }
.btn-pay-add {
  background: var(--gold);
  border: none;
  color: #0d0d0d;
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background .2s;
  white-space: nowrap;
}
.btn-pay-add:hover { background: var(--gold-hover); }

.pay-row {
  display: flex;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid #1f1f1f;
  font-size: 0.8rem;
  color: #bbb;
}
.pay-row:last-child { border-bottom: none; }
.pay-total {
  display: flex;
  justify-content: flex-end;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
  padding-top: 14px;
  border-top: 1px solid var(--border);
  margin-top: 4px;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .page { padding: 24px 16px; }
  .filter-bar { flex-direction: column; align-items: flex-start; }
  .form-row { grid-template-columns: 1fr; }
  .drawer { max-width: 100%; padding: 28px 18px 48px; }
  .add-pay-form { grid-template-columns: 1fr 1fr; }
  .add-pay-form .btn-pay-add { grid-column: 1 / -1; }
}
`;

/* ─────────────────────────── component ─────────────────────────── */
export default function Booking() {
  const [bookings, setBookings] = useState(seedBookings);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list"); // 'list' | 'add' | 'detail'
  const [selected, setSelected] = useState(null);
  const [addPayOpen, setAddPayOpen] = useState(false);
  const [payForm, setPayForm] = useState({ date: "", note: "", amount: "" });

  const [form, setForm] = useState({
    customer: "", phone: "", email: "",
    dateTime: "", sessionType: "", hours: "1", amount: "",
  });

  const filtered = bookings.filter(b =>
    b.customer.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!form.customer.trim()) return;
    const nb = {
      id: Date.now(),
      customer: form.customer,
      amount: form.amount ? `₦${form.amount}` : "₦0",
      phone: form.phone,
      status: "PAID",
      sessionType: form.sessionType || "Session",
      dateTime: form.dateTime || "—",
      email: form.email,
      date: form.dateTime || "—",
      time: "—",
      payments: [],
      total: form.amount ? `₦${form.amount}` : "₦0",
    };
    setBookings([nb, ...bookings]);
    setForm({ customer: "", phone: "", email: "", dateTime: "", sessionType: "", hours: "1", amount: "" });
    setView("list");
  };

  const openDetail = (b) => { setSelected({ ...b }); setView("detail"); setAddPayOpen(false); };

  const handleAddPayment = () => {
    if (!payForm.amount) return;
    const updated = {
      ...selected,
      payments: [...selected.payments, { date: payForm.date || "Today", note: payForm.note, amount: `₦${payForm.amount}` }],
    };
    setSelected(updated);
    setBookings(bookings.map(b => b.id === updated.id ? updated : b));
    setPayForm({ date: "", note: "", amount: "" });
    setAddPayOpen(false);
  };

  return (
    <>
                <AdminNav />
    <div className="app">
      <style>{css}</style>
      <div className="page">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Bookings</h1>
          <button className="btn-gold" onClick={() => setView("add")}>ADD BOOKING</button>
        </div>

        {/* Filter */}
        <div className="filter-bar">
          <div className="search-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input placeholder="Search transactions" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="date-range">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            2021-04-01 · 2021-05-01
          </div>
        </div>

        {/* Table */}
        <div className="table-wrap">
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
                <tr><td colSpan={7} style={{textAlign:"center",color:"#444",padding:"40px"}}>No bookings found.</td></tr>
              ) : filtered.map(b => (
                <tr key={b.id}>
                  <td>{b.customer}</td>
                  <td>{b.amount}</td>
                  <td>{b.phone}</td>
                  <td><span className="badge-paid">{b.status}</span></td>
                  <td>{b.sessionType}</td>
                  <td>{b.dateTime}</td>
                  <td>
                    <button className="eye-btn" onClick={() => openDetail(b)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button className="page-btn">Prev</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>

      {/* ── Add Booking Drawer ── */}
      {view === "add" && (
        <>
          <div className="overlay" onClick={() => setView("list")} />
          <div className="drawer">
            <div className="drawer-header">
              <span className="drawer-title">Add Booking</span>
              <button className="icon-btn" onClick={() => setView("list")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">Customer Full Name</label>
              <input className="form-input" placeholder="Customer Full Name" value={form.customer}
                onChange={e => setForm({...form, customer: e.target.value})} />
            </div>

            <div className="form-group form-row">
              <div>
                <label className="form-label">Phone Number</label>
                <input className="form-input" placeholder="123334554" value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input className="form-input" placeholder="Email Address" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Date/Time</label>
              <input className="form-input" type="date" value={form.dateTime}
                onChange={e => setForm({...form, dateTime: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">Type of Session</label>
              <select className="form-select" value={form.sessionType}
                onChange={e => setForm({...form, sessionType: e.target.value})}>
                <option value="">Choose Session</option>
                <option value="Rehearsal session">Rehearsal session</option>
                <option value="Recording session">Recording session</option>
                <option value="Mixing session">Mixing session</option>
                <option value="Mastering session">Mastering session</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">How many hours:</label>
              <div className="hours-wrap">
                {["1","2","3","4","More"].map(h => (
                  <label className="radio-label" key={h}>
                    <input type="radio" name="hours" value={h} checked={form.hours===h}
                      onChange={() => setForm({...form, hours: h})} />
                    {h}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Booking Amount</label>
              <input className="form-input" placeholder="000,000" value={form.amount}
                onChange={e => setForm({...form, amount: e.target.value})} />
            </div>

            <button className="btn-submit-full" onClick={handleAdd}>ADD BOOKING</button>
          </div>
        </>
      )}

      {/* ── Booking Details Drawer ── */}
      {view === "detail" && selected && (
        <>
          <div className="overlay" onClick={() => setView("list")} />
          <div className="drawer">
            <div className="drawer-header">
              <span className="drawer-title">Booking Details</span>
              <div className="drawer-actions">
                <button className="icon-btn" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="icon-btn" onClick={() => setView("list")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
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
              ["Email",        selected.email],
              ["Session Type", selected.sessionType],
              ["Date",         selected.amount],
              ["Time",         selected.time],
              ["Status",       <span className="badge-paid" key="s">PAID</span>],
            ].map(([k, v], i) => (
              <div className="detail-row" key={i}>
                <span className="detail-key">{k}</span>
                <span className="detail-val">{v}</span>
              </div>
            ))}

            <hr className="divider" />

            {/* Payment History */}
            <div className="payment-header">
              <p className="section-label" style={{marginBottom:0}}>Payment History</p>
              <button className="btn-add-pay" onClick={() => setAddPayOpen(v => !v)}>
                + Add Payment
              </button>
            </div>

            {addPayOpen && (
              <div className="add-pay-form">
                <input className="form-input" placeholder="Amount" value={payForm.amount}
                  onChange={e => setPayForm({...payForm, amount: e.target.value})} />
                <input className="form-input" placeholder="Note" value={payForm.note}
                  onChange={e => setPayForm({...payForm, note: e.target.value})} />
                <button className="btn-pay-add" onClick={handleAddPayment}>Add</button>
              </div>
            )}

            {selected.payments.map((p, i) => (
              <div className="pay-row" key={i}>
                <span>{p.date}</span>
                <span>{p.amount}</span>
              </div>
            ))}

            {selected.payments.length === 0 && (
              <p style={{color:"#444", fontSize:"0.78rem", padding:"12px 0"}}>No payments recorded.</p>
            )}

            <div className="pay-total">{selected.total}</div>
          </div>
        </>
      )}
    </div>
    </>
  );
}
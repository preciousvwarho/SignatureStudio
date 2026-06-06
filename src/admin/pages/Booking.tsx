import { useState } from "react";
import AdminNav from "../component/AdminNav";
import './Booking.css'

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

import AdminNav from '../component/AdminNav'
import { useState } from "react";
import "./Dashboard.css";

const STATS = [
  { label: "Session Booking", value: 58 },
  { label: "Booking Enquiries", value: 22 },
  { label: "Mailing List", value: 20 },
];

const ENQUIRIES = [
  { customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", session: "Edit role", date: "24th May 2025" },
  { customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", session: "Edit role", date: "24th May 2025" },
  { customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PAID", session: "Edit role", date: "24th May 2025" },
  { customer: "Precious Oghenevwarho", amount: "₦30,000", phone: "07035814787", status: "PENDING", session: "Edit role", date: "24th May 2025" },
];

const StatusBadge = ({ status }: { status: string }) => (
  <span className={`admin_dash__badge admin_dash__badge--${status.toLowerCase()}`}>
    {status}
  </span>
);

const IconBox = () => (
  <div className="admin_dash__icon-box" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  </div>
);

export default function Dashboard() {
  const [enquiries] = useState(ENQUIRIES);

  return (
    <>
        <AdminNav />
    <div className="admin_dash">
      {/* Header */}
      <div className="admin_dash__header">
        <div className="admin_dash__header-left">
          <h1 className="admin_dash__title">Dashboard</h1>
          <p className="admin_dash__greeting">Hi Precious, Do have a productive day.</p>
        </div>
        <div className="admin_dash__revenue">
          <span className="admin_dash__revenue-label">April Revenue</span>
          <span className="admin_dash__revenue-amount">₦5,800,000</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="admin_dash__cards">
        {STATS.map((s) => (
          <div key={s.label} className="admin_dash__card">
            <div className="admin_dash__card-top">
              <span className="admin_dash__card-label">{s.label}</span>
              <IconBox />
            </div>
            <span className="admin_dash__card-value">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Latest Enquiries */}
      <div className="admin_dash__section">
        <h2 className="admin_dash__section-title">Latest Enquiries</h2>
        <div className="admin_dash__table-wrap">
          <table className="admin_dash__table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Amount</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Session Type</th>
                <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((row, i) => (
                <tr key={i}>
                  <td>{row.customer}</td>
                  <td>{row.amount}</td>
                  <td>{row.phone}</td>
                  <td><StatusBadge status={row.status} /></td>
                  <td>{row.session}</td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
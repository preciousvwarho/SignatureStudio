import { useState } from "react";
import AdminNav from "../component/AdminNav";
import "./user.css"

const initialUsers = [
  {
    id: 1,
    fullName: "Precious Oghenevwarho",
    email: "preciousvwarho@gmail.com",
    phone: "07035814787",
    role: "Admin",
    dateTime: "24th may 2025",
  },
  {
    id: 2,
    fullName: "Lola vwarho",
    email: "lolavwarho@gmail.com",
    phone: "07035814787",
    role: "Manager",
    dateTime: "24th may 2025",
  },
];



export default function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
  });

  const filtered = users.filter(
    (u) =>
      u.fullName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (!form.fullName.trim()) {
      setError("Account could not be found");
      return;
    }
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setUsers([
      ...users,
      {
        id: Date.now(),
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        role: form.role || "User",
        dateTime: dateStr,
      },
    ]);
    setForm({ fullName: "", phone: "", email: "", role: "" });
    setError("");
    setModalOpen(false);
  };

  return (
    <>
            <AdminNav />
      {/* <style>{styles}</style> */}
      <div className="users-root">
        {/* Header */}
        <div className="users-header">
          <h1 className="users-title">Users</h1>
          <button className="btn-add-user" onClick={() => setModalOpen(true)}>
            ADD USER
          </button>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="search-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="search-input"
              placeholder="Search transactions"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="date-filter">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>2021-05-01 · 2021-05-01</span>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", color: "#555", padding: "40px" }}>
                    No users found.
                  </td>
                </tr>
              ) : (
                filtered.map((user) => (
                  <tr key={user.id}>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>{user.dateTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-card">
            <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <h2 className="modal-title">Add Account</h2>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
              />
              {error && <p className="form-error">{error}</p>}
            </div>

            <div className="form-group form-row">
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">User Role</label>
              <input
                className="form-input"
                name="role"
                placeholder="User Role"
                value={form.role}
                onChange={handleChange}
              />
            </div>

            <button className="btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

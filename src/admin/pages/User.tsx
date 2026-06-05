import { useState } from "react";
import AdminNav from "../component/AdminNav";

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

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .users-root {
    font-family: 'Sora', sans-serif;
    min-height: 100vh;
    color: #ffffff;
    padding: 4rem 10rem;
  }

  /* ── Header ── */
  .users-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .users-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  .btn-add-user {
    background: #c9940a;
    color: #0d0d0d;
    border: none;
    padding: 12px 28px;
    font-family: 'Sora', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s, transform 0.15s;
    white-space: nowrap;
  }
  .btn-add-user:hover {
    background: #e0a80c;
    transform: translateY(-1px);
  }
  .btn-add-user:active {
    transform: translateY(0);
  }

  /* ── Search / Filter Bar ── */
  .filter-bar {
    background: #181818;
    border-radius: 8px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 180px;
  }

  .search-icon {
    color: #666;
    flex-shrink: 0;
  }

  .search-input {
    background: transparent;
    border: none;
    outline: none;
    color: #888;
    font-family: 'Sora', sans-serif;
    font-size: 0.875rem;
    width: 100%;
  }
  .search-input::placeholder { color: #555; }

  .date-filter {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #888;
    font-size: 0.8rem;
    white-space: nowrap;
  }
  .date-filter svg { color: #666; flex-shrink: 0; }

  /* ── Table ── */
  .table-wrapper {
    background: #181818;
    border-radius: 8px;
    overflow: hidden;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 560px;
  }

  thead tr {
    border-bottom: 1px solid #2a2a2a;
  }

  thead th {
    padding: 18px 20px;
    text-align: left;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: #888;
  }

  tbody tr {
    border-bottom: 1px solid #222;
    transition: background 0.15s;
  }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: #1f1f1f; }

  tbody td {
    padding: 20px 20px;
    font-size: 0.875rem;
    color: #cccccc;
    font-weight: 400;
  }

  /* ── Modal Overlay ── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 20px;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .modal-card {
    background: #181818;
    border-radius: 10px;
    padding: 36px 32px 32px;
    width: 100%;
    max-width: 460px;
    position: relative;
    animation: slideUp 0.25s ease;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 28px;
  }

  .modal-close {
    position: absolute;
    top: 18px;
    right: 20px;
    background: transparent;
    border: none;
    color: #aaa;
    font-size: 1.2rem;
    cursor: pointer;
    line-height: 1;
    padding: 4px 6px;
    border-radius: 4px;
    transition: color 0.15s, background 0.15s;
  }
  .modal-close:hover { color: #fff; background: #2a2a2a; }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 500;
    color: #ccc;
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    background: #111;
    border: 1px solid #2c2c2c;
    border-radius: 6px;
    padding: 13px 16px;
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .form-input:focus { border-color: #c9940a; }
  .form-input::placeholder { color: #444; }

  .form-error {
    font-size: 0.72rem;
    color: #c9940a;
    margin-top: 5px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .btn-submit {
    width: 100%;
    background: #c9940a;
    color: #0d0d0d;
    border: none;
    padding: 14px;
    font-family: 'Sora', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 8px;
    letter-spacing: 0.5px;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-submit:hover { background: #e0a80c; transform: translateY(-1px); }
  .btn-submit:active { transform: translateY(0); }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .users-root {
      padding: 28px 18px;
    }

    .filter-bar {
      flex-direction: column;
      align-items: flex-start;
    }

    .date-filter {
      width: 100%;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    thead th, tbody td {
      padding: 14px 14px;
      font-size: 0.78rem;
    }

    .modal-card {
      padding: 28px 20px 24px;
    }
  }
`;

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
      <style>{styles}</style>
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

import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import './Login.css'

interface LoginForm {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
}



const LogoIcon = (): JSX.Element => (
  <img
    src={logoImg}
    alt="Signature Sound Studios logo"
    style={{ width: "90px", height: "90px", objectFit: "contain" }}
  />
);

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const [form, setForm]       = useState<LoginForm>({ email: "", password: "" });
  const [errors, setErrors]   = useState<LoginErrors>({});
  const [showPw, setShowPw]   = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = (): boolean => {
    const e: LoginErrors = {};
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.password) {
      e.password = "Password is required";
    } else if (form.password.length < 6) {
      e.password = "Minimum 6 characters";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Replace setTimeout with your actual auth call e.g. await login(form)
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">

          {/* Logo */}
          <div className="login-logo">
            <LogoIcon />
            <div className="logo-text-block">
              <span className="logo-brand">Signature</span>
              <span className="logo-brand">Sound</span>
              <span className="logo-brand">Studios</span>
            </div>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="field-group">
              <label className="field-label" htmlFor="email">Email</label>
              <div className="field-input-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`field-input${errors.email ? " error" : ""}`}
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="field-group">
              <label className="field-label" htmlFor="password">Password</label>
              <div className="field-input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  className={`field-input pw-field${errors.password ? " error" : ""}`}
                  placeholder="••••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPw(p => !p)}
                  tabIndex={-1}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            {/* Submit */}
            <div className="login-btn-row">
              <button type="submit" className="btn-login" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Verifying..." : "Login"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}                                                                                                                                                                                                                                                                             
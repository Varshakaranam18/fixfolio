import React, { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="login-root-flex">
      <div className="login-container">
        <div className="login-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="#E0E7FF"/>
            <path d="M28 36C28 36 36 36 36 28C36 22.4772 32.4183 19 28 19C23.5817 19 20 22.4772 20 28C20 36 28 36 28 36Z" stroke="#6366F1" strokeWidth="2"/>
            <circle cx="28" cy="25" r="2" fill="#6366F1"/>
          </svg>
        </div>
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Sign up to get started</p>
        <form className="login-form">
          <label className="login-label" htmlFor="name">Name</label>
          <input className="login-input" id="name" type="text" placeholder="Enter your name" />

          <label className="login-label" htmlFor="email">Email</label>
          <input className="login-input" id="email" type="email" placeholder="Enter your email" />

          <label className="login-label" htmlFor="password">Password</label>
          <div className="login-password-input-wrapper">
            <input
              className="login-input"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="login-password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {/* Eye icon SVG */}
              {showPassword ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#6b7280" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="#6b7280" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.86-.67 1.67-1.17 2.4"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#6b7280" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.568A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="#6b7280" strokeWidth="2" d="M3 3l18 18"/></svg>
              )}
            </button>
          </div>

          <label className="login-label" htmlFor="confirmPassword">Confirm Password</label>
          <div className="login-password-input-wrapper">
            <input
              className="login-input"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="login-password-toggle"
              onClick={() => setShowConfirmPassword((v) => !v)}
              tabIndex={-1}
            >
              {/* Eye icon SVG */}
              {showConfirmPassword ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#6b7280" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="#6b7280" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.86-.67 1.67-1.17 2.4"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#6b7280" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.568A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="#6b7280" strokeWidth="2" d="M3 3l18 18"/></svg>
              )}
            </button>
          </div>

          <button className="login-submit" type="submit">Sign Up</button>
        </form>
        <div className="login-bottom-text">
          Already have an account? <a href="#" className="login-signup">Sign in</a>
        </div>
      </div>
      <style>{`
        body {
          min-height: 100vh;
          width: 100vw;
          background: #818cf8;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-root-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100vw;
        }
        .login-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 32px 0 rgba(0,0,0,0.08);
          padding: 40px 32px 32px 32px;
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          margin-left: -30vw;
        }
        .login-icon {
          margin-bottom: 16px;
        }
        .login-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #111827;
          text-align: center;
        }
        .login-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 20px;
          text-align: center;
        }
        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .login-label {
          font-weight: 600;
          color: #111827;
          margin-bottom: 6px;
          font-size: 1rem;
          text-align: left;
        }
        .login-input {
          width: 100%;
          padding: 10px 12px;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 18px;
          outline: none;
          transition: border 0.2s;
          background: #fff;
        }
        .login-input:focus {
          border-color: #6366f1;
        }
        .login-password-input-wrapper {
          position: relative;
          margin-bottom: 18px;
        }
        .login-password-toggle {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .login-submit {
          width: 100%;
          background: #6366f1;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          padding: 12px 0;
          margin-bottom: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .login-submit:hover {
          background: #4f46e5;
        }
        .login-bottom-text {
          color: #6b7280;
          font-size: 1rem;
          margin-top: 8px;
          text-align: center;
        }
        .login-signup {
          color: #6366f1;
          text-decoration: none;
          font-weight: 500;
        }
        .login-signup:hover {
          text-decoration: underline;
        }
        @media (max-width: 500px) {
          .login-container {
            padding: 24px 8px 16px 8px;
            max-width: 98vw;
          }
          .login-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage; 
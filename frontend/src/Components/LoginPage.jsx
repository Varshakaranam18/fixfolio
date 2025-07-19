import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, user } = useAuth();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(
      formData.email.trim().toLowerCase(),
      formData.password
    );

    if (!result.success) {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="#E0E7FF"/>
            <path d="M28 36C28 36 36 36 36 28C36 22.4772 32.4183 19 28 19C23.5817 19 20 22.4772 20 28C20 36 28 36 28 36Z" stroke="#6366F1" strokeWidth="2"/>
            <circle cx="28" cy="25" r="2" fill="#6366F1"/>
          </svg>
        </div>
        
        <h2 className="login-title">
          {user && user.username ? `Welcome Back, ${user.username}` : 'Welcome Back'}
        </h2>
        <p className="login-subtitle">Please sign in to your account</p>
        
        {error && (
          <div className="login-error">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="#dc2626" strokeWidth="2" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <circle cx="12" cy="16" r="1" fill="#dc2626"/>
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              className="form-input" 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="password-header">
              <label className="form-label" htmlFor="password">Password</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <div className="password-input-wrapper">
              <input
                className="form-input"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="#6b7280" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke="#6b7280" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.86-.67 1.67-1.17 2.4"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="#6b7280" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.568A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke="#6b7280" strokeWidth="2" d="M3 3l18 18"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="remember-row">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          <button 
            className="submit-button" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="signup-prompt">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up now</Link>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          width: 100vw;
          background: #5b3df6;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        .login-card {
          margin-left: 16vw;
        }

        .login-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 2.5rem 2rem 2rem 2rem;
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0;
        }

        .login-icon {
          margin-bottom: 1rem;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.5rem 0;
          text-align: center;
        }

        .login-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .login-error {
          display: flex;
          align-items: flex-start;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          width: 100%;
          gap: 0.5rem;
        }

        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          background: #fff;
          color: #111827;
          box-sizing: border-box;
        }

        .form-input:focus {
          border-color: #6366f1;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .password-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .forgot-link {
          color: #6366f1;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: 500;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .password-input-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .password-toggle:hover {
          background-color: #f3f4f6;
        }

        .remember-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 0.95rem;
          color: #374151;
          gap: 0.5rem;
        }

        .checkbox {
          display: none;
        }

        .checkmark {
          width: 1rem;
          height: 1rem;
          border: 2px solid #d1d5db;
          border-radius: 3px;
          display: inline-block;
          position: relative;
          transition: all 0.2s;
        }

        .checkbox:checked + .checkmark {
          background-color: #6366f1;
          border-color: #6366f1;
        }

        .checkbox:checked + .checkmark::after {
          content: '';
          position: absolute;
          left: 2px;
          top: 1px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .submit-button {
          width: 100%;
          background: #6366f1;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          padding: 0.875rem 0;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 0.5rem;
        }

        .submit-button:hover:not(:disabled) {
          background: #4f46e5;
        }

        .submit-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .signup-prompt {
          color: #6b7280;
          font-size: 0.95rem;
          margin-top: 1.5rem;
          text-align: center;
        }

        .signup-link {
          color: #6366f1;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-link:hover {
          text-decoration: underline;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .login-page {
            padding: 0.5rem;
            align-items: flex-start;
            padding-top: 2rem;
          }

          .login-card {
            padding: 2rem 1.5rem 1.5rem 1.5rem;
            border-radius: 16px;
            max-width: 100%;
            margin-top: 0;
          }

          .login-icon svg {
            width: 48px;
            height: 48px;
          }

          .login-title {
            font-size: 1.75rem;
          }

          .login-subtitle {
            font-size: 0.95rem;
          }

          .form-input {
            padding: 0.875rem 1rem;
            font-size: 1rem;
          }

          .form-label {
            font-size: 0.9rem;
          }

          .submit-button {
            padding: 1rem 0;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .login-page {
            background: #5b3df6;
            padding: 0.25rem;
            padding-top: 1rem;
            justify-content: center;
          }

          .login-card {
            padding: 1.5rem 1.25rem 1.25rem 1.25rem;
            border-radius: 12px;
            margin-top: 5.5rem;
            margin-left: 0;
          }

          .login-icon svg {
            width: 44px;
            height: 44px;
          }

          .login-title {
            font-size: 1.5rem;
          }

          .login-subtitle {
            font-size: 0.9rem;
          }

          .form-input {
            padding: 0.75rem 0.875rem;
            font-size: 0.95rem;
          }

          .form-label {
            font-size: 0.85rem;
          }

          .submit-button {
            padding: 0.875rem 0;
            font-size: 0.95rem;
          }

          .signup-prompt {
            font-size: 0.9rem;
          }
          .signup-prompt, .signup-link {
            color: #fff !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");

    const result = await signup(formData.name, formData.email.trim().toLowerCase(), formData.password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="#E0E7FF"/>
            <path d="M28 36C28 36 36 36 36 28C36 22.4772 32.4183 19 28 19C23.5817 19 20 22.4772 20 28C20 36 28 36 28 36Z" stroke="#6366F1" strokeWidth="2"/>
            <circle cx="28" cy="25" r="2" fill="#6366F1"/>
          </svg>
        </div>
        
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Sign up to get started</p>
        
        {error && (
          <div className="signup-error">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="#dc2626" strokeWidth="2" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <circle cx="12" cy="16" r="1" fill="#dc2626"/>
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input 
              className="form-input" 
              id="name" 
              type="text" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

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
            <label className="form-label" htmlFor="password">Password</label>
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

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                className="form-input"
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword((v) => !v)}
                tabIndex={-1}
              >
                {showConfirmPassword ? (
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

          <button 
            className="submit-button" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="login-prompt">
          Already have an account? <Link to="/login" className="login-link">Sign in</Link>
        </div>
      </div>

      <style jsx>{`
        .signup-page {
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
        .signup-card {
          background: #fff !important;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 2.5rem 2rem 2rem 2rem;
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0;
          margin-left: 16vw;
        }

        .signup-icon {
          margin-bottom: 1rem;
        }

        .signup-title {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.5rem 0;
          text-align: center;
        }

        .signup-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .signup-error {
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

        .signup-form {
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

        .login-prompt {
          color: #6b7280;
          font-size: 0.95rem;
          margin-top: 1.5rem;
          text-align: center;
        }

        .login-link {
          color: #6366f1;
          text-decoration: none;
          font-weight: 500;
        }

        .login-link:hover {
          text-decoration: underline;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .signup-page {
            padding: 0.5rem;
            align-items: flex-start;
            padding-top: 2rem;
          }

          .signup-card {
            padding: 2rem 1.5rem 1.5rem 1.5rem;
            border-radius: 16px;
            max-width: 100%;
            margin-top: 0;
          }

          .signup-icon svg {
            width: 48px;
            height: 48px;
          }

          .signup-title {
            font-size: 1.75rem;
          }

          .signup-subtitle {
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
          .signup-page {
            background: #5b3df6;
            padding: 0.25rem;
            padding-top: 1rem;
            justify-content: center;
          }

          .signup-card {
            padding: 1.5rem 1.25rem 1.25rem 1.25rem;
            border-radius: 12px;
            margin-top: 5.5rem;
            margin-left: 0;
            background: #fff !important;
          }

          .signup-icon svg {
            width: 44px;
            height: 44px;
          }

          .signup-title {
            font-size: 1.5rem;
          }

          .signup-subtitle {
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

          .login-prompt {
            font-size: 0.9rem;
          }
          .login-prompt, .login-link {
            color: #fff !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage; 
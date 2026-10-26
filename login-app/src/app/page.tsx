"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      isCreatingAccount
        ? "Sign up is not connected yet."
        : "Sign in is not connected yet.",
    );
  }

  function changeMode(nextMode: boolean) {
    setIsCreatingAccount(nextMode);
    setMessage("");
  }

  return (
    <main className="auth-page">
      <div className={`auth-shell${isCreatingAccount ? " is-signup" : ""}`}>
        <section className="form-panel" aria-labelledby="form-title">
          <div className="form-content">
            <div className="form-heading">
              <h1 id="form-title">{isCreatingAccount ? "Create Account" : "Sign In"}</h1>
            </div>
            <div className="social-login" aria-label="Continue with a social account">
              <button type="button" className="social-button social-letter" aria-label="Continue with Google" onClick={() => setMessage("Google sign-in is not connected yet.")}>G+</button>
              <button type="button" className="social-button social-letter" aria-label="Continue with Facebook" onClick={() => setMessage("Facebook sign-in is not connected yet.")}>f</button>
              <button type="button" className="social-button social-letter social-wordmark" aria-label="Continue with GitHub" onClick={() => setMessage("GitHub sign-in is not connected yet.")}>GH</button>
              <button type="button" className="social-button social-letter social-wordmark" aria-label="Continue with LinkedIn" onClick={() => setMessage("LinkedIn sign-in is not connected yet.")}>in</button>
            </div>
            <div className="form-divider">
              <span>{isCreatingAccount ? "or use your email for registration" : "or use your email password"}</span>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
              {isCreatingAccount && (
                <>
                  <label className="visually-hidden" htmlFor="full-name">Name</label>
                  <input className="text-field" id="full-name" name="name" type="text" autoComplete="name" placeholder="Name" required />
                </>
              )}
              <label className="visually-hidden" htmlFor="email-address">Email</label>
              <input className="text-field" id="email-address" name="email" type="email" autoComplete="email" placeholder="Email" required />
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input className="text-field" id="password" name="password" type="password" autoComplete={isCreatingAccount ? "new-password" : "current-password"} placeholder="Password" required />
              {!isCreatingAccount && (
                <button type="button" className="forgot-link" onClick={() => setMessage("Password reset isn't set up yet.")}>
                  Forget Your Password?
                </button>
              )}
              <button className="submit-button" type="submit">
                {isCreatingAccount ? "Sign Up" : "Sign In"}
              </button>
              <p className="form-message" role="status" aria-live="polite">{message}</p>
            </form>
          </div>
        </section>
        <aside className="welcome-panel" aria-live="polite">
          <div className="welcome-content">
            <h2>{isCreatingAccount ? "Welcome Back!" : "Hello, Friend!"}</h2>
            <p>
              {isCreatingAccount
                ? "To keep connected with us please login with your personal info"
                : "Register with your personal details to use all of site features"}
            </p>
            <button className="welcome-button" type="button" onClick={() => changeMode(!isCreatingAccount)}>
              {isCreatingAccount ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}

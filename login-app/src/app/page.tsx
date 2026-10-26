"use client";

import { useState, type FormEvent } from "react";
import { useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    function updateTimestamp() {
      const now = new Date();
      const date = new Intl.DateTimeFormat("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(now);
      const time = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
          hourCycle: "h23",
      }).format(now);

      setTimestamp(`${date} ${time}`);
    }

    updateTimestamp();
    const timer = window.setInterval(updateTimestamp, 1000);
    return () => window.clearInterval(timer);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Login belum terhubung ke layanan autentikasi.");
  }

  return (
    <main className="auth-page">
      <div className={`auth-shell${isGuideOpen ? " is-guide" : ""}`}>
        <section className="form-panel" aria-labelledby={isGuideOpen ? "guide-title" : "form-title"}>
          <div className={`form-content ${isGuideOpen ? "guide-view" : "login-view"}`} key={isGuideOpen ? "guide" : "login"}>
            {isGuideOpen ? (
              <div className="guide-content">
                <h1 id="guide-title">PANDUAN</h1>
                <ol>
                  <li>Masukkan username dan password Anda.</li>
                  <li>Setujui Syarat &amp; Ketentuan dan Kebijakan Privasi.</li>
                  <li>Tekan tombol LOGIN untuk masuk.</li>
                </ol>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <h1 id="form-title">L O G I N</h1>
                  <p className="timestamp">{timestamp}</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                  <label className="visually-hidden" htmlFor="username">Username</label>
                  <input className="text-field" id="username" name="username" type="text" autoComplete="username" placeholder="Username" required />
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <div className="password-field">
                    <input className="text-field" id="password" name="password" type={isPasswordVisible ? "text" : "password"} autoComplete="current-password" placeholder="Password" required />
                    <button
                      className="password-toggle"
                      type="button"
                      aria-label={isPasswordVisible ? "Sembunyikan password" : "Tampilkan password"}
                      aria-controls="password"
                      onClick={() => setIsPasswordVisible((visible) => !visible)}
                    >
                      {isPasswordVisible ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                    </button>
                  </div>
                  <label className="consent-row">
                    <input name="terms" type="checkbox" required defaultChecked />
                    <span>Saya menyetujui Syarat &amp; Ketentuan dan Kebijakan Privasi.</span>
                  </label>
                  <button className="submit-button" type="submit">LOGIN</button>
                  <p className="form-message" role="status" aria-live="polite">{message}</p>
                </form>
              </>
            )}
          </div>
        </section>
        <aside className="welcome-panel" aria-label="Informasi anggaran sekolah">
          <div className="school-brand">
            <span className="school-code">ARB</span>
            <h2>ANALISIS RENCANA BELANJA</h2>
            <p>RENCANA KEGIATAN DAN ANGGARAN SEKOLAH</p>
            <p>TAHUN ANGGARAN 2026</p>
            <button
              className="welcome-button guide-button"
              type="button"
              aria-expanded={isGuideOpen}
              onClick={() => setIsGuideOpen((open) => !open)}
            >
              {isGuideOpen ? "KEMBALI" : "PANDUAN"}
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}

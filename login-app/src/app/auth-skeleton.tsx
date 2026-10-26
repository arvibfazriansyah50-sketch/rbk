export default function AuthSkeleton() {
  return (
    <main className="auth-page" aria-busy="true">
      <div className="auth-shell loading-shell" role="status" aria-label="Memuat halaman masuk">
        <section className="form-panel loading-form-panel" aria-hidden="true">
          <div className="loading-form-content">
            <div className="loading-heading">
              <span className="skeleton-block loading-title" />
              <span className="skeleton-block loading-timestamp" />
            </div>
            <div className="loading-form">
              <span className="skeleton-block loading-field" />
              <span className="skeleton-block loading-field" />
              <div className="loading-consent">
                <span className="skeleton-block loading-checkbox" />
                <span className="skeleton-block loading-consent-text" />
              </div>
              <span className="skeleton-block loading-submit" />
              <span className="skeleton-block loading-message" />
            </div>
          </div>
        </section>
        <aside className="welcome-panel loading-welcome-panel" aria-hidden="true">
          <div className="loading-brand">
            <span className="skeleton-block loading-code" />
            <span className="skeleton-block loading-brand-title" />
            <span className="skeleton-block loading-brand-line" />
            <span className="skeleton-block loading-brand-year" />
            <span className="skeleton-block loading-guide-button" />
          </div>
        </aside>
      </div>
    </main>
  );
}
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">🎯 Limited Time Offer</div>
          <h2>Ready to <span className="highlight">Transform</span> Your Business?</h2>
          <p>
            Join thousands of businesses already using Dockzen to streamline their operations, boost productivity, and accelerate growth. Start your journey today!
          </p>
          
          <div className="cta-buttons">
            <a href="#" className="btn-secondary">Start Your Free Trial Today</a>
            <a href="#" className="btn-ghost">Schedule a Demo</a>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon"></div>
              <span>14-day free trial</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon"></div>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon"></div>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

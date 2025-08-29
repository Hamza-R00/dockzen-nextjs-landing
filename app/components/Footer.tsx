export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Stay Updated with Dockzen</h3>
          <p>Get the latest updates, tips, and insights delivered straight to your inbox</p>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Enter your email address" />
            <button type="submit" className="newsletter-btn">Subscribe Now</button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Dockzen</div>
            <p className="footer-description">
              Empowering businesses worldwide with comprehensive management solutions that streamline operations, boost productivity, and drive growth.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Enterprise</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Webinars</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR Compliance</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-credit">
            Made with love in Pakistan © 2025 Dockzen. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

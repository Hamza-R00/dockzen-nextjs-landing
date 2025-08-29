export default function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">DockZen</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#process">Process</a></li>
        </ul>
        <div className="header-cta">
          <a href="#" className="btn-primary">Register Your Interest</a>
        </div>
      </nav>
    </header>
  )
}

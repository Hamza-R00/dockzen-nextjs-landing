import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Streamline Sales, Deliveries & Stock — All in One Place</h1>
          <p className="hero-subtitle">
            Dockzen helps your business manage inventory, track deliveries, and close more sales — anytime, anywhere.
          </p>
          
          <div className="hero-single-cta">
            <a href="#" className="hero-btn-primary">Join to Wait - List</a>
          </div>
        </div>
        <div className="hero-image">
          <Image 
            src="/image/Main Dashboard.png" 
            alt="Dockzen Main Dashboard" 
            width={1200}
            height={500}
            className="hero-placeholder"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '28px 28px 0px 0px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>
    </section>
  )
}

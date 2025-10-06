import React, {useState} from 'react';

export default function App(){
  const [navOpen] = useState(false);
  const courses = [
    { name: 'Air Ticketing Staff', duration: '2 Months', fees: '₹15,000' },
    { name: 'Cabin Crew', duration: '6 Months', fees: '₹45,000' },
    { name: 'Air Hostess', duration: '6 Months', fees: '₹50,000' },
    { name: 'Diploma in Airport Management', duration: '1 Year', fees: '₹70,000' },
    { name: 'Pilot Training', duration: '18 Months', fees: '₹12,00,000' },
    { name: 'CSA (Customer Service Assistant)', duration: '4 Months', fees: '₹25,000' }
  ];

  return (
    <div>
      <header>
        <div className="container">
          <h1 style={{margin:0}}>Indian Aviation Academy</h1>
          <p style={{margin:4}}>Your Gateway to the Skies</p>
          <nav className="nav" aria-label="Main navigation">
            <a href="#courses">Courses</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#partners">Partners</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="courses" style={{padding:'24px 0'}}>
          <h2>Our Courses</h2>
          <div className="grid grid-cols-3">
            {courses.map(c=> (
              <div className="card" key={c.name}>
                <h3>{c.name}</h3>
                <p>Duration: <strong>{c.duration}</strong></p>
                <p>Fees: <strong>{c.fees}</strong></p>
                <button className="btn" onClick={()=>alert('Apply feature - contact +91 91492 17021')}>Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" style={{padding:'24px 0', background:'#fff'}}>
          <h2>Gallery</h2>
          <div className="grid grid-cols-3 gallery">
            {[1,2,3,4,5,6].map(i=>(
              <div className="card" key={i}><img src={`https://source.unsplash.com/600x400/?airplane,aviation,${i}`} alt="gallery" /></div>
            ))}
          </div>
        </section>

        <section id="reviews" style={{padding:'24px 0'}}>
          <h2>Student Reviews</h2>
          <div className="grid grid-cols-3">
            {[
            { name: "Riya Sharma", review: "Amazing experience! The trainers were very professional and supportive." },
            { name: "Arjun Mehta", review: "Got placed as a CSA after completing my course. Great infrastructure!" },
            { name: "Priya Verma", review: "The best aviation academy in Jaipur. Highly recommended!" }
          ].map(r=> (
              <div className="card" key={r.name}>
                <p style={{fontStyle:'italic'}}>“{r.review}”</p>
                <p style={{fontWeight:600}}>- {r.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" style={{padding:'24px 0', background:'#fff'}}>
          <h2>Our Placement Partners</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'center'}}>
            {['IndiGo','Air India','Vistara','SpiceJet','GoAir'].map(p=> (
              <div key={p} style={{width:140,textAlign:'center'}} className="card">
                <img src={`https://source.unsplash.com/300x120/?${p},airline`} alt={p} style={{width:'100%',height:60,objectFit:'contain'}}/>
                <div style={{fontWeight:600,marginTop:8}}>{p}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" style={{padding:'24px 0'}}>
          <h2>Our Achievements</h2>
          <ul style={{maxWidth:800,margin:'0 auto',textAlign:'left'}}>
            <li>Trained over 2,000+ students across India.</li>
            <li>90% successful job placement rate in top airlines.</li>
            <li>Awarded “Best Aviation Training Institute – Rajasthan 2024”.</li>
          </ul>
        </section>

        <section id="contact" style={{padding:'24px 0', background:'#fff'}}>
          <h2>Contact Us</h2>
          <p>📞 +91 91492 17021</p>
          <p>📧 info@indianaviationacademy.com</p>
          <p>🏢 Mansarovar, Jaipur, Rajasthan</p>
          <div style={{marginTop:12}} className="card">
            <iframe title="Jaipur Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.662971769905!2d75.76357747436458!3d26.86673216112864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b9a1a1cfb5%3A0x7b0e0b573eb28e89!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1695900000000!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} loading="lazy"></iframe>
          </div>
        </section>
      </main>

      <footer style={{background:'#0f172a',color:'white',padding:20,textAlign:'center'}}>
        © 2025 Indian Aviation Academy | All Rights Reserved
      </footer>
    </div>
  );
}

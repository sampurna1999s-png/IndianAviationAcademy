import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IndianAviationAcademy() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Indian Aviation Academy</h1>
            <p className="text-sm">Your Gateway to the Skies</p>
          </div>
          <button
            onClick={toggleNav}
            className="md:hidden px-3 py-2 border rounded border-white"
          >
            Menu
          </button>
          <nav
            className={`md:flex md:items-center gap-6 ${
              navOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-blue-900 text-white p-4 md:static md:flex-row"
                : "hidden"
            }`}
          >
            <a href="#courses" className="hover:text-gray-300 py-1">Courses</a>
            <a href="#gallery" className="hover:text-gray-300 py-1">Gallery</a>
            <a href="#reviews" className="hover:text-gray-300 py-1">Reviews</a>
            <a href="#partners" className="hover:text-gray-300 py-1">Partners</a>
            <a href="#achievements" className="hover:text-gray-300 py-1">Achievements</a>
            <a href="#contact" className="hover:text-gray-300 py-1">Contact</a>
          </nav>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Courses</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Air Ticketing Staff", duration: "2 Months", fees: "₹15,000" },
            { name: "Cabin Crew", duration: "6 Months", fees: "₹45,000" },
            { name: "Air Hostess", duration: "6 Months", fees: "₹50,000" },
            { name: "Diploma in Airport Management", duration: "1 Year", fees: "₹70,000" },
            { name: "Pilot Training", duration: "18 Months", fees: "₹12,00,000" },
            { name: "CSA (Customer Service Assistant)", duration: "4 Months", fees: "₹25,000" }
          ].map((course) => (
            <Card key={course.name} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p>Duration: {course.duration}</p>
                <p>Fees: {course.fees}</p>
                <Button className="mt-4">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
          {[1,2,3,4,5,6].map((img) => (
            <div key={img} className="rounded-xl overflow-hidden shadow-md">
              <img src={`https://source.unsplash.com/400x300/?airplane,aviation,${img}`} alt="Academy Gallery" className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Student Reviews */}
      <section id="reviews" className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Riya Sharma", review: "Amazing experience! The trainers were very professional and supportive." },
            { name: "Arjun Mehta", review: "Got placed as a CSA after completing my course. Great infrastructure!" },
            { name: "Priya Verma", review: "The best aviation academy in Jaipur. Highly recommended!" }
          ].map((r) => (
            <Card key={r.name} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <p className="italic mb-3">“{r.review}”</p>
                <p className="font-semibold">- {r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Placement Partners */}
      <section id="partners" className="py-12 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">Our Placement Partners</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {["IndiGo", "Air India", "Vistara", "SpiceJet", "GoAir"].map((partner) => (
            <div key={partner} className="bg-gray-50 p-4 rounded-xl shadow-md w-32">
              <img src={`https://source.unsplash.com/200x100/?${partner},airlines`} alt={partner} className="object-contain w-full h-20" />
              <p className="mt-2 font-semibold text-sm">{partner}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Achievements</h2>
        <ul className="max-w-3xl mx-auto text-left list-disc list-inside">
          <li>Trained over 2,000+ students across India.</li>
          <li>90% successful job placement rate in top airlines.</li>
          <li>Awarded “Best Aviation Training Institute – Rajasthan 2024”.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-2">📞 +91 91492 17021</p>
        <p className="mb-2">📧 info@indianaviationacademy.com</p>
        <p className="mb-6">🏢 Mansarovar, Jaipur, Rajasthan</p>
        <iframe
          title="Jaipur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.662971769905!2d75.76357747436458!3d26.86673216112864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b9a1a1cfb5%3A0x7b0e0b573eb28e89!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1695900000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© 2025 Indian Aviation Academy | All Rights Reserved</p>
      </footer>
    </div>
  );
}

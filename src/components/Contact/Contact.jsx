import { useState } from "react";
import { company } from "../../data/siteData";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", comments: "" });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with a call to your backend / email service (e.g. EmailJS, Formspree).
    // Until then, this opens the visitor's mail app with the enquiry filled in.
    const body = `Name: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\n\n${form.comments}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <div className="contact__grid">
          <address className="contact__details">
            <h3>{company.legalName}</h3>
            <p>{company.address.map((l) => <span key={l}>{l}<br /></span>)}</p>
            <p>Email: <a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p>Office: <a href={`tel:${company.office.replace(/\s/g, "")}`}>{company.office}</a></p>
            <p>Mobile: <a href={`tel:${company.mobile.replace(/\s/g, "")}`}>{company.mobile}</a></p>
            <iframe title="Extreme Holidays location in Cochin" src={company.mapSrc} loading="lazy" />
          </address>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Send an enquiry</h3>
            <label>Name<input name="name" value={form.name} onChange={update} required autoComplete="name" /></label>
            <label>Mobile number<input name="mobile" type="tel" value={form.mobile} onChange={update} required autoComplete="tel" /></label>
            <label>Email<input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" /></label>
            <label>Comments<textarea name="comments" rows="5" value={form.comments} onChange={update} /></label>
            <button className="btn btn-primary" type="submit">Send enquiry</button>
            {sent && <p className="contact__sent" role="status">Your mail app should open with the enquiry ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

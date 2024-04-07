import React, { useState, useEffect } from "react";
import "../../styles/conta.css";
import Contact from "../../componentes/contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا إضافة رمز لإرسال البيانات إلى الخادم أو معالجتها بطريقة أخرى
    console.log(formData);
  };

  return (
    <>
      <div className="main__section" data-aos="fade-down">
        <h1 data-aos="fade-down">
          Contact <span>US</span>
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        data-aos="fade-down"
      >
        <div className="first">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <Contact />
    </>
  );
};

export default ContactUs;

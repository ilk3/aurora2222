import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Map } from '../components/Map';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'ilicfilip28@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      await emailjs.send(
        'service_ss4lgod', // Replace with your EmailJS service ID
        'template_w0bgxzg', // Replace with your EmailJS template ID
        templateParams,
        'WOfUYlMpNQ-hWaJjl' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="rotating-background background-loaded"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                Contact Us
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any inquiries about our services, partnerships, or general information.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Office */}
            <RevealOnScroll animation="fade-up" delay={0}>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Company Address</h3>
                  <div className="space-y-2">
                    <p>Koce Kapetana 16 Street</p>
                    <p>11000 Belgrade</p>
                    <p>Republic of Serbia</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact */}
            <RevealOnScroll animation="fade-up" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <Phone className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <p>Tel: +381 11 3440 313</p>
                    <p>Fax: +381 11 3442 679</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Email */}
            <RevealOnScroll animation="fade-up" delay={400}>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Email</h3>
                  <div className="space-y-2">
                    <p>Email: office@aurora2222.com</p>
                    <p>medicalinformation@aurora2222.com</p>
                    <p>pharmacovigilance@aurora2222.com</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <RevealOnScroll animation="fade-up">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    Send us a Message
                  </span>
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl group ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-light'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              </div>
            </RevealOnScroll>

            {/* Map */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 h-full">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    Our Location
                  </span>
                </h2>
                <Map
                  center={[44.81878, 20.45684]}
                  popupText="Aurora2222 Office - Koce Kapetana 16"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Warehouse Location */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  Warehouse Location
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Aurora2222 d.o.o.</h3>
                    <p>Ulica Viline Vode b.b,</p>
                    <p>11000 Belgrade</p>
                    <p>Republic of Serbia</p>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Map
                    center={[44.80988, 20.48765]}
                    popupText="Aurora2222 Warehouse - Viline Vode"
                    height="300px"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer w-full text-white py-16 relative">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <img
                src="https://aurora2222.ilicfilip.com/assets/img/logo-aurora.png"
                alt="Aurora2222"
                className="h-30 w-auto mb-6"
              />
            </div>

            {/* Company Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Company Address</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-2">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Warehouse Location</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Medical Enquiries</h3>
              <div className="space-y-2">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-4">Adverse reaction reporting:</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </>
  );
}

export default Contact;
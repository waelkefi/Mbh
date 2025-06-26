import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, MessageSquare, Facebook
} from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    // Simple validation
    if (!form.firstname || !form.lastname || !form.email || !form.subject || !form.message) {
      setStatus({ type: 'error', message: 'Veuillez remplir tous les champs requis.' });
      return;
    }

    try {
      const res = await fetch('http://localhost:5008/api/contact/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        setForm({ firstname: '', lastname: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Erreur lors de l\'envoi.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-dream md:text-4xl font-bold mb-4 animate-on-scroll">
            Contactez-nous
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll">
            Contactez-nous pour un devis gratuit et un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p className="text-gray-300">Siège social : B 12 immeuble chiheb Avenue Farhat Hached Megrine - Sidi Rzig</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p className="text-gray-300">+216 21 895 232</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">contact@modernirrigationtechniques.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg overflow-hidden shadow-lg" style={{ height: '22.7rem' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.9706465407105!2d10.244879276174668!3d36.7536191732935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4a1ee1188359%3A0x84bd5c6e4dbf4ce2!2sAvenue%20Farhat%20Hached%2C%20Megrine%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1713621618961!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="animate-on-scroll">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Prénom</label>
                  <input
                    type="text"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                    placeholder="Votre prénom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    value={form.lastname}
                    onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Sujet</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                  required
                >
                  <option value="" className='bg-gray-800'>Sélectionnez un sujet</option>
                  <option value="devis" className='bg-gray-800'>Demande de devis</option>
                  <option value="info" className='bg-gray-800'>Demande d'informations</option>
                  <option value="support" className='bg-gray-800'>Support technique</option>
                  <option value="other" className='bg-gray-800'>Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>

              {status && (
                <div className={`mb-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="w-full btn-accent text-primary">
                Envoyer le message
              </button>
            </form>
          </div>
<div></div>
          {/* Réseaux sociaux */}
          <div className="mt-8">
            <h4 className="font-medium mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577298662819" target="_blank" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/21621895232"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </section>
  );
};

export default ContactSection;

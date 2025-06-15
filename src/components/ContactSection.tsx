
import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
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
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p className="text-gray-300">Siège sociale : B 12 immeuble chiheb Avenue Farhat Hached Megrine - sidi rzig</p>
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
                    <p className="text-gray-300">contact@irrigationmoderne.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden  shadow-lg " style={{ height: '22.7rem' }}>
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

          <div className="animate-on-scroll">
            <form className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium mb-1">Prénom</label>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Votre email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                <select
                  id="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="" className="bg-gray-800">Sélectionnez un sujet</option>
                  <option value="devis" className="bg-gray-800">Demande de devis</option>
                  <option value="info" className="bg-gray-800">Demande d'informations</option>
                  <option value="support" className="bg-gray-800">Support technique</option>
                  <option value="other" className="bg-gray-800">Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-accent text-primary"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          <div>

          </div>
          <div>
            <div className="mt-8">
              <h4 className="font-medium mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61577298662819" target="_blank" className="text-gray-300 hover:text-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                {/* <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a> */}
              </div>
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

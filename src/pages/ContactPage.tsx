import { Phone, Mail, MapPin, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBY46b75Ho6eLyPB36E6bsC-OgHjdXL9ElnY55wYAKCt7fshUADW_mSkHEQeERik8jExEr3LfNjwPIzV0KePo21XUYrbsvZe7lDRmCdlH6qGarxme_sdU2T8y_0ua0PubZFTWcIzVfXrR5Xl0CehfStPDcpsZF53jcSzapB-VDBvOSXPTd82nCRiBuwxE/s1600/rg4r4g4-removebg-preview.png"
              alt="Metro Grand Smash Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="text-base sm:text-xl md:text-2xl font-bold">
              <span className="text-white">Metro Grand</span>
              <span className="text-green-400"> Smash</span>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-green-400 px-4 py-2 rounded-full font-bold hover:text-green-300 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8007461/pexels-photo-8007461.jpeg"
            alt="Badminton Match"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">Get in </span>
              <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Have questions about the tournament? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-green-400 flex items-center gap-3">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  Phone Numbers
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <a href="tel:+919695818169" className="text-base sm:text-lg hover:text-green-400 transition-colors duration-300">
                      +91 9695818169
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <a href="tel:+918355037307" className="text-base sm:text-lg hover:text-green-400 transition-colors duration-300">
                      +91 8355037307
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <a href="tel:+919335289260" className="text-base sm:text-lg hover:text-green-400 transition-colors duration-300">
                      +91 9335289260
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-green-400 flex items-center gap-3">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  Email
                </h3>
                <a href="mailto:metrograndsmash@gmail.com" className="text-base sm:text-lg hover:text-green-400 transition-colors duration-300 break-all">
                  metrograndsmash@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-green-400 flex items-center gap-3">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                  Venue Location
                </h3>
                <div className="space-y-3">
                  <p className="text-base sm:text-lg font-semibold">Amitabh Bachchan Sports Complex</p>
                  <p className="text-gray-300">Near Police Line</p>
                  <p className="text-gray-300">Prayagraj, Uttar Pradesh 211002</p>
                  <a
                    href="https://maps.app.goo.gl/HKXQasYYErUqhhks7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105"
                  >
                    View on Maps
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-green-400 flex items-center gap-3">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/kairox_event?igsh=b3Y3YmIwcjJjMHlk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-400/20 hover:bg-green-400 text-green-400 hover:text-black px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
                >
                  @kairox_event
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-green-400/10 to-transparent p-6 sm:p-8 rounded-2xl border-2 border-green-400/30">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">Tournament Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Dates</p>
                <p className="text-lg sm:text-xl font-semibold">25-27 April 2026</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Organized by</p>
                <p className="text-lg sm:text-xl font-semibold">Kairox Events</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Powered by</p>
                <p className="text-lg sm:text-xl font-semibold">Metro Banta & Co.</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Under the Aegis of</p>
                <p className="text-lg sm:text-xl font-semibold">Olympic Association, Prayagraj</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2026 Metro Grand Smash Open. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;

import { Calendar, MapPin, Trophy, Users, Award, Phone, Mail, Instagram, Facebook, Menu, X, BookOpen, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = () => {
    window.location.href = 'https://rzp.io/rzp/4YkmvZSq';
  };

  const categories = {
    singles: {
      boys: ['U9', 'U11', 'U13', 'U15', 'U17', 'U19', 'Above 19'],
      girls: ['U9', 'U11', 'U13', 'U15', 'U17', 'U19', 'Above 19'],
    },
    doubles: {
      boys: ['U13', 'U15', 'U17', 'U19', 'Above 19'],
      girls: ['U13', 'U15', 'U17', 'U19', 'Above 19'],
    },
    veterans: ['35+', '45+'],
  };

  const prizes = [
    { place: '1st Prize', amount: '₹5000', extras: 'Medal + Certificate', gradient: 'from-yellow-400 to-yellow-600' },
    { place: '2nd Prize', amount: '₹2500', extras: 'Medal + Certificate', gradient: 'from-gray-300 to-gray-500' },
    { place: 'Semifinalists', amount: '₹1000', extras: 'Certificate', gradient: 'from-orange-400 to-orange-600' },
  ];

  const highlights = [
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Professional Synthetic Courts', desc: 'Play on world-class badminton courts' },
    { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Certified Match Officials', desc: 'Tournament managed by certified referees' },
    { icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Competitive Categories', desc: 'Categories for all age groups and skill levels' },
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Medals & Certificates', desc: 'Recognition for all winners and participants' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBY46b75Ho6eLyPB36E6bsC-OgHjdXL9ElnY55wYAKCt7fshUADW_mSkHEQeERik8jExEr3LfNjwPIzV0KePo21XUYrbsvZe7lDRmCdlH6qGarxme_sdU2T8y_0ua0PubZFTWcIzVfXrR5Xl0CehfStPDcpsZF53jcSzapB-VDBvOSXPTd82nCRiBuwxE/s1600/rg4r4g4-removebg-preview.png"
              alt="Metro Grand Smash Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="text-base sm:text-xl md:text-2xl font-bold">
              <span className="text-white">Metro Grand</span>
              <span className="text-green-400"> Smash</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/rules"
              className="text-green-400 px-4 py-2 rounded-full font-bold hover:text-green-300 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <BookOpen className="w-4 h-4" />
              Rules
            </Link>
            <Link
              to="/contact"
              className="text-green-400 px-4 py-2 rounded-full font-bold hover:text-green-300 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
            <button
              onClick={handleRegister}
              className="bg-green-400 text-black px-6 py-2 rounded-full font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-green-400 p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden bg-black/95 backdrop-blur-sm border-t border-green-400/30">
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-center justify-center gap-2 mb-2 pb-3 border-b border-green-400/20">
                <span className="text-gray-400 text-xs">Powered by
Metro Banta & Co.</span>
                
              </div>
              <Link
                to="/rules"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-green-400 px-6 py-3 rounded-full font-bold hover:bg-green-400/20 transition-all duration-300 border border-green-400/30"
              >
                <BookOpen className="w-4 h-4" />
                Tournament Rules
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-green-400 px-6 py-3 rounded-full font-bold hover:bg-green-400/20 transition-all duration-300 border border-green-400/30"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
              <button
                onClick={() => {
                  handleRegister();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8007461/pexels-photo-8007461.jpeg"
            alt="Badminton Match"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGrTnznFDVnUozdc-cnCUClmAGSLoUFFNQkJVFbeFY9MJlriFsvGuexxSkMtO7mj9YaZQvCApRNfcGeEaoL1h8smE_otfguz9ZnctNcy5M-atMZOkzXees1jaeg2ciklY-igdwQqnHXuHzeJEsdfEGwveL1vu-Wo41zmlPxfJuhmS_5vcfz1fmJ96gLoo/s1600/lionlogo_2c.jpg-removebg-preview.png"
                alt="Lions Club"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnUuAISAcOrC-MXgnQ823r9VyyKorzUPTtRaiCslloZ1Znx4C9HS1pQwIh9_VGYBB-SqzyPosqBbljI0OHFMgiONJd8JywrGWpAj8ZrBw2d14jfLtpt45kxyI2feRmssNarBrQHEntpUGI2ZChaKaAnBywMAHRZzNygA18c6QrYWw3YZA_pUosBOdgNdM/s1600/rg4r4g4-removehbg-preview.png"
                alt="Olympic Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBY46b75Ho6eLyPB36E6bsC-OgHjdXL9ElnY55wYAKCt7fshUADW_mSkHEQeERik8jExEr3LfNjwPIzV0KePo21XUYrbsvZe7lDRmCdlH6qGarxme_sdU2T8y_0ua0PubZFTWcIzVfXrR5Xl0CehfStPDcpsZF53jcSzapB-VDBvOSXPTd82nCRiBuwxE/s1600/rg4r4g4-removebg-preview.png"
              alt="Metro Grand Smash"
              className="h-40 sm:h-52 md:h-64 lg:h-72 w-auto object-contain drop-shadow-lg mb-4 sm:mb-6"
            />
          </div>

          <div className="text-green-400 text-xs sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 tracking-wider uppercase animate-pulse">
            Premier Badminton Tournament
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="text-white">METRO GRAND</span>
            <br />
            <span className="text-green-400">SMASH OPEN</span>
            <br />
            <span className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl">2026</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-wide px-2">
            Under the Aegis of the Olympic Association, Prayagraj (U.P.)
          </p>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-wide px-2">
            Smash Hard. Play Smart. Become a Champion.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-10 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto justify-center">
              <Calendar className="text-green-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-semibold">25-27 April 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto justify-center">
              <MapPin className="text-green-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a href="https://maps.app.goo.gl/HKXQasYYErUqhhks7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start hover:text-green-400 transition-colors duration-300">
                <span className="font-semibold text-center">Amitabh Bachchan Sports Complex</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={handleRegister}
              className="bg-green-400 text-black px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-xl md:text-2xl font-black hover:bg-green-300 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-400/50"
            >
              REGISTER NOW
            </button>
            <Link
              to="/rules"
              className="flex items-center gap-2 border-2 border-green-400 text-green-400 px-6 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-lg md:text-xl font-bold hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              VIEW RULES
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-20 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-green-300 mb-3">
                  Hosted by <span className="text-green-400">Kairox Events</span>
                </p>
                <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300">
                  Powered by <span className="text-green-400">Metro Banta & Co.</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVQ17sFkN-qiUwhf1b3e6Nt1jA4caKnEEb38Htr4aCfib_2s-Qzwpqbepovz224-5h_75ZGeJhlEpMpLbj7SrOwJIajdFOXNdIb2qrV6GTwneFKzJFJZbwJOhzUxfS0h3sGXSr-9i6yqAL_XZv_GJC1R1G9x8EMJjELPkbdqgWnHZ1XpRx9WcL0ld9Kvk/s1600/fg.png"
                  alt="Metro Banta & Co."
                  className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain drop-shadow-2xl"
                />
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy6_EGg3t5OT0NyW2QZnh_42NamNEWCW41vkmyjYqk1jmajRwuhHic0db6zIp72OOQ5mQJ30S5CaH2idL5I4SqSWxDbMPKaCNBioQ0akv8yH1ZGZKs1rFCw_aoN-XO1_TsQhOLNc4WyZWaMoLUkVLJUdkhf6LXpeUgK4GT_wIAEL2WLgRG7Isd7QXxIp4/s1600/ChatGPT_Image_Mar_12__2026__09_14_28_PM-removebg-preview.png"
                  alt="Kairox Events"
                  className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-green-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12">
              <span className="text-white">REGISTRATION</span>
              <span className="text-green-400"> FEES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-400">Singles</h3>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">₹500</p>
                <p className="text-gray-400 text-sm">Per participant</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-400">Doubles</h3>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">₹1000</p>
                <p className="text-gray-400 text-sm">Per pair</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-400">Veteran Group</h3>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">₹1500</p>
                <p className="text-gray-400 text-sm">Per participant</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4">
              <span className="text-white">TOURNAMENT</span>
              <span className="text-green-400"> CATEGORIES</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 px-4">Compete in your age group and skill level</p>
          </div>

          <div className="grid gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Trophy className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                Singles - Boys
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
                {categories.singles.boys.map((cat) => (
                  <div key={cat} className="bg-black/50 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg text-center font-semibold text-green-400 border border-green-400/20 text-xs sm:text-sm md:text-base">
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Trophy className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                Singles - Girls
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
                {categories.singles.girls.map((cat) => (
                  <div key={cat} className="bg-black/50 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg text-center font-semibold text-green-400 border border-green-400/20 text-xs sm:text-sm md:text-base">
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Trophy className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                Doubles - Boys
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                {categories.doubles.boys.map((cat) => (
                  <div key={cat} className="bg-black/50 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg text-center font-semibold text-green-400 border border-green-400/20 text-xs sm:text-sm md:text-base">
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Trophy className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                Doubles - Girls
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                {categories.doubles.girls.map((cat) => (
                  <div key={cat} className="bg-black/50 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg text-center font-semibold text-green-400 border border-green-400/20 text-xs sm:text-sm md:text-base">
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 max-w-md mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center">
              <Trophy className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
              Veterans
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.veterans.map((cat) => (
                <div key={cat} className="bg-black/50 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-center font-semibold text-green-400 border border-green-400/20 text-base sm:text-lg md:text-xl">
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/8007435/pexels-photo-8007435.jpeg"
            alt="Shuttlecock"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4">
              <span className="text-white">PRIZE</span>
              <span className="text-green-400"> POOL</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 px-4">Compete for exciting rewards</p>
            <div className="inline-block bg-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border-4 border-white shadow-2xl">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">TOTAL PRIZE POOL</p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black">
  ₹2,50,000
</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 rounded-xl border-2 border-green-400/30 max-w-md mx-auto">
              <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center">
                <span className="text-green-400 font-semibold">Prize Distribution:</span> Each category winner receives individual prizes based on their group results
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center`}>
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-green-400">{prize.place}</h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 text-white">{prize.amount}</div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">{prize.extras}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/8007504/pexels-photo-8007504.jpeg"
            alt="Badminton Court"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4">
              <span className="text-white">TOURNAMENT</span>
              <span className="text-green-400"> HIGHLIGHTS</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 px-4">What makes this tournament special</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-5 sm:p-6 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-green-400 mb-3 sm:mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/8007367/pexels-photo-8007367.jpeg"
            alt="Badminton Player"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-white">READY TO</span>
            <span className="text-green-400"> COMPETE?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-10 px-4">
            Secure your spot in Metro Grand Smash Open 2026
          </p>
          <button
            onClick={handleRegister}
            className="bg-green-400 text-black px-10 sm:px-16 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-black hover:bg-green-300 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-400/50"
          >
            REGISTER NOW
          </button>
        </div>
      </section>

      <footer className="bg-black py-8 sm:py-12 border-t-2 border-green-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBY46b75Ho6eLyPB36E6bsC-OgHjdXL9ElnY55wYAKCt7fshUADW_mSkHEQeERik8jExEr3LfNjwPIzV0KePo21XUYrbsvZe7lDRmCdlH6qGarxme_sdU2T8y_0ua0PubZFTWcIzVfXrR5Xl0CehfStPDcpsZF53jcSzapB-VDBvOSXPTd82nCRiBuwxE/s1600/rg4r4g4-removebg-preview.png"
              alt="Metro Grand Smash Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-6 sm:mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-400">Contact Organizer</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <a href="tel:+919695818169" className="text-sm sm:text-base hover:text-green-400 transition-colors">+91 9695818169</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <a href="tel:+919335289260" className="text-sm sm:text-base hover:text-green-400 transition-colors">+91 8355037307 </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <a href="tel:+918355037307" className="text-sm sm:text-base hover:text-green-400 transition-colors">+91 9335289260</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">metrograndsmash@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-400">Venue</h3>
              <a href="https://maps.app.goo.gl/HKXQasYYErUqhhks7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 sm:gap-3 text-gray-300 justify-center md:justify-start hover:text-green-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-sm sm:text-base">Amitabh Bachchan Sports Complex </p>
                  <p className="text-sm sm:text-base">Near Police Line, Prayagraj</p>
                  <p className="text-xs sm:text-sm mt-1 sm:mt-2">Uttar Pradesh 211002</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-400">Follow Us</h3>
              <div className="flex justify-center">
                <a href="https://www.instagram.com/kairox_event?igsh=b3Y3YmIwcjJjMHlk" className="w-12 h-12 sm:w-14 sm:h-14 bg-green-400/20 hover:bg-green-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 space-y-2">
            <p className="text-sm sm:text-base">&copy; 2026 Metro Grand Smash Open. All rights reserved.</p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

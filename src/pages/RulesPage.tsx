import { ArrowLeft, BookOpen, CheckCircle, AlertCircle, Users, Clock, FileText, Award, Zap, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RulesPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const rules = [
    {
      title: 'Governing Rules',
      icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'The tournament will follow the official rules of the Badminton World Federation (BWF) and Badminton Association of India.',
        'The decision of the Chief Referee and Tournament Committee will be final.',
      ],
    },
    {
      title: 'Match Format',
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Tournament will follow a knockout format.',
        'Matches will be played with the 21-point rally scoring system.',
        'Finals will be best of 3 games.',
      ],
    },
    {
      title: 'Shuttlecock',
      icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Official shuttlecock: Yonex Mavis 350 Nylon Shuttlecock.',
        'Feather shuttlecocks may be used if both players agree.',
      ],
    },
    {
      title: 'Reporting Time',
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Players must report 15 minutes before their match.',
        'Failure to report within 10 minutes after the match call may result in walkover.',
      ],
    },
    {
      title: 'Age Verification',
      icon: <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Players must bring their original Aadhaar Card.',
        'False age information will lead to disqualification.',
      ],
    },
    {
      title: 'Player Participation',
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Players may participate in singles, doubles, or multiple categories depending on eligibility.',
      ],
    },
    {
      title: 'Equipment & Dress Code',
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Players must bring their own rackets and gear.',
        'Only non-marking badminton shoes are allowed on court.',
      ],
    },
    {
      title: 'Code of Conduct',
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Players must maintain sportsmanship and respect officials and opponents.',
        'Abusive language may result in disqualification.',
      ],
    },
    {
      title: 'Match Schedule',
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Match timings must be followed strictly.',
        'The organizing committee may reschedule matches if necessary.',
      ],
    },
    {
      title: 'Prize Distribution',
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'Prize distribution will take place after the final matches.',
        'Winners and runners-up must be present for the ceremony.',
      ],
    },
    {
      title: 'Organizer Rights',
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />,
      content: [
        'The tournament committee reserves the right to modify rules if needed.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/rg4r4g4-removebg-preview.png"
              alt="Metro Grand Smash Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="text-base sm:text-xl md:text-2xl font-bold">
              <span className="text-white">Metro Grand</span>
              <span className="text-green-400"> Smash</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <span className="text-gray-400 text-xs">Powered by Metro Banta & Co.
</span>
             
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 bg-green-400 text-black px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/8007461/pexels-photo-8007461.jpeg"
            alt="Badminton"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6 inline-block">
            <div className="flex items-center gap-3 bg-green-400/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-400/50">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span className="text-green-400 font-semibold text-sm sm:text-base">Official Guidelines</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 leading-tight">
            <span className="text-white">TOURNAMENT</span>
            <br />
            <span className="text-green-400">RULES & REGULATIONS</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 sm:mt-6 max-w-3xl mx-auto px-2">
            Metro Grand Smash Open 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-400/10 to-green-600/10 border-2 border-green-400/30 rounded-2xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              All players participating in the Metro Grand Smash Open 2026 must follow the official badminton tournament rules and regulations. These guidelines ensure fair play, maintain the integrity of the tournament, and provide a professional competitive environment for all participants.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 transform hover:translate-x-1"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="text-green-400 mt-1 flex-shrink-0">
                    {rule.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-400">
                      {index + 1}. {rule.title}
                    </h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {rule.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/8007504/pexels-photo-8007504.jpeg"
            alt="Badminton Court"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-white">QUESTIONS ABOUT</span>
            <br />
            <span className="text-green-400">THE RULES?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 px-4">
            Contact our tournament committee for clarifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-400 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-110 text-center"
            >
              Back to Home
            </Link>
            <a
  href="/contact"
  className="border-2 border-green-400 text-green-400 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-110 text-center"
>
  Contact Us
</a>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 sm:py-12 border-t-2 border-green-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-2">&copy; 2026 Metro Grand Smash Open. All rights reserved.</p>
          <p className="text-gray-500 text-xs sm:text-sm">Tournament Rules & Regulations</p>
        </div>
      </footer>
    </div>
  );
}

export default RulesPage;

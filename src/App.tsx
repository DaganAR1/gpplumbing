import { 
  Phone, 
  MapPin, 
  Star, 
  Wrench, 
  Droplets, 
  Thermometer, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  PhoneCall,
  Bath,
  Flame,
  Home,
  Hammer,
  ShowerHead,
  Search,
  Settings,
  Waves,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const SERVICES = [
  { title: "Water Heater Services", description: "Expert repair and installation of traditional tank and modern tankless water heating systems.", icon: Thermometer, category: "Most Popular" },
  { title: "Drain & Sewer Cleaning", description: "Professional clearing of stubborn clogs and repair of damaged or collapsed drain lines.", icon: Droplets, category: "Essential" },
  { title: "Emergency Leak Repair", description: "Rapid response for burst pipes, slab leaks, and urgent plumbing failures in Denton.", icon: Wrench, category: "24/7 Service" },
  { title: "Toilet & Fixture Repair", description: "Fast fixes for running toilets, leaky faucets, and faulty bathroom or kitchen fixtures.", icon: Bath, category: "Common Repair" },
  { title: "Gas Line Services", description: "Safe detection of gas leaks and professional installation of new gas lines for your home.", icon: Flame, category: "Specialized" },
  { title: "Plumbing Inspections", description: "Comprehensive diagnostic checks to identify potential issues before they become disasters.", icon: Search, category: "Maintenance" }
];

const REVIEWS = [
  {
    name: "Andrew A.",
    location: "Los Angeles, CA",
    date: "Mar 4, 2024",
    text: "We've now had three unbelievable experiences with Dave from GP Plumbing. Dave was over in 20 minutes immediately on both days helping us mitigate the damage which was considerable but could've been much much worse. Dave puts his heart... And sweat... into his projects. He works his butt off - truly.",
    stars: 5,
    url: "https://share.google/nVZ9f9zD2TxzLDEDQ"
  },
  {
    name: "Donal O.",
    location: "Surry, VA",
    date: "May 19, 2022",
    text: "I stupidly tried to fix a leak in my lawn sprinkler valve and sheared the pipe causing a major water leak. I called David and he responded immediately, turning off the water supply and fixing the leak. Thanks David and crew.",
    stars: 5,
    url: "https://share.google/nVZ9f9zD2TxzLDEDQ"
  },
  {
    name: "Keith W.",
    location: "Denton, TX",
    date: "Nov 5, 2019",
    text: "Called David about 8:15am and he was at my house by 9am. Did a fantastic job in completing the problem in a very short time. Issue solved and for a very reasonable fee. Thanks for the immediate response.",
    stars: 5,
    url: "https://share.google/nVZ9f9zD2TxzLDEDQ"
  },
  {
    name: "Panda P.",
    location: "Denton, TX",
    date: "Aug 9, 2018",
    text: "David does amazing work!! He is very professional, friendly, and above all knowledgeable in his field! He arrived the same day that I called. He assessed the issue quickly and was able to fix everything fast and efficiently and for less than $200. I highly recommend him!",
    stars: 5,
    url: "https://share.google/nVZ9f9zD2TxzLDEDQ"
  },
  {
    name: "M V.",
    location: "Denton, TX",
    date: "Apr 22, 2018",
    text: "He came out late on a weekend! Other places wouldn't answer even though they said '24/7'. Charged me a reasonable price and came out fairly quick and did a good job!",
    stars: 5,
    url: "https://share.google/nVZ9f9zD2TxzLDEDQ"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const filteredServices = activeCategory === "All" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Wrench className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>GP Plumbing</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors ${scrolled ? 'text-slate-600' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a 
              href="tel:9403904384"
              className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-4 h-4" />
              (940) 390-4384
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-bold text-slate-900 text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:9403904384"
                className="bg-primary text-white p-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold"
              >
                <PhoneCall />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Plumbing background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Expert Plumbing <br />
              <span className="text-accent">You Can Trust.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              GP Plumbing provides top-tier residential and commercial plumbing solutions. 
              From emergency leaks to full installations, we've got you covered.
            </p>
            <div className="inline-flex items-center gap-3 bg-accent/20 text-accent px-5 py-2 rounded-full text-sm font-bold mb-10 border border-accent/30 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5" />
              Licensed & Insured in Denton, TX
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-primary/20 group"
              >
                View Our Services
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:9403904384"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all"
              >
                <Phone className="w-6 h-6" />
                (940) 390-4384
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-accent mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-accent' : 'fill-accent/30'}`} />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">4.4 Rating</span>
                <span className="text-slate-400 text-sm">46+ Happy Customers</span>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">24/7</span>
                <span className="text-slate-400 text-sm">Emergency Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Top-Rated Plumbing Services</h3>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We focus on the most critical plumbing needs for Denton homeowners, providing expert solutions with upfront pricing.
            </p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col h-full group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="pt-6 border-t border-slate-50 mt-auto flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:flex-[0.8] relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://www.icominc.com/wp-content/uploads/2021/08/TA9Q9bV3Z81nZRooviZz51Y4bpnXIdBt1623180634.jpg" 
                  alt="GP Plumbing expert at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 sm:p-8 rounded-[1.5rem] shadow-2xl z-20 hidden sm:block">
                <div className="text-3xl sm:text-4xl font-bold mb-1">Denton</div>
                <div className="text-xs sm:text-sm font-bold opacity-90 uppercase tracking-[0.2em]">Local Experts</div>
              </div>
              <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="lg:flex-[1.2]">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">About GP Plumbing</h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Dedicated to Keeping Your Pipes Flowing</h3>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                Located in the heart of Denton, TX, GP Plumbing has built a reputation for reliability, 
                transparency, and exceptional craftsmanship. We understand that plumbing issues can be 
                stressful, which is why we prioritize clear communication and efficient service.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Family owned and operated",
                  "Upfront, honest pricing",
                  "Certified and highly trained technicians",
                  "State-of-the-art diagnostic equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-6 h-6" />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn more about our process <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white/80 font-bold uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">What Our Customers Say</h3>
          </div>

          <div className="relative max-w-4xl mx-auto min-h-[450px] sm:min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] w-full shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 sm:w-5 sm:h-5 ${j < REVIEWS[currentReview].stars ? 'fill-accent text-accent' : 'text-white/30'}`} />
                    ))}
                  </div>
                  <span className="text-white/40 text-xs sm:text-sm font-medium">{REVIEWS[currentReview].date}</span>
                </div>
                
                <p className="text-white text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-8 sm:mb-10">
                  "{REVIEWS[currentReview].text}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-white text-lg sm:text-xl shadow-lg">
                      {REVIEWS[currentReview].name[0]}
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">{REVIEWS[currentReview].name}</div>
                      <div className="text-white/60 text-xs sm:text-sm">{REVIEWS[currentReview].location}</div>
                    </div>
                  </div>
                  
                  <a 
                    href={REVIEWS[currentReview].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all border border-white/10"
                  >
                    <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-4 brightness-0 invert" />
                    View on Google
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              {REVIEWS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentReview(i)}
                  className={`w-3 h-3 rounded-full transition-all ${currentReview === i ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-xl">
              <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-6" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-xl">4.4/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                  ))}
                </div>
                <span className="text-slate-500">(46 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20">
              <h2 className="text-accent font-bold uppercase tracking-widest mb-3">Contact Us</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get a Free Quote Today</h3>
              
              <div className="space-y-6 sm:y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <MapPin className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Our Location</div>
                    <p className="text-slate-400 text-sm sm:text-base">2207 Wellington Dr, Denton, TX 76209, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <Phone className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Call Us</div>
                    <a href="tel:9403904384" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">(940) 390-4384</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <Clock className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Business Hours</div>
                    <p className="text-slate-400 text-sm sm:text-base">Mon - Fri: 7am - 7pm<br />24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white font-medium mb-4 text-sm sm:text-base">Need immediate help?</p>
                <a 
                  href="tel:9403904384"
                  className="bg-accent hover:bg-orange-600 text-white w-full py-3.5 sm:py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 transition-all text-sm sm:text-base"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now: (940) 390-4384
                </a>
              </div>
            </div>

            <div className="flex-1 bg-slate-800 min-h-[450px] md:min-h-full relative overflow-hidden rounded-b-[2rem] md:rounded-r-[3rem] md:rounded-bl-none shadow-inner">
              {/* The Map Iframe - Fixed with absolute positioning to fill container */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106947.8814725345!2d-97.21191026640625!3d33.21484120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca896324888d%3A0x633593b4a24f0c40!2sDenton%2C%20TX!5e0!3m2!1sen!2sus!4v1711915000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 z-10"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="GP Plumbing Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-md">
                <Wrench className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">GP Plumbing</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} GP Plumbing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

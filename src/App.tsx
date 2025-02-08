import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { RevealOnScroll } from './components/RevealOnScroll';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const img = new Image();
    img.src = 'https://www.dropbox.com/scl/fi/uprwkwfu5gf6zvv6f5rkx/brownRed.avif?rlkey=qmxf66a764gydidkasv61db93&raw=1';
    
    img.onload = () => {
      setIsBackgroundLoaded(true);
      setTimeout(() => setIsAnimating(true), 500);
    };
  }, []);

  return (
    <>
      <div className={`rotating-background ${isBackgroundLoaded ? 'background-loaded' : ''}`}></div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
        {/* Content container */}
        <div className="hero-section relative z-10 w-full max-w-8xl mx-auto text-center">
          <span className={`hero-text hero-part block text-2xl sm:text-3xl md:text-[3.5rem] leading-tight sm:leading-[1.2] tracking-tight font-light ${isAnimating ? 'animate-hero' : ''}`} id="part1">
            {t('hero.specialty')} <span className="text-primary font-normal">{t('hero.pharmaceutical')}</span> {t('hero.focused')}
          </span>
          <span className={`hero-text hero-part block text-2xl sm:text-3xl md:text-[3.5rem] leading-tight sm:leading-[1.2] tracking-tight font-light mt-4 ${isAnimating ? 'animate-hero' : ''}`} id="part2">
             <span className="text-primary font-normal">{t('hero.commercialisation')}</span> {t('hero.unlicensed')} <span className="text-primary font-normal">{t('hero.orphan')}</span>
          </span>
          <span className={`hero-text hero-part inline text-2xl sm:text-3xl md:text-[3.5rem] leading-tight sm:leading-[1.2] tracking-tight font-light ${isAnimating ? 'animate-hero' : ''}`} id="part3">
            {t('hero.and')}
          </span>{' '}
          <span className={`text-primary hero-text hero-part inline text-2xl sm:text-3xl md:text-[3.5rem] leading-tight sm:leading-[1.2] tracking-tight font-normal ${isAnimating ? 'animate-hero' : ''}`} id="part4">
            {t('hero.therapeutics')}
          </span>
          <div className="find-out mt-8 sm:mt-12">
            <div className="cta-scroll hero-text hero-part" id="part5">
              <a href="#company-info" className="inline-flex items-center text-base sm:text-[20px] text-[#363636] hover:text-primary transition-colors duration-200">
                {t('hero.findMore')}
                <ArrowDown className="ml-2 w-4 h-4 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Probity section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll animation="fade-up" delay={0}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 sm:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('probity.title')}
              </span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
              {t('probity.description')}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={400}>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
            >
              {t('probity.contact')}
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Video section */}
      <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.dropbox.com/scl/fi/0zx9a5qsoco44nev6d1bf/cells.mp4?rlkey=c380jn8k2yb30k0qyeqvmtoks&raw=1" type="video/mp4" />
        </video>

        <div className="relative z-20 min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-6 sm:mb-8 drop-shadow-lg">
                {t('video.title')}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll animation="fade" delay={200}>
              <p className="text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed drop-shadow-lg text-white">
                {t('video.description')}
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-base sm:text-lg drop-shadow-lg text-white">{t('video.import')}</p>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-base sm:text-lg drop-shadow-lg text-white">{t('video.registration')}</p>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-base sm:text-lg drop-shadow-lg text-white">{t('video.managed')}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Registration section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left column with content */}
            <div className="space-y-6 sm:space-y-8">
              <RevealOnScroll animation="fade-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('registration.title')}
                  </span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('registration.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('registration.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>

            {/* Right column with large circular image */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-full sm:w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/tw5qlwtlckr0c6ucuwxjz/registration.jpg?rlkey=kxt1egmd1zpabt5uhqvqsfe12&raw=1"
                    alt="Medical Registration Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Unlicensed medicines section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content first on mobile, second on desktop */}
            <div className="md:order-2 space-y-6 sm:space-y-8">
              <RevealOnScroll animation="fade-up" delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('unlicensed.title')}
                  </span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('unlicensed.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('unlicensed.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>

            {/* Image first on desktop, second on mobile */}
            <RevealOnScroll animation="fade" className="md:order-1">
              <div className="relative w-full sm:w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/kbbowvun7k3e5kfqoittu/provider.jpg?rlkey=svbix202drl0v4rs0xtd5ou4a&raw=1"
                    alt="Healthcare Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Market Access Programs section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left column with content */}
            <div className="space-y-6 sm:space-y-8">
              <RevealOnScroll animation="fade-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('market.title')}
                  </span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('market.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('market.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>

            {/* Right column with large circular image */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-full sm:w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/51ij9609scgtg74253c88/access.jpg?rlkey=1mywy4p16w1qqp1qn1iz0timo&raw=1"
                    alt="Market Access Programs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('news.title')}
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="max-w-4xl mx-auto">
            <RevealOnScroll animation="fade" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  {/* Image side */}
                  <div className="relative h-48 sm:h-64 md:h-auto">
                    <img
                      src="https://www.dropbox.com/scl/fi/lfv6554l7n8cwbizfcw34/image2.png?rlkey=loz77zooni9pxvft25g5jjkuo&raw=1"
                      alt="Expert Meeting on Neuroblastoma"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content side */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                        {t('news.expertMeeting')}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed">
                        {t('news.expertDescription')}
                      </p>
                    </div>
                    
                    <div className="mt-6 sm:mt-8">
                      <Link 
                        to="/news" 
                        className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200 group"
                      >
                        {t('news.viewAll')}
                        <ArrowDown className="ml-2 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer w-full text-white py-12 sm:py-16 relative px-4 sm:px-6">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <img
                src="https://aurora2222.ilicfilip.com/assets/img/logo-aurora.png"
                alt="Aurora2222"
                className="h-20 sm:h-30 w-auto mb-6"
              />
            </div>

            {/* Company Address */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{t('footer.address')}</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{t('footer.contact')}</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{t('footer.warehouse')}</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{t('footer.medical')}</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-3 sm:mt-4">{t('footer.adverse')}</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
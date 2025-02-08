import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { certificationTranslations } from '../translations/certification';

function Certification() {
  const { language } = useLanguage();
  const t = (key: string) => certificationTranslations[language][key];

  return (
    <>
      <div className="rotating-background background-loaded"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('hero.title')}
              </span>
            </h1>
          </RevealOnScroll>

          {/* Wholesale License Section */}
          <div className="mb-24">
            <RevealOnScroll animation="fade-up" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-primary">
                {t('wholesale.title')}
              </h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Medicines License */}
              <RevealOnScroll animation="fade-up" delay={300}>
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                  <p className="text-lg mb-6 text-center">
                    {t('wholesale.medicines.description')}
                  </p>
                  <p className="text-sm text-center text-text-secondary mb-6">
                    {t('wholesale.medicines.revision')}
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="mailto:office@aurora2222.com"
                      className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                    >
                      {t('wholesale.enquire')}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Medical Devices License */}
              <RevealOnScroll animation="fade-up" delay={400}>
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                  <p className="text-lg mb-6 text-center">
                    {t('wholesale.devices.description')}
                  </p>
                  <p className="text-sm text-center text-text-secondary mb-6">
                    {t('wholesale.devices.revision')}
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="mailto:office@aurora2222.com"
                      className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                    >
                      {t('wholesale.enquire')}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Business Register Section */}
          <RevealOnScroll animation="fade-up" delay={500}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-primary">
                {t('register.title')}
              </h2>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                <p className="text-lg mb-6 text-center">
                  {t('register.description')}
                </p>
                <div className="flex justify-center">
                  <a 
                    href="mailto:office@aurora2222.com"
                    className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                  >
                    {t('wholesale.enquire')}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Certificates Gallery Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Sticky Left Column */}
            <div className="col-span-3">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('gallery.title')}
                </h2>
              </div>
            </div>

            {/* Scrollable Right Column */}
            <div className="col-span-9 space-y-12">
              <RevealOnScroll animation="fade-up" delay={0}>
                <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[350px] mx-auto">
                  <img
                    src="https://www.dropbox.com/scl/fi/ix3eidomrj8uscix87z5h/tuv-austria.png?rlkey=h4lp2pk8qppiulufyin9vgbfd&st=kfmr0yxo&dl=0&raw=1"
                    alt={t('gallery.tuv.alt')}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={200}>
                <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[350px] mx-auto">
                  <img
                    src="https://www.dropbox.com/scl/fi/kl3vcfaac8nv5tgt7hvv3/good-reputation.png?rlkey=kfemkr0mc3csy30cnfpbfg16r&st=i0jpom3b&dl=0&raw=1"
                    alt={t('gallery.reputation.alt')}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={400}>
                <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[350px] mx-auto">
                  <img
                    src="https://www.dropbox.com/scl/fi/wz95y4u06hk61mj153hq3/credit.png?rlkey=995akcp70pq2ify3kl62quhm5&st=ovqtrg9t&dl=0&raw=1"
                    alt={t('gallery.credit.alt')}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
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
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.address')}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.contact')}</h3>
              <div className="space-y-2">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.warehouse')}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.medical')}</h3>
              <div className="space-y-2">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-4">{t('footer.adverse')}</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Certification;
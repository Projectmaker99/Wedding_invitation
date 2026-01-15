import { useEffect, useRef, useState } from 'react';
import { Heart, PartyPopper, Sparkles } from 'lucide-react';

const FinalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="final-section"
      ref={sectionRef}
      className="section-container relative overflow-hidden bg-primary"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-gold opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['✦', '✧', '❋', '✿', '❀'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Celebration Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <PartyPopper className="w-10 h-10 text-gold animate-bounce" style={{ animationDelay: '0s' }} />
          <Sparkles className="w-10 h-10 text-gold animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-10 h-10 text-gold animate-bounce fill-gold" style={{ animationDelay: '0.4s' }} />
          <Sparkles className="w-10 h-10 text-gold animate-bounce" style={{ animationDelay: '0.2s' }} />
          <PartyPopper className="w-10 h-10 text-gold animate-bounce" style={{ animationDelay: '0s' }} />
        </div>

        {/* Main Message */}
        <div className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <h2 className="font-decorative text-3xl md:text-5xl lg:text-6xl text-gold leading-tight mb-6">
            सर्वांनी लग्नाला<br />
            यायचं हं !
          </h2>
          <p className="font-script text-2xl md:text-4xl text-primary-foreground opacity-90">
            Everyone must come to the wedding!
          </p>
        </div>

        <div className="divider-ornament text-gold mb-10">
          <span className="text-3xl">💑</span>
        </div>

        {/* Nimantrak (Inviters) Section */}
        <div className={`bg-cream/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-gold/30 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-decorative text-xl md:text-2xl text-gold mb-6">
            निमंत्रक
          </h3>
          <div className="space-y-3 font-elegant text-lg text-primary-foreground">
            <p>श्री. मुरलीधर मारुती शेटे</p>
            <p>श्री. रमेश मुरलीधर शेटे</p>
            <p>श्री. सुधीर मुरलीधर शेटे</p>
            <p className="text-gold">व समस्त शेटे पाटील परिवार</p>
          </div>
        </div>

        {/* Blessing */}
        <div className={`mt-8 p-6 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-elegant text-lg md:text-xl text-primary-foreground leading-relaxed mb-6">
            आपल्या शुभ आशीर्वादाने<br />
            नवविवाहित जोडप्याला<br />
            सुखी व समृद्ध वैवाहिक जीवनाची<br />
            सुरुवात होईल
          </p>

          <div className="flex justify-center items-center gap-4 text-gold">
            <span className="text-4xl">🙏</span>
            <span className="font-decorative text-xl">आपले नम्र</span>
            <span className="text-4xl">🙏</span>
          </div>
        </div>

        {/* Names Footer */}
        <div className="mt-12">
          <p className="font-elegant text-lg text-primary-foreground font-bold">
            शेटे पाटील परिवार
          </p>
        </div>

        {/* Final decorative flowers */}
        <div className="mt-12 flex justify-center flex-wrap gap-2">
          {['🌼', '🌺', '🪷', '💐', '🌷', '🌸', '🌺', '🌼'].map((flower, i) => (
            <span
              key={i}
              className="text-3xl md:text-4xl animate-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {flower}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-12 font-elegant text-sm text-primary-foreground/50">
          with love ❤️
        </p>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(38, 80%, 55%)"
            fillOpacity="0.3"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default FinalSection;

import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

const HaldiSection = () => {
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
      id="haldi-section"
      ref={sectionRef}
      className="section-container relative overflow-hidden bg-haldi pattern-paisley"
    >
      {/* Turmeric splatter decorations */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'hsl(45, 90%, 45%)',
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      <div className={`text-center max-w-3xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Haldi Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-cream flex items-center justify-center gold-border animate-pulse-gold">
            <Sparkles className="w-12 h-12 text-gold" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-decorative text-4xl md:text-6xl text-maroon mb-4">
          हळदी समारंभ
        </h2>
        <p className="font-script text-3xl md:text-4xl text-maroon mb-8">
          Haldi Ceremony
        </p>

        <div className="divider-ornament text-maroon mb-8">
          <span className="text-3xl">✿</span>
        </div>

        {/* Date & Details Card */}
        <div className={`bg-cream/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 gold-border transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="font-decorative text-xl md:text-2xl text-maroon mb-4">
            तारीख / Date
          </p>
          <p className="font-decorative text-3xl md:text-5xl text-primary mb-4">
            शनिवार दि. २४/०१/२०२६
          </p>
          <p className="font-elegant text-lg text-maroon mb-6">
            Saturday, 24 January 2026
          </p>

          <div className="border-t-2 border-gold pt-6 mt-4">
            <p className="font-decorative text-xl text-primary mb-2">
              वेळ / Time
            </p>
            <p className="font-decorative text-2xl md:text-3xl text-gold mb-4">
              सायंकाळी ६:०० वा.
            </p>
            <p className="font-elegant text-base text-muted-foreground">
              (विवाहस्थळी)
            </p>
          </div>

          <div className="border-t-2 border-gold pt-6 mt-6">
            <p className="font-elegant text-lg md:text-xl text-foreground leading-relaxed">
              हळदीच्या शुभ प्रसंगी<br />
              आपले सहकुटुंब उपस्थित राहून<br />
              आनंदात सहभागी व्हावे
            </p>
          </div>
        </div>

        {/* Decorative marigolds */}
        <div className="mt-10 flex justify-center gap-2">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl animate-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              🌼
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HaldiSection;

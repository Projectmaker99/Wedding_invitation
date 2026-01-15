import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
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

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/u7cjUUQDextSKTq18', '_blank');
  };

  return (
    <section
      id="location-section"
      ref={sectionRef}
      className="section-container relative bg-gradient-to-b from-muted to-cream pattern-mandala"
    >
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Location Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center animate-pulse-gold">
            <MapPin className="w-10 h-10 text-gold" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-decorative text-4xl md:text-5xl text-primary mb-4">
          विवाह स्थळ
        </h2>
        <p className="font-script text-2xl md:text-3xl text-gold mb-8">
          Wedding Venue
        </p>

        <div className="divider-ornament text-gold mb-10">
          <span className="text-2xl">❧</span>
        </div>

        {/* Venue Card */}
        <div className={`bg-card rounded-3xl p-8 md:p-12 gold-border shadow-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Venue Name */}
          <h3 className="font-decorative text-2xl md:text-3xl text-gold mb-6">
            इंदुप्रभा लॉन्स
          </h3>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-xl">
              <Calendar className="w-6 h-6 text-gold" />
              <div className="text-left">
                <p className="font-elegant text-sm text-muted-foreground">दिनांक</p>
                <p className="font-decorative text-lg text-foreground">रविवार, २५ जानेवारी २०२६</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-xl">
              <Clock className="w-6 h-6 text-gold" />
              <div className="text-left">
                <p className="font-elegant text-sm text-muted-foreground">शुभ मुहूर्त</p>
                <p className="font-decorative text-lg text-foreground">दुपारी १२:३१ वा.</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-8 p-6 bg-gradient-to-r from-muted via-cream to-muted rounded-xl border-l-4 border-gold">
            <p className="font-elegant text-lg md:text-xl text-foreground leading-relaxed">
              <span className="font-bold text-primary">पत्ता:</span><br />
              चांदा घोडेगाव रोड,<br />
              चांदा, ता. नेवासा, जि. अहिल्यानगर
            </p>
          </div>

          {/* Map Button */}
          <Button
            onClick={openMaps}
            className="group bg-primary hover:bg-maroon text-primary-foreground font-decorative text-lg px-8 py-6 rounded-full gold-border transition-all duration-300 hover:scale-105"
          >
            <Navigation className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            नकाशावर पहा | View on Map
          </Button>
        </div>

        {/* Decorative flowers */}
        <div className="mt-10 flex justify-center gap-3">
          {['🌸', '🌺', '🌷', '🌺', '🌸'].map((flower, i) => (
            <span
              key={i}
              className="text-3xl animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {flower}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

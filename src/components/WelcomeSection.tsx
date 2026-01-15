import { useEffect, useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import couplePhoto from '@/assets/couple-photo.png';

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('haldi-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="section-container relative overflow-hidden bg-gradient-to-b from-cream to-muted pattern-mandala"
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            d="M0,0 L100,0 L100,20 C60,20 20,60 20,100 L0,100 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-60 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            d="M0,0 L100,0 L100,20 C60,20 20,60 20,100 L0,100 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Om Symbol */}
        <div className="text-5xl text-gold mb-4 animate-float">ॐ</div>
        
        {/* Blessing */}
        <p className="text-xl md:text-2xl text-maroon font-elegant italic mb-6">
          || श्री गणेशाय नमः ||
        </p>

        {/* Couple Photo */}
        {/* <div className="relative mb-8">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full gold-border p-2 bg-cream animate-pulse-gold overflow-hidden">

          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Heart 
              className="w-full h-full text-gold opacity-10" 
              size={300}
              strokeWidth={0.5}
            />
          </div>
        </div> */}

        {/* Bride – Photo – Groom */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center text-center">

  {/* Bride */}
  <div
    className={`transition-all duration-700 delay-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}
  >
    <p className="font-elegant text-sm text-muted-foreground mb-1">चि. सौ. का.</p>
    <h2 className="font-script text-4xl md:text-5xl text-gold mb-3">ऋतुजा</h2>
    <p className="font-elegant text-sm md:text-base text-foreground leading-relaxed">
      सौ. सविता व श्री. रमेश मुरलीधर शेटे पा.<br />
      यांची कन्या<br />
      <span className="text-muted-foreground">
        रा. चांदा, ता. नेवासा, जि. अहिल्यानगर
      </span>
    </p>
  </div>

  {/* Photo */}
    <div className="flex justify-center">
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full gold-border p-2 bg-cream overflow-hidden">
        <img
          src={couplePhoto}
          alt="ऋतुजा आणि सागर"
          className="w-full h-full rounded-full object-cover translate-y-[6px]"

        />
        <Heart
          className="absolute inset-0 m-auto text-gold opacity-10"
          size={220}
          strokeWidth={0.5}
        />
      </div>
    </div>

  {/* Groom */}
  <div
    className={`transition-all duration-700 delay-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
    }`}
  >
    <p className="font-elegant text-sm text-muted-foreground mb-1">चि.</p>
    <h2 className="font-script text-4xl md:text-5xl text-gold mb-3">सागर</h2>
    <p className="font-elegant text-sm md:text-base text-foreground leading-relaxed">
      सौ. वैशाली व श्री. अशोक लहानू गागरे पा.<br />
      यांचे चिरंजीव<br />
      <span className="text-muted-foreground">
        रा. नरसाळी, ता. श्रीरामपूर, जि. अहिल्यानगर
      </span>
    </p>
  </div>

</div>


        <div className="divider-ornament text-gold mb-6">
          <span className="text-2xl">❧</span>
        </div>

        {/* Main Title */}
        <h1 className="font-decorative text-3xl md:text-5xl text-primary mb-4">
          यांचा शुभविवाह
        </h1>

        {/* Wedding Date & Time */}
        <div className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 gold-border mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="font-decorative text-xl md:text-2xl text-primary mb-2">
            रविवार दि. २५/०१/२०२६
          </p>
          <p className="font-elegant text-lg text-foreground mb-2">
            रोजी दुपारी <span className="text-gold font-bold">१२:३१ वा.</span>
          </p>
          <p className="font-elegant text-sm text-muted-foreground">
            या शुभमुहूर्तावर करण्याचे योजिले आहे.
          </p>
        </div>

        {/* Invitation Text */}
        <p className="font-elegant text-base md:text-lg text-foreground leading-relaxed mb-6">
          तरी या शुभमंगलप्रसंगी आपण सहकुटुंब सहपरिवार उपस्थित राहून वधू-वरांस शुभाशिर्वाद द्यावेत,<br />
          ही विनंती ..!
        </p>

        {/* Decorative Marigold */}
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-2xl animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              🌼
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce cursor-pointer hover:text-secondary transition-colors"
      >
        <ChevronDown size={40} />
      </button>

      {/* Bottom decorative corners */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-60 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            d="M0,0 L100,0 L100,20 C60,20 20,60 20,100 L0,100 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-60 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            d="M0,0 L100,0 L100,20 C60,20 20,60 20,100 L0,100 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};

export default WelcomeSection;

import WelcomeSection from '@/components/WelcomeSection';
import HaldiSection from '@/components/HaldiSection';
import LocationSection from '@/components/LocationSection';
import FinalSection from '@/components/FinalSection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <WelcomeSection />
      <HaldiSection />
      <LocationSection />
      <FinalSection />
    </main>
  );
};

export default Index;


import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('about-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/background.webp')", 
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in text-shadow">
          Muthur<span className="text-nature-leaf">.</span> Karnataka
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 animate-fade-up delay-150 text-shadow">
          Home to the Breathtaking Muthyalamaduvu Waterfalls
        </h2>
        <p className="max-w-lg text-base md:text-lg mb-8 animate-fade-up delay-300">
          Discover a hidden paradise just outside Bangalore – where crystal waters cascade 
          through serene landscapes, offering the perfect escape from city life.
        </p>
        <Button 
          onClick={scrollToContent}
          className="bg-nature-water hover:bg-nature-water-light text-white px-6 py-3 rounded-full flex items-center gap-2 animate-fade-up delay-500"
        >
          Explore <ArrowDown size={16} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

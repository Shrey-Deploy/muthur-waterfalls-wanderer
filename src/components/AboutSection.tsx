
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about-section" className="travel-section relative overflow-hidden">
      <div className="absolute inset-0 bg-nature-light forest-pattern-bg -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">Welcome to Muthur (ಮದರ್)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="section-text">
              Nestled in the serene landscapes of Karnataka, Muthur is a peaceful village 
              surrounded by lush greenery and natural beauty. Located just about 40 kilometers 
              from the bustling city of Bangalore, this tranquil haven offers a perfect retreat 
              for anyone looking to escape the urban chaos.
            </p>
            <p className="section-text">
              The village captivates visitors with its untouched natural splendor, 
              traditional rural lifestyle, and most importantly, its crown jewel – the 
              magnificent Muthyalamaduvu Waterfalls, also known as "Pearl Valley."
            </p>
            <a 
              href="https://maps.app.goo.gl/stsnW7oGQMcg3jdo8" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-nature-water hover:text-nature-water-light transition-colors"
            >
              <MapPin size={18} />
              <span>View on Google Maps</span>
            </a>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg card-hover-effect">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Muthur Village Landscape" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        
        <h3 className="section-subtitle">About Muthyalamaduvu Waterfalls</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow glass-card">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Muthyalamaduvu Waterfalls" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-5">
              <h4 className="font-semibold text-lg mb-2">Pearl Valley</h4>
              <p className="text-gray-600">
                Named "Pearl Valley" because the water cascades like pearls when it hits the rocks, 
                creating a mesmerizing visual spectacle that captivates all visitors.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow glass-card">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Forest around Muthyalamaduvu" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-5">
              <h4 className="font-semibold text-lg mb-2">Pristine Environment</h4>
              <p className="text-gray-600">
                The waterfall is surrounded by lush forests and rocky terrains, offering a pristine 
                environment for nature lovers and photographers alike.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow glass-card">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Sunlight through trees" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-5">
              <h4 className="font-semibold text-lg mb-2">Natural Symphony</h4>
              <p className="text-gray-600">
                The soothing sound of cascading water combined with chirping birds creates a natural 
                symphony that rejuvenates the mind and body.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, CloudSun } from "lucide-react";

const TrekkingSection = () => {
  return (
    <section className="travel-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 bg-pattern-dots -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">The Trekking Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="section-text">
              The journey to Muthyalamaduvu Waterfalls offers an exhilarating trekking experience 
              through picturesque landscapes. The trail, approximately 1.5 kilometers long, winds 
              through rocky terrain and dense forests, rewarding trekkers with breathtaking views 
              at every turn.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-nature-forest">Difficulty Level</h3>
              <div className="flex gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Easy to Moderate</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Beginner-Friendly</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Some Steep Sections</Badge>
              </div>
              <p className="text-gray-600">
                While mostly suitable for beginners, some sections require careful footing, 
                especially during the monsoon season when rocks can be slippery.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-nature-forest">Best Trekking Seasons</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-md backdrop-blur-sm bg-opacity-70 shadow-sm">
                  <Sun size={20} className="text-amber-500" />
                  <div>
                    <p className="font-medium">Post-Monsoon (Sep-Nov)</p>
                    <p className="text-sm text-gray-600">Highest water flow, lush greenery</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-md backdrop-blur-sm bg-opacity-70 shadow-sm">
                  <CloudSun size={20} className="text-blue-500" />
                  <div>
                    <p className="font-medium">Winter (Dec-Feb)</p>
                    <p className="text-sm text-gray-600">Pleasant weather, moderate water flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Trekking trail to Muthyalamaduvu" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h3 className="section-subtitle">What You'll Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          <Card className="border-l-4 border-nature-forest shadow-md backdrop-blur-sm bg-white/60">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Scenic Views</h4>
              <p className="text-gray-600">
                Panoramic vistas of the surrounding hills, valleys, and the distant Bangalore skyline 
                on clear days. Perfect for photography enthusiasts!
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-nature-leaf shadow-md backdrop-blur-sm bg-white/60">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Rich Biodiversity</h4>
              <p className="text-gray-600">
                Encounter diverse flora and fauna, including various bird species, butterflies, 
                and native plants that thrive in this ecosystem.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-nature-water shadow-md backdrop-blur-sm bg-white/60">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Natural Rock Formations</h4>
              <p className="text-gray-600">
                Marvel at interesting rock formations that have been shaped by natural elements 
                over centuries, adding to the trek's visual appeal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrekkingSection;

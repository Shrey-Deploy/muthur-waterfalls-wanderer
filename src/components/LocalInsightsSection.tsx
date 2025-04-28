import { Button } from "@/components/ui/button";
const LocalInsightsSection = () => {
  return <section className="travel-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nature-sand/30 to-amber-50 -z-10"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-30 -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">Local Insights</h2>
        <p className="section-text max-w-3xl">
          Beyond the waterfalls, Muthur and its surrounding villages offer an authentic glimpse 
          into rural Karnataka life. Taking time to explore these areas will enrich your 
          travel experience with cultural insights and culinary delights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="rounded-lg overflow-hidden relative group shadow-xl">
            <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Local village near Muthur" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Local Culture</h3>
              <p className="mb-3">
                Experience traditional Kannadiga hospitality in the villages surrounding Muthyalamaduvu. 
                Don't miss the local temples and seasonal festivals that showcase rich cultural traditions.
              </p>
              <Button variant="outline" className="w-fit border-white hover:bg-white/20 text-zinc-900">
                Explore Cultural Sites
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden relative group shadow-xl">
            <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Local food from Karnataka" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Local Cuisine</h3>
              <p className="mb-3">
                Sample authentic Karnataka dishes in small eateries and homes. Try the ragi mudde (finger millet balls), 
                akki roti (rice flatbread), and local vegetable preparations.
              </p>
              <Button variant="outline" className="w-fit text-white border-white hover:bg-white/20">
                Discover Local Food
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white/50 backdrop-blur-md p-6 rounded-lg border border-white/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-nature-forest">Insider Tips from Locals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-medium text-lg mb-2 text-nature-forest-light">Hidden Spots</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-nature-leaf font-bold">•</span>
                  <span>
                    <strong>Sunset Point:</strong> Ask locals about the small hill near the village that offers 
                    spectacular sunset views over the valley.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nature-leaf font-bold">•</span>
                  <span>
                    <strong>Ancient Banyan Tree:</strong> About 2 km from the main waterfall is a centuries-old 
                    banyan tree that's considered sacred by locals.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-medium text-lg mb-2 text-nature-forest-light">Local Etiquette</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-nature-leaf font-bold">•</span>
                  <span>
                    Greet locals with "Namaskara" and always ask permission before taking photographs of people or inside temples.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nature-leaf font-bold">•</span>
                  <span>
                    Remove footwear when entering homes or religious places as a sign of respect.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-nature-leaf/10 p-4 rounded-md">
            <h4 className="font-medium text-nature-forest mb-2">Supporting the Local Economy</h4>
            <p className="text-gray-700">
              Consider purchasing handmade souvenirs, local honey, or agricultural products directly from villagers. 
              This helps support the local economy and provides you with authentic mementos of your visit.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default LocalInsightsSection;
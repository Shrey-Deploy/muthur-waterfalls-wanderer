
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

const TravelTipsSection = () => {
  return (
    <section className="travel-section bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Travel Tips</h2>
        
        <Tabs defaultValue="when" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="when">When to Visit</TabsTrigger>
            <TabsTrigger value="carry">What to Carry</TabsTrigger>
            <TabsTrigger value="safety">Safety Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="when">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-nature-forest">Best Time to Visit</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg mb-2">Ideal Seasons</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-nature-leaf font-bold">•</span>
                        <span><strong>Post-Monsoon (September to November):</strong> The waterfall is at its fullest, and the surrounding landscape is lush green.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-nature-leaf font-bold">•</span>
                        <span><strong>Winter (December to February):</strong> Pleasant weather with moderate water flow, perfect for trekking.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-2">Times to Avoid</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Peak Summer (April-May):</strong> The waterfall may dry up, and temperatures can be uncomfortable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span><strong>Heavy Monsoon (July-August):</strong> The trail becomes slippery and potentially dangerous.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium text-blue-700 mb-2">Pro Tip</h4>
                  <p className="text-blue-700">
                    Plan your visit on weekdays to avoid crowds. Early mornings offer the best light for 
                    photography and a more peaceful experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="carry">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-nature-forest">Essential Items to Pack</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-3 text-nature-forest-light">Trekking Gear</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span>👟</span>
                        <span>Sturdy trekking shoes with good grip</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🧢</span>
                        <span>Hat or cap for sun protection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🧦</span>
                        <span>Extra pair of socks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🦯</span>
                        <span>Walking stick (optional but helpful)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-3 text-nature-forest-light">Food & Hydration</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span>💧</span>
                        <span>At least 2 liters of water per person</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🥪</span>
                        <span>Energy bars or light snacks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🍎</span>
                        <span>Fresh fruits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🥤</span>
                        <span>Electrolyte drinks for hydration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-3 text-nature-forest-light">Other Essentials</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span>🔋</span>
                        <span>Power bank and mobile phone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🧴</span>
                        <span>Sunscreen and insect repellent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🩹</span>
                        <span>Basic first aid kit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🗑️</span>
                        <span>Small bag for carrying trash back</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="safety">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-nature-forest">Safety Guidelines</h3>
                
                <div className="bg-amber-50 p-4 rounded-md mb-6 flex gap-3">
                  <AlertCircle className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-amber-800">
                    While Muthyalamaduvu offers a relatively safe trekking experience, it's always better 
                    to be prepared and cautious, especially when traveling with children or elderly people.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg mb-3 text-nature-forest-light">During the Trek</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Never trek alone; always go in groups of at least 3-4 people.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Inform someone about your trek plans who isn't joining you.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Stick to marked trails and avoid venturing into unfamiliar territories.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Watch your step, especially on wet and slippery rocks.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-3 text-nature-forest-light">At the Waterfall</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Do not climb on wet rocks near the waterfall as they can be extremely slippery.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Avoid swimming during monsoons when water currents can be unpredictable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Keep children under supervision at all times.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Do not litter; carry back all your trash to maintain the pristine environment.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium text-green-700 mb-2">Emergency Contacts</h4>
                  <p className="text-green-700">
                    Save local police station number (080-2746XXXX) and forest department helpline 
                    before starting your trek. Network connectivity might be spotty in some areas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TravelTipsSection;

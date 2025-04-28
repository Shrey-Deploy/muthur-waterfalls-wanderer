
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car } from "lucide-react";

const AccessibilitySection = () => {
  return (
    <section className="travel-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blue -z-10"></div>
      <div className="absolute inset-0 water-pattern-bg opacity-40 -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Getting There</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
              Muthyalamaduvu is easily accessible from Bangalore, making it a perfect 
              destination for a day trip or weekend getaway. The journey itself offers 
              picturesque views of the countryside and small villages along the way.
            </p>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-5 mb-6 shadow-lg border border-white/20">
              <h3 className="font-semibold text-xl mb-3 text-white">Distance from Major Cities</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-white/90">Bangalore City Center</span>
                  <span className="font-semibold text-white">~40 km</span>
                </li>
                <li className="flex justify-between items-center border-t border-white border-opacity-20 pt-3">
                  <span className="text-white/90">Electronic City</span>
                  <span className="font-semibold text-white">~25 km</span>
                </li>
                <li className="flex justify-between items-center border-t border-white border-opacity-20 pt-3">
                  <span className="text-white/90">Mysore</span>
                  <span className="font-semibold text-white">~150 km</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Car className="h-5 w-5 text-white" />
              <h3 className="font-semibold text-xl text-white">Travel Time by Car</h3>
            </div>
            <ul className="space-y-2 mb-6 text-white/90">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-white" />
                <span>From Bangalore City: Approximately 1.5 hours</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-white" />
                <span>From Electronic City: Approximately 45 minutes</span>
              </li>
            </ul>
          </div>
          
          <div>
            <Card className="backdrop-blur-md bg-white/90 text-gray-800 shadow-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-xl mb-4 text-nature-forest">Detailed Directions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-lg mb-2">From Bangalore</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
                      <li>Take Bannerghatta Road heading south from Bangalore</li>
                      <li>Continue past Bannerghatta National Park</li>
                      <li>At Jigani, take the right turn towards Anekal</li>
                      <li>From Anekal, follow signs to Muthyalamaduvu (approx. 10 km)</li>
                      <li>Parking is available near the entrance of the trekking trail</li>
                    </ol>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="font-medium text-lg mb-2">Public Transportation</h4>
                    <p className="text-gray-700 mb-3">
                      Public buses run from Bangalore's Shivajinagar and Majestic bus stands to Anekal. 
                      From Anekal, you can hire an auto-rickshaw to reach Muthyalamaduvu.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded-md">
                      <p className="text-amber-800 text-sm">
                        <strong>Note:</strong> Public transportation options are limited, especially on return journeys. 
                        It's recommended to have private transportation or book a round-trip taxi.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-lg shadow-lg border border-white/20">
          <h3 className="font-semibold text-xl mb-3 text-white">Day Trip Planning</h3>
          <p className="mb-4 text-white/90">
            Muthyalamaduvu is perfect for a day trip from Bangalore. Here's a suggested timeline:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-md">
              <p className="font-semibold text-lg text-white">7:30 AM</p>
              <p className="text-white/90">Start from Bangalore</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-md">
              <p className="font-semibold text-lg text-white">9:00 AM</p>
              <p className="text-white/90">Begin trekking</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-md">
              <p className="font-semibold text-lg text-white">12:30 PM</p>
              <p className="text-white/90">Lunch & relaxation</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-md">
              <p className="font-semibold text-lg text-white">4:00 PM</p>
              <p className="text-white/90">Return to Bangalore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;

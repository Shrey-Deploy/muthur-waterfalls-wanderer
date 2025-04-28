
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Photography",
      icon: <Camera className="h-8 w-8 text-nature-forest" />,
      description: "Capture stunning landscapes, waterfalls, and flora. The pearl-like cascade of water creates magical photography opportunities, especially during morning hours when light rays filter through the trees."
    },
    {
      title: "Picnicking",
      icon: "🧺",
      description: "Enjoy a peaceful picnic by the waterfall or along the trekking route where several flat rocks provide natural seating areas. Remember to carry back all waste to keep the area pristine."
    },
    {
      title: "Bird Watching",
      icon: "🦜",
      description: "Spot various avian species including kingfishers, woodpeckers, and occasionally eagles soaring above the valley. Early mornings are ideal for bird enthusiasts."
    },
    {
      title: "Nature Meditation",
      icon: "🧘",
      description: "Find a quiet spot and practice mindfulness amidst nature. The soothing sound of the waterfall creates the perfect backdrop for meditation and stress relief."
    },
    {
      title: "Rock Climbing",
      icon: "🧗",
      description: "For adventure seekers, some sections near the waterfall offer safe rock climbing opportunities. Always ensure proper safety equipment and preferably go with experienced climbers."
    },
    {
      title: "Swimming",
      icon: "🏊",
      description: "During safe seasons, the natural pool at the base of the waterfall offers a refreshing dip. Always check water conditions and never swim alone or immediately after heavy rains."
    }
  ];

  return (
    <section className="travel-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 water-pattern-bg -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">Things to Do</h2>
        <p className="section-text max-w-3xl">
          Muthyalamaduvu and its surrounding areas offer numerous activities for nature lovers, 
          adventure seekers, and those looking for a peaceful retreat. Here are some activities 
          to enjoy during your visit:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition-all card-hover-effect backdrop-blur-sm bg-white/70 border border-white/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {typeof activity.icon === 'string' ? (
                    <span className="text-3xl">{activity.icon}</span>
                  ) : (
                    activity.icon
                  )}
                  <h3 className="font-semibold text-xl">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

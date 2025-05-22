
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAnimation } from '@/hooks/use-animation';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from "@/assets/asetimg.jpg";
import logo1 from "@/assets/apl.jpg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { ref: titleRef, isVisible: isTitleVisible } = useAnimation();
  const { ref: subtitleRef, isVisible: isSubtitleVisible } = useAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: isCtaVisible } = useAnimation({ threshold: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
      
      {/* Content container */}
      <div className="container max-w-7xl relative mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 transition-all duration-700",
              mounted ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tournament season is live now
          </div>
          
          {/* Title */}
          <h1 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight transition-all duration-700 text-balance",
              isTitleVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
          >
            ASET Sports Tournaments 
            <span className="text-primary"> Management</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={cn(
              "text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100 text-balance",
              isSubtitleVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
          >
            Streamlining Ahalia Soccer League and Ahalia Premier League with intuitive team registration, match scheduling, and real-time analytics.
          </p>
          
          {/* CTA Buttons */}
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200",
              isCtaVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
          >
            
          </div>
        </div>

        {/* Hero image */}
        <div 
          className={cn(
            "mt-16 max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            mounted ? "opacity-100 transform-none" : "opacity-0 translate-y-12"
          )}
        >
          <div className="relative aspect-video w-full">
            
            <img 
              src={logo} alt="Logo" 
              alt="Football match in a stadium" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div 
          className={cn(
            "mt-16 max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            mounted ? "opacity-100 transform-none" : "opacity-0 translate-y-12"
          )}
        >
          <div className="relative aspect-video w-full">
            
            <img 
              src={logo1} alt="Logo1" 
              alt="Football match in a stadium" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

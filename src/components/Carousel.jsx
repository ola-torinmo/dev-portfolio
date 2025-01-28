'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Carousel = (props) => {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const items = [
    { img: props.img1, label: 'React' },
    { img: props.img2, label: 'Next.js' },
    { img: props.img3, label: 'Bootstrap' },
    { img: props.img4, label: 'Git' },
    { img: props.img5, label: 'Github' },
    { img: props.img6, label: 'Graphql' },
    { img: props.img7, label: 'Tailwind' },
    { img: props.img8, label: 'Webflow' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const firstList = containerRef.current.querySelector('ul');
    setScrollWidth(firstList.scrollWidth);
    
    const container = containerRef.current;
    let startTime = performance.now();
    let animationId;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const speed = 0.05; // Much slower speed
      const currentTranslate = -(elapsed * speed) % scrollWidth;
      
      if (container) {
        container.style.transform = `translateX(${currentTranslate}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [scrollWidth]);

  return (
    <div className="relative w-full overflow-hidden py-[2.5%]">
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div className="flex will-change-transform" ref={containerRef}>
        {[...Array(4)].map((_, groupIndex) => (
          <ul key={groupIndex} className="flex items-center justify-start flex-none">
            {items.map((item, index) => (
              <li key={`${groupIndex}-${index}`} className="flex items-center mr-12">
                <Image
                  src={item.img}
                  className="w-6 h-6 mt-0 mr-2"
                  alt={`Carousel Image ${index + 1}`}
                />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
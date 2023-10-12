"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./WhoWeAre.scss";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow re-triggering when element comes back into view
  });

  React.useEffect(() => {
    let animationFrameId: number;

    if (inView) {
      const start = 0;
      const duration = 1500; // Adjust the duration of the animation

      const startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animate();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end]);

  return <h1 ref={ref}>+{count} M</h1>;
};

const WhoWeAre = () => {
  return (
    <main className="who">
      <div className="line">
        <h1>Who We Are</h1>
        <div className="content__holder">
          <div className="content">
            <i>Land Area Of projects</i>
            <Counter end={7} />
          </div>
          <div className="content">
            <i>BUA</i>
            <Counter end={12} />
          </div>
          <div className="content">
            <i>Year Of experience</i>
            <Counter end={7} />
          </div>
          <div className="content">
            <i>Projects Completed</i>
            <Counter end={8} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;

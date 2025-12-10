import { createFileRoute } from '@tanstack/react-router';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import InflationLineChart from '../components/narrative/LineChart';
import ShoppingBasket from '../components/narrative/ShoppingBasket';
import '../components/narrative/narrative.css';

export const Route = createFileRoute('/narrative')({
  component: Narrative,
});

const NarrativeSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="narrative-section"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

function Narrative() {
  return (
    <div className="narrative-container">
      <NarrativeSection>
        <div className="narrative-content">
          <h1>The Official Story</h1>
          <p>
            You're told that a little bit of inflation is good. That it's a sign of a healthy, growing economy.
            Prices creep up, but so do wages. It's a slow, steady climb.
          </p>
        </div>
        <InflationLineChart />
      </NarrativeSection>

      <NarrativeSection>
        <div className="narrative-content">
          <h2>But then, things change...</h2>
          <p>
            Suddenly, the prices of everyday items start to jump. Your grocery bill gets higher, the cost of a new shirt is surprising, and filling up your car feels painful.
          </p>
        </div>
        <ShoppingBasket />
      </NarrativeSection>

      <NarrativeSection>
        <div className="narrative-content">
          <h2>The reality of your wallet.</h2>
          <p>
            Your paycheck doesn't seem to go as far as it used to. The slow and steady climb has turned into a steep hill, and you're struggling to keep up. This is the story of how inflation impacts real life.
          </p>
        </div>
      </NarrativeSection>
    </div>
  );
}
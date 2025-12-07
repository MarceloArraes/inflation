import { useState, useEffect } from 'react';
import scrollama from 'scrollama';
import './App.css';

function App() {
  // We store the index of the currently visible step
  const [currentStepIndex, setCurrentStepIndex] = useState<Number | null>(null);

  // This runs only once after the component mounts
  useEffect(() => {
    const scroller = scrollama();

    scroller
      .setup({
        step: ".step",
        offset: 0.5, // 0.5 means triggering when element hits middle of screen
        debug: true, // Adds a horizontal line to visualize the trigger point
      })
      .onStepEnter((response) => {
        // { element, index, direction }
        console.log('Enter:', response.index);
        setCurrentStepIndex(response.index);
      })
      .onStepExit((response) => {
        console.log('Enter:', response.index);
        // Optional: clear state if you scroll away
        // { element, index, direction }
      });

    // Cleanup: scrollama creates event listeners, we should remove them 
    // when the component unmounts to prevent memory leaks.
    return () => scroller.destroy();
  }, []);

  return (
    <div className="scroll-container">
      <div className="header">
        <h1>STicky Scroll Down</h1>
      </div>

      {/* 
        We use conditional styling here. 
        If the currentStepIndex matches this div's index, apply the active color.
      */}
      
      {/* CARD 0 */}
      <div 
        className={`step ${currentStepIndex === 0 ? 'active' : ''}`} 
        data-step="a"
        style={{ backgroundColor: currentStepIndex === 0 ? '#ffadad' : '#eee'}}
      >
        <h2>Card A (Index 0)</h2>
      </div>

      {/* CARD 1 */}
      <div 
        className={`step ${currentStepIndex === 1 ? 'active' : ''}`} 
        data-step="b"
        style={{ backgroundColor: currentStepIndex === 1 ? '#ffd6a5' : '#eee'}}
      >
        <h2>Card B (Index 1)</h2>
      </div>

      {/* CARD 2 */}
      <div 
        className={`step ${currentStepIndex === 2 ? 'active' : ''}`} 
        data-step="c"
        style={{ backgroundColor: currentStepIndex === 2 ? '#fdffb6' : '#eee'}}
      >
        <h2>Card C (Index 2)</h2>
      </div>

      <div className="footer">
        <h2>End</h2>
      </div>
    </div>
  )
}

export default App;
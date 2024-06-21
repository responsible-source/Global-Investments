
import React, { useEffect, useRef } from 'react';

const FinlogixWidget = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.finlogix.com/Widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Widget && containerRef.current) {
        // Check if the widget is not already initialized for this container
        if (!containerRef.current.dataset.widgetInitialized) {
          window.Widget.init({
            widgetId: "ec59581b-3e0b-4213-bb60-cc36458131d1",
            type: "BigChart",
            language: "en",
            symbolName: "Apple",
            hasSearchBar: false,
            hasSymbolName: false,
            hasSymbolChange: false,
            hasButton: false,
            chartShape: "candles",
            timePeriod: "D1",
            isAdaptive: true
          });

          // Mark the container as initialized to prevent multiple initializations
          containerRef.current.dataset.widgetInitialized = true;
        }
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="finlogix-container my-5" ref={containerRef}></div>;
};

export default FinlogixWidget;

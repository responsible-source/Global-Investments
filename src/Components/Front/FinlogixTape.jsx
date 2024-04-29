import React, { useEffect, useRef } from 'react';

const FinlogixTape = () => {
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
            type: "StripBar",
            language: "en",
            symbolPairs: [
              {
                symbolId: "19",
                symbolName: "EUR/USD",
              },
              {
                symbolId: "36",
                symbolName: "USD/JPY",
              },
              {
                symbolId: "20",
                symbolName: "GBP/AUD",
              },
              {
                symbolId: "44",
                symbolName: "XAU/USD",
              },
              {
                symbolId: "45",
                symbolName: "WTI",
              },
              {
                symbolId: "52",
                symbolName: "SP500",
              },
            ],
            isAdaptive: true,
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

  return <div className="finlogix-container" ref={containerRef}></div>;
};

export default FinlogixTape;

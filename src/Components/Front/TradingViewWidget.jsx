import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;

    const config = {
      symbol: 'FX:EURUSD',
      width: 350,
      height: 220,
      locale: 'en',
      dateRange: '12M',
      colorTheme: 'light',
      isTransparent: false,
      autosize: false,
      largeChartUrl: '',
    };

    script.innerHTML = `new TradingView.MiniSymbolOverview(${JSON.stringify(config)});`;

    document.getElementById('tradingview-widget-container__widget').appendChild(script);

    return () => {
      document.getElementById('tradingview-widget-container__widget').removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget-container__widget" className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;

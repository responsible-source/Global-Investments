import  { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.jivosite.com/widget/UDYWkuOJn4';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up by removing the script when the component unmounts
    };
  }, []);

  return null; // This component does not render anything visible
};

export default JivoChat;

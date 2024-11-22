import { useState, useEffect, useRef } from 'react';

const IntroductionPage = () => {
  const [setIsVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isCookieConsentVisible, setIsCookieConsentVisible] = useState(true);
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);

  // Check for existing cookie consent
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted' || consent === 'declined') {
      setIsCookieConsentVisible(false);
    }
  }, []);

  // Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Observer for paragraph visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsParagraphVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsCookieConsentVisible(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsCookieConsentVisible(false);
  };

  return (
    <div id="feature-section" className="relative mt-35 border-b border-neutral-800 min-h-[400px]" ref={sectionRef}>
      <div className="text-left px-5 sm:px-20 md:px-40">
        <h3 className="text-2xl sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide text-center">
          Purpose of This <span className="text-blue-900">Demo Site</span>
        </h3>

        <h3 className="lg:text-2xl mt-5 text-lg">Our Goal</h3>

        <p
          className={`mt-4 text-lg text-white ${isParagraphVisible ? 'opacity-100' : 'opacity-0'} text-justify`}
          ref={paragraphRef}
        >
          This demo site provides a basis for companies that utilize websites involving product marketing to get an in-depth technical analysis of user behavior on the website (hence the name). Our goal, based on this collected data, is to implement supervised machine learning to predict user behavior. Businesses that deal with millions of users will not only receive detailed feedback on what website components users like most, but also inform them of future client behavior, providing key insights on product success.
        </p>

        {/* Cookie Consent Pop-Up */}
        {isCookieConsentVisible && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
            <span>
              We use cookies to enhance your experience. By continuing to visit this site, you accept our use of cookies.
            </span>
            <div>
              <button onClick={handleAcceptCookies} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                Accept
              </button>
              <button onClick={handleDeclineCookies} className="bg-red-500 text-white px-3 py-1 rounded">
                Decline
              </button>
            </div>
          </div>
        )}
         {/* IP Address Warning */}
        <div className="mt-4 text-lg text-white text-center">
          <p className="mt-4">
            <strong>Warning:</strong> This website will collect your IP address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./index.css";

interface BackToTopProps {
  threshold?: number;
  smooth?: boolean;
  showProgress?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 300,
  smooth = true,
  showProgress = true,
  className = "",
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const calculateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight > 0) {
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  }, []);

  const checkVisibility = useCallback(() => {
    setIsVisible(window.scrollY > threshold);
    calculateScrollProgress();
  }, [threshold, calculateScrollProgress]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [checkVisibility]);

  const buttonClasses = `back-to-top ${isVisible ? "visible" : ""} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={scrollToTop}
      aria-label="Вернуться наверх"
      title="Вернуться наверх"
      style={style}
    >
      {showProgress && (
        <div className="back-to-top__progress-container">
          <svg className="back-to-top__progress-circle" viewBox="0 0 36 36">
            <path
              className="back-to-top__progress-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="back-to-top__progress-bar"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      )}
      <span className="back-to-top__arrow">↑</span>
    </button>
  );
};

export default BackToTop;

'use client';
import { useEffect, useState } from 'react';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // シミュレートされたローディング進行
    const intervals = [
      { progress: 20, delay: 100 },
      { progress: 40, delay: 200 },
      { progress: 60, delay: 300 },
      { progress: 80, delay: 400 },
      { progress: 100, delay: 500 },
    ];

    const simulateLoading = () => {
      let currentProgress = 0;
      const totalDelay = intervals.reduce(
        (sum, interval) => sum + interval.delay,
        0
      );
      const interval = setInterval(() => {
        currentProgress = Math.min(currentProgress + 1, 100);
        setLoadingProgress(currentProgress);
        if (currentProgress === 100) {
          clearInterval(interval);
          setIsLoading(false);
        }
      }, 10);

      setTimeout(() => {
        simulateLoading();
      }, totalDelay);
    };

    simulateLoading();
  }, []);

  return { isLoading, loadingProgress };
};

// components/SplashLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import Spinner from './Spinner'; // your custom spinner

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate delay or wait for something like data/auth/init
    const timeout = setTimeout(() => setIsLoading(false), 2500); // 1.5s loading
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
}
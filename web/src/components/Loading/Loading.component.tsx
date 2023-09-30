'use client';

import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@nextui-org/react';

export default function Loading() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 flex items-center h-screen justify-center">
      <CircularProgress
        aria-label="Loading..."
        size="lg"
        value={value}
        color="danger"
        showValueLabel={true}
      />
    </div>
  );
}

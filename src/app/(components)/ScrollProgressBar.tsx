'use client';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div
        className="h-full bg-accent transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label="Scroll progress"
      />
    </div>
  );
}

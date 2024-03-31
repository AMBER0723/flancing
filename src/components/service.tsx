'use client';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
export function Service() {
  const words = [
    {
      text: 'Build',
    },
    {
      text: 'awesome',
    },
    {
      text: 'apps',
    },
    {
      text: 'with',
    },
    {
      text: 'Flancing.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div id="service" className=" dark:border-white/[0.1] px-8 py-10 ">
      <div className="flex flex-col items-center justify-center mt-20  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
}

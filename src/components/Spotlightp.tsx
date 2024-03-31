import React from 'react';
import { Spotlight } from '../components/ui/Spotlight';

export function SpotlightPreview() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="homepage"
      className=" h-[50rem] w-full flex  flex-col items-start md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden "
    >
      <Spotlight className="-top-40 left-0 md:left-60 " fill="white" />
      <div className="flex flex-col items-start ">
        <h1 className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl !leading-none __className_b3f6a0">
          <span
            data-br=":r3:"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance',
            }}
          >
            Make your websites look <br />
            10x{' '}
            <div
              className=" z-10 inline-block relative"
              style={{ opacity: 1, transform: 'none' }}
            >
              better
            </div>
          </span>
        </h1>
        <h2 className="relative font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose __className_b15a0a">
          Empower Your Projects, Connect with Talented Freelancers!
        </h2>

        <div className="relative ">
          <div className="block sm:hidden absolute h-full w-20 bg-white dark:bg-black right-0 [mask-image:linear-gradient(to_left,white,transparent)] z-40"></div>
          <div
            className="flex justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar "
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="relative ">
              <div className="block sm:hidden absolute h-full w-20 bg-white dark:bg-black right-0 [mask-image:linear-gradient(to_left,white,transparent)] z-40"></div>
              <div
                className="flex justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar"
                style={{ scrollbarWidth: 'none' }}
              >
                <div className="flex items-center space-x-2 mr-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
                    >
                      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                      <path d="M15 12v-3"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                    Next.js
                  </span>
                </div>
                <div className="flex items-center space-x-2 mr-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
                    >
                      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                    React
                  </span>
                </div>
                <div className="flex items-center space-x-2 mr-4">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[0.5px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                    TailwindCSS
                  </span>
                </div>
                <div className="flex items-center space-x-2 mr-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
                    >
                      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                      <path d="M20 12l-8 8l-4 -4"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                    Framer Motion
                  </span>
                </div>
              </div>
              <div className="mr-60 mt-10">
                <button
                  onClick={scrollToContact}
                  className="shadow-[inset_0_0_0_2px_#616467] px-20 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:text-white dark:text-neutral-200 transition duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

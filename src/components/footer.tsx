import { SparklesPreview } from './sparklesFlancing';

const Footer = () => {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-10 bg-black/[0.96]">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
        <div>
          <SparklesPreview />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#"
            >
              About Us
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#"
            >
              Service
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#"
            >
              Contact
            </a>
            <div>
              A service by{' '}
              <a
                target="__blank"
                className="dark:text-sky-500 text-neutral-600 font-medium"
                href="#"
              >
                Flancing
              </a>
            </div>
            <div className="mt-2">
              Founder of Flancing{' '}
              <a
                className="dark:text-sky-500 font-medium text-neutral-600"
                target="__blank"
                href="https://twitter.com/ambersha1kh"
              >
                @ambersha1kh
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

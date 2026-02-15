import { Link } from 'react-scroll';
import logo from "../assets/logo.png";


const HeaderComponent = () => {
  return (
    <header
      className="z-[50] fixed top-0 w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]"
      style={{ transform: 'none' }}
    >
      <div className="container flex h-16 mx-auto pl-20 pr-20">
        <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
           <Link
            to="homepage"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500"
            href="/"
          >
            <div className="relative h-8 w-8">
  <img
    src={logo}
    alt="Flancing logo"
    className="h-full w-full object-contain"
  />
</div>
            <div className="flex flex-col">
              <h1 className="text-black dark:text-white">Flancing</h1>
            </div>
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block text-black dark:text-white"
            href="#"
          >
            About Us
          </Link>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={60}
            duration={500}
            className="transition-colors hover:text-foreground/80 text-foreground/60 text-black dark:text-white"
            href="#"
          >
            Services
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="transition-colors hover:text-foreground/80 text-foreground/60 text-black dark:text-white"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
          <a
            target="__blank"
            className="transition-colors hover:text-foreground/80 text-foreground/60 mr-3 text-sm font-medium"
            href="https://discord.gg/ftZbQvCdN7"
          >
            <span className="text-black dark:text-white">Community</span>
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
              className="h-4 w-4 dark:text-neutral-500 text-neutral-500 block sm:hidden"
            >
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
              <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
            </svg>
          </a>
          <a
            target="__blank"
            className="transition-colors hover:text-foreground/80 text-foreground/60 mr-3 text-sm font-medium"
            href=""
          ></a>
          <a target="__blank" href="https://twitter.com/ambersha1kh">
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
              className="h-4 w-4 dark:text-neutral-500 text-neutral-500"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

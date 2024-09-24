import Link from "next/link";

const navItems = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="container bg-blue-800 bg-opacity-30 rounded mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        href="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_408_139"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="180"
            height="180"
          >
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_408_139)">
            <circle
              cx="90"
              cy="90"
              r="87"
              fill="black"
              stroke="white"
              strokeWidth="6"
            />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#paint0_linear_408_139)"
            />
            <rect
              x="115"
              y="54"
              width="12"
              height="72"
              fill="url(#paint1_linear_408_139)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_408_139"
              x1="109"
              y1="116.5"
              x2="144.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_408_139"
              x1="121"
              y1="54"
              x2="120.799"
              y2="106.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <span className="ml-3 text-xl text-white">Next.js</span>
      </a>

      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="mr-5 hover:text-slate-300 cursor-pointer"
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/projects", label: "works" },
    { href: "/about-me", label: "about-me" },
    { href: "/contacts", label: "contacts" },
  ];

  return (
    <div>
      <header className="flex items-center justify-between lg:ml-[var(--space-margin)] lg:mr-[var(--space-margin)] ml-[var(--16-gap)] mr-[var(--16-gap)] padding-b-small padding-t-larged relative">
        <div className="icon-logo flex items-center gap--logo">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
              fill="white"
            />
          </svg>
          <span className="logo-name font-bold">MinhTam</span>
        </div>

        <ul className="lg:flex align-middle gap--larged hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-white"
                    : "text--cadet-blue-crayola"
                }`}
              >
                <span className="text--deep-mauve">#</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="icon-toogle lg:hidden block"
          onClick={() => setIsOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="5" width="24" height="2" fill="#D9D9D9" />
            <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
          </svg>
        </button>

        {/* Overlay Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-end h-full"
          >
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="w-96 bg-[var(--charleston-green)] h-full text-white flex flex-col pl-[var(--16-gap)] pr-[var(--16-gap)]"
            >
              {/* Button đóng menu */}
              <div className="flex justify-between items-center padding-b-small padding-t-larged">
                <div className="icon-logo flex items-center gap--logo">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                      fill="white"
                    />
                  </svg>
                  <span className="logo-name font-bold">MinhTam</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="1"
                      height="1"
                      transform="matrix(1 0 0 -1 11 12)"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="3"
                      y="19.9706"
                      width="24"
                      height="2"
                      transform="rotate(-45 3 19.9706)"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="4"
                      y="3"
                      width="24"
                      height="2"
                      transform="rotate(45 4 3)"
                      fill="#D9D9D9"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <ul className="space-y-4 margin-t-40">
                {navItems.map((item, index) => (
                  <li
                    key={item.href}
                    className={`${index != 0 ? "margin-t-larged" : ""} mb-0`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${
                        pathname === item.href
                          ? "text-white"
                          : "text--cadet-blue-crayola"
                      } block text-lg hover:text-blue-400 transition text-[32px]`}
                    >
                      <span className="text--deep-mauve">#</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center align-middle margin-t-107 gap--8">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 12C19.3975 12 10 21.1764 10 32.5059C10 41.5797 16.0112 49.2438 24.3587 51.9608C25.4087 52.1403 25.8025 51.5251 25.8025 50.9868C25.8025 50.4998 25.7763 48.8849 25.7763 47.1676C20.5 48.116 19.135 45.9116 18.715 44.7581C18.4788 44.1686 17.455 42.3487 16.5625 41.8617C15.8275 41.4772 14.7775 40.5288 16.5363 40.5032C18.19 40.4775 19.3713 41.9898 19.765 42.605C21.655 45.7065 24.6738 44.835 25.8813 44.2968C26.065 42.9639 26.6162 42.0667 27.22 41.5541C22.5475 41.0414 17.665 39.2728 17.665 31.4293C17.665 29.1993 18.4788 27.3538 19.8175 25.9184C19.6075 25.4057 18.8725 23.3039 20.0275 20.4843C20.0275 20.4843 21.7863 19.946 25.8025 22.5862C27.4825 22.1248 29.2675 21.8941 31.0525 21.8941C32.8375 21.8941 34.6225 22.1248 36.3025 22.5862C40.3188 19.9204 42.0775 20.4843 42.0775 20.4843C43.2325 23.3039 42.4975 25.4057 42.2875 25.9184C43.6263 27.3538 44.44 29.1737 44.44 31.4293C44.44 39.2984 39.5312 41.0414 34.8588 41.5541C35.62 42.1949 36.2763 43.4253 36.2763 45.3477C36.2763 48.0903 36.25 50.2947 36.25 50.9868C36.25 51.5251 36.6438 52.1659 37.6938 51.9608C41.8628 50.5869 45.4856 47.9707 48.0521 44.4807C50.6185 40.9906 51.9993 36.8025 52 32.5059C52 21.1764 42.6025 12 31 12Z"
                    fill="#ABB2BF"
                  />
                </svg>

                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33 8C20.304 8 10 18.304 10 31C10 43.696 20.304 54 33 54C45.673 54 56 43.696 56 31C56 18.304 45.673 8 33 8ZM48.1915 18.603C51.0229 22.0509 52.5902 26.3633 52.6334 30.8246C51.9836 30.701 45.4976 29.3785 38.9628 30.2008C38.8133 29.8787 38.6867 29.528 38.5372 29.1801C38.1376 28.2314 37.6891 27.2596 37.2406 26.3339C44.4741 23.3927 47.7689 19.1521 48.1944 18.6001L48.1915 18.603ZM33 11.3925C37.9881 11.3925 42.5536 13.2613 46.0238 16.3317C45.673 16.832 42.7031 20.7966 35.7197 23.4157C32.4998 17.5048 28.9347 12.6632 28.3856 11.9158C29.8982 11.5626 31.4468 11.387 33 11.3925ZM24.6424 13.2383C27.2749 16.8868 29.707 20.6759 31.9276 24.5888C22.7477 27.0325 14.6402 26.9836 13.7662 26.9836C14.3983 24.0101 15.7088 21.2227 17.5953 18.839C19.4819 16.4552 21.8936 14.5395 24.6424 13.2411V13.2383ZM13.3436 31.0288V30.425C14.1918 30.4538 23.7224 30.5774 33.5261 27.6334C34.0982 28.7288 34.6215 29.8529 35.1217 30.9741L34.3455 31.1984C24.2198 34.4673 18.832 43.397 18.3806 44.1474C15.1371 40.5467 13.3426 35.872 13.3436 31.0259V31.0288ZM33 50.6564C28.6345 50.6632 24.3928 49.2054 20.9537 46.5164C21.2987 45.7919 25.2921 38.1099 36.3666 34.243C36.4184 34.2171 36.4414 34.2171 36.4931 34.1941C38.3602 39.0137 39.7628 44.0005 40.682 49.0866C38.2555 50.1293 35.641 50.6635 33 50.6564ZM43.9538 47.2897C43.7525 46.0909 42.7031 40.3553 40.1358 33.2943C46.2969 32.3225 51.6846 33.9181 52.3574 34.1424C51.9383 36.795 50.9752 39.3323 49.5285 41.5949C48.0818 43.8574 46.1829 45.7963 43.9509 47.2897H43.9538Z"
                    fill="#ABB2BF"
                  />
                </svg>

                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 32C32 30.2319 32.7375 28.5362 34.0503 27.286C35.363 26.0357 37.1435 25.3333 39 25.3333C40.8565 25.3333 42.637 26.0357 43.9497 27.286C45.2625 28.5362 46 30.2319 46 32C46 33.7681 45.2625 35.4638 43.9497 36.714C42.637 37.9643 40.8565 38.6667 39 38.6667C37.1435 38.6667 35.363 37.9643 34.0503 36.714C32.7375 35.4638 32 33.7681 32 32ZM18 45.3333C18 43.5652 18.7375 41.8695 20.0503 40.6193C21.363 39.369 23.1435 38.6667 25 38.6667H32V45.3333C32 47.1014 31.2625 48.7971 29.9497 50.0474C28.637 51.2976 26.8565 52 25 52C23.1435 52 21.363 51.2976 20.0503 50.0474C18.7375 48.7971 18 47.1014 18 45.3333ZM32 12V25.3333H39C40.8565 25.3333 42.637 24.631 43.9497 23.3807C45.2625 22.1305 46 20.4348 46 18.6667C46 16.8986 45.2625 15.2029 43.9497 13.9526C42.637 12.7024 40.8565 12 39 12H32ZM18 18.6667C18 20.4348 18.7375 22.1305 20.0503 23.3807C21.363 24.631 23.1435 25.3333 25 25.3333H32V12H25C23.1435 12 21.363 12.7024 20.0503 13.9526C18.7375 15.2029 18 16.8986 18 18.6667ZM18 32C18 33.7681 18.7375 35.4638 20.0503 36.714C21.363 37.9643 23.1435 38.6667 25 38.6667H32V25.3333H25C23.1435 25.3333 21.363 26.0357 20.0503 27.286C18.7375 28.5362 18 30.2319 18 32Z"
                    fill="#ABB2BF"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>
      {/* Side Menu Drop */}
      <div className="absolute left-[17px] top-0 w-[32px] h-[311px] hidden lg:flex flex-col items-center gap-[8px]">
        <div className="bg-[var(--cadet-blue-crayola)] w-[1px] h-[191px]"></div>
        <ul className="logo-extent flex flex-col items-center gap--logo">
          <li className="p-[6px]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0C4.69875 0 0 4.58819 0 10.2529C0 14.7899 3.00562 18.6219 7.17937 19.9804C7.70437 20.0701 7.90125 19.7625 7.90125 19.4934C7.90125 19.2499 7.88813 18.4425 7.88813 17.5838C5.25 18.058 4.5675 16.9558 4.3575 16.3791C4.23937 16.0843 3.7275 15.1743 3.28125 14.9308C2.91375 14.7386 2.38875 14.2644 3.26813 14.2516C4.095 14.2388 4.68563 14.9949 4.8825 15.3025C5.8275 16.8533 7.33688 16.4175 7.94063 16.1484C8.0325 15.4819 8.30812 15.0334 8.61 14.777C6.27375 14.5207 3.8325 13.6364 3.8325 9.71466C3.8325 8.59965 4.23938 7.67689 4.90875 6.95918C4.80375 6.70286 4.43625 5.65193 5.01375 4.24215C5.01375 4.24215 5.89313 3.97301 7.90125 5.29308C8.74125 5.06239 9.63375 4.94704 10.5263 4.94704C11.4188 4.94704 12.3113 5.06239 13.1513 5.29308C15.1594 3.9602 16.0388 4.24215 16.0388 4.24215C16.6163 5.65193 16.2488 6.70286 16.1438 6.95918C16.8131 7.67689 17.22 8.58684 17.22 9.71466C17.22 13.6492 14.7656 14.5207 12.4294 14.777C12.81 15.0975 13.1381 15.7126 13.1381 16.6738C13.1381 18.0452 13.125 19.1474 13.125 19.4934C13.125 19.7625 13.3219 20.0829 13.8469 19.9804C15.9314 19.2935 17.7428 17.9854 19.026 16.2403C20.3092 14.4953 20.9996 12.4012 21 10.2529C21 4.58819 16.3013 0 10.5 0Z"
                fill="#ABB2BF"
              />
            </svg>
          </li>
          <li className="p-[6px]">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23C17.8365 23 23 17.848 23 11.5C23 5.152 17.8365 0 11.5 0ZM19.0958 5.3015C20.5115 7.02546 21.2951 9.18167 21.3167 11.4123C20.9918 11.3505 17.7488 10.6893 14.4814 11.1004C14.4066 10.9394 14.3434 10.764 14.2686 10.5901C14.0688 10.1157 13.8446 9.62981 13.6203 9.16694C17.2371 7.69637 18.8844 5.57606 19.0972 5.30006L19.0958 5.3015ZM11.5 1.69625C13.9941 1.69625 16.2768 2.63063 18.0119 4.16588C17.8365 4.416 16.3516 6.39831 12.8599 7.70787C11.2499 4.75237 9.46737 2.33162 9.19281 1.95787C9.94909 1.78129 10.7234 1.69349 11.5 1.69625V1.69625ZM7.32119 2.61913C8.63747 4.44338 9.85348 6.33793 10.9638 8.29437C6.37387 9.51625 2.32012 9.49181 1.88312 9.49181C2.19917 8.00504 2.85438 6.61137 3.79766 5.41949C4.74094 4.22761 5.9468 3.26973 7.32119 2.62056V2.61913ZM1.67181 11.5144V11.2125C2.09587 11.2269 6.86119 11.2887 11.7631 9.81669C12.0491 10.3644 12.3107 10.9264 12.5609 11.4871L12.1728 11.5992C7.10988 13.2336 4.416 17.6985 4.19031 18.0737C2.56856 16.2734 1.67131 13.936 1.67181 11.5129V11.5144ZM11.5 21.3282C9.31723 21.3316 7.19639 20.6027 5.47687 19.2582C5.64937 18.8959 7.64606 15.0549 13.1833 13.1215C13.2092 13.1086 13.2207 13.1086 13.2466 13.0971C14.1801 15.5068 14.8814 18.0002 15.341 20.5433C14.1277 21.0646 12.8205 21.3318 11.5 21.3282V21.3282ZM16.9769 19.6449C16.8763 19.0454 16.3516 16.1776 15.0679 12.6471C18.1484 12.1613 20.8423 12.9591 21.1787 13.0712C20.9692 14.3975 20.4876 15.6662 19.7643 16.7974C19.0409 17.9287 18.0914 18.8982 16.9754 19.6449H16.9769Z"
                fill="#ABB2BF"
              />
            </svg>
          </li>
          <li className="p-[6px]">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10C7 9.11594 7.36875 8.2681 8.02513 7.64298C8.6815 7.01786 9.57174 6.66667 10.5 6.66667C11.4283 6.66667 12.3185 7.01786 12.9749 7.64298C13.6313 8.2681 14 9.11594 14 10C14 10.8841 13.6313 11.7319 12.9749 12.357C12.3185 12.9821 11.4283 13.3333 10.5 13.3333C9.57174 13.3333 8.6815 12.9821 8.02513 12.357C7.36875 11.7319 7 10.8841 7 10ZM0 16.6667C0 15.7826 0.368749 14.9348 1.02513 14.3096C1.6815 13.6845 2.57174 13.3333 3.5 13.3333H7V16.6667C7 17.5507 6.63125 18.3986 5.97487 19.0237C5.3185 19.6488 4.42826 20 3.5 20C2.57174 20 1.6815 19.6488 1.02513 19.0237C0.368749 18.3986 0 17.5507 0 16.6667ZM7 0V6.66667H10.5C11.4283 6.66667 12.3185 6.31548 12.9749 5.69036C13.6313 5.06523 14 4.21739 14 3.33333C14 2.44928 13.6313 1.60143 12.9749 0.976311C12.3185 0.35119 11.4283 0 10.5 0L7 0ZM0 3.33333C0 4.21739 0.368749 5.06523 1.02513 5.69036C1.6815 6.31548 2.57174 6.66667 3.5 6.66667H7V0H3.5C2.57174 0 1.6815 0.35119 1.02513 0.976311C0.368749 1.60143 0 2.44928 0 3.33333V3.33333ZM0 10C0 10.8841 0.368749 11.7319 1.02513 12.357C1.6815 12.9821 2.57174 13.3333 3.5 13.3333H7V6.66667H3.5C2.57174 6.66667 1.6815 7.01786 1.02513 7.64298C0.368749 8.2681 0 9.11594 0 10V10Z"
                fill="#ABB2BF"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

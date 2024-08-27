"use client";

import { useEffect, useState } from "react";

import styles from "./Header.module.css";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="./#Home" className={styles.logo}>
          <svg viewBox="0 0 521 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M93.429 59.6904L61.9214 27.9725H88.9113L120.419 59.6904L59.9664 119.933L46.5246 106.491L93.429 59.6904ZM27.8965 59.1662L59.508 91.0638H31.0519L0 59.7942L60.9388 0L74.2287 13.2898L27.8965 59.1662Z" />
            <path d="M142.35 98.7614V13.36H179.54C187.262 13.36 194.079 14.9663 199.989 18.1791C205.901 21.3918 210.454 25.8994 213.646 31.7019C216.84 37.5044 218.438 44.086 218.438 51.4467V98.7614H196.806V50.4541C196.806 46.799 196.016 43.6209 194.436 40.9197C192.857 38.2185 190.743 36.1504 188.092 34.7154C185.442 33.2787 182.54 32.5317 179.388 32.4743H163.982V98.7614H142.35Z" />
            <path d="M230.267 56.1367C230.267 47.601 232.212 39.9296 236.102 33.1226C239.992 26.3156 245.367 20.9942 252.228 17.1586C259.089 13.3229 266.841 11.405 275.485 11.405C284.453 11.405 292.611 13.512 299.958 17.7258C307.305 21.9397 312.897 28.0714 316.732 36.1209C320.568 44.1704 321.892 53.5976 320.703 64.4024H252.957C253.606 67.8599 255.01 70.9392 257.171 73.6404C259.116 76.0175 261.628 78.0704 264.707 79.7991C267.787 81.5279 271.487 82.4463 275.809 82.5543C278.835 82.6624 281.806 82.2302 284.723 81.2578C287.641 80.2853 290.072 79.0968 292.017 77.6922H316.651C312.978 84.7153 307.602 90.3068 300.525 94.4666C293.448 98.6264 285.101 100.706 275.485 100.706C266.841 100.706 259.062 98.7885 252.147 94.9528C245.232 91.1171 239.857 85.8228 236.021 79.0698C232.185 72.3168 230.267 64.6725 230.267 56.1367ZM298.499 48.1952C297.743 44.7377 296.446 41.8204 294.61 39.4434C292.341 36.418 289.585 34.149 286.344 32.6364C283.103 31.1237 279.537 30.3674 275.647 30.3674C271.433 30.3674 267.706 31.2047 264.464 32.8795C261.223 34.5542 258.522 36.8502 256.361 39.7675C255.388 40.956 254.632 42.2256 254.092 43.5762C253.552 44.9268 253.119 46.4665 252.795 48.1952H298.499Z" />
            <path d="M329.71 56.1367C329.71 47.601 331.655 39.9296 335.544 33.1226C339.434 26.3156 344.809 20.9942 351.67 17.1586C358.531 13.3229 366.284 11.405 374.928 11.405C383.896 11.405 392.053 13.512 399.4 17.7258C406.748 21.9397 412.339 28.0714 416.175 36.1209C420.01 44.1704 421.334 53.5976 420.146 64.4024H352.4C353.048 67.8599 354.453 70.9392 356.614 73.6404C358.558 76.0175 361.071 78.0704 364.15 79.7991C367.229 81.5279 370.93 82.4463 375.252 82.5543C378.277 82.6624 381.248 82.2302 384.166 81.2578C387.083 80.2853 389.514 79.0968 391.459 77.6922H416.094C412.42 84.7153 407.045 90.3068 399.968 94.4666C392.891 98.6264 384.544 100.706 374.928 100.706C366.284 100.706 358.504 98.7885 351.589 94.9528C344.674 91.1171 339.299 85.8228 335.463 79.0698C331.628 72.3168 329.71 64.6725 329.71 56.1367ZM397.942 48.1952C397.185 44.7377 395.889 41.8204 394.052 39.4434C391.783 36.418 389.028 34.149 385.786 32.6364C382.545 31.1237 378.979 30.3674 375.09 30.3674C370.876 30.3674 367.148 31.2047 363.907 32.8795C360.665 34.5542 357.964 36.8502 355.803 39.7675C354.831 40.956 354.074 42.2256 353.534 43.5762C352.994 44.9268 352.562 46.4665 352.238 48.1952H397.942Z" />
            <path d="M474.694 100.706C466.05 100.706 458.25 98.7868 451.292 94.9477C444.337 91.1087 438.907 85.7949 435.004 79.0065C431.103 72.2181 429.152 64.5948 429.152 56.1367C429.152 47.601 431.097 39.9296 434.986 33.1226C438.876 26.3156 444.306 20.9942 451.275 17.1586C458.244 13.3229 466.05 11.405 474.694 11.405C483.338 11.405 491.155 13.3195 498.146 17.1484C505.137 20.9774 510.594 26.2987 514.515 33.1125C518.437 39.9262 520.398 47.601 520.398 56.1367C520.398 64.5965 518.426 72.2223 514.482 79.0141C510.539 85.8042 505.082 91.1171 498.113 94.9528C491.144 98.7885 483.338 100.706 474.694 100.706ZM474.694 80.4474C479.34 80.4474 483.549 79.3931 487.32 77.2845C491.092 75.1742 494.036 72.2738 496.153 68.5833C498.27 64.8911 499.329 60.738 499.329 56.1241C499.329 51.3784 498.276 47.1451 496.171 43.4242C494.067 39.7034 491.141 36.8131 487.391 34.7534C483.643 32.6938 479.402 31.6639 474.666 31.6639C469.931 31.6639 465.701 32.6921 461.976 34.7484C458.254 36.8046 455.364 39.6907 453.306 43.4065C451.249 47.1207 450.221 51.3657 450.221 56.1418C450.221 60.7845 451.248 64.9426 453.3 68.6162C455.353 72.2898 458.244 75.1801 461.971 77.287C465.701 79.394 469.941 80.4474 474.694 80.4474Z" />
          </svg>
        </a>
        <nav className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
          <a href="./#Home">Home</a>
          <a href="./#Serviços">Serviços</a>
          <a href="/Carreira">Carreira</a>
          <a href="./#Contato" className={styles.contact}>
            Contato
          </a>
        </nav>
        <div className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.lines}></span>
          <span className={styles.lines}></span>
          <span className={styles.lines}></span>
        </div>
      </div>
    </header>
  );
}

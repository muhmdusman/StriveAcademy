"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// 
const HeaderOne = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>
      <header className={`header ${scroll ? "fixed-header" : ""}`}>
        <div className='container container--xl'>
          <nav className='header-inner flex-between gap-8'>
            <div className='header-content-wrapper flex-align flex-grow-1'>
              {/* Logo Start */}
              <div className='logo'>
                <Link href='/' className='link flex-align gap-10'>
                  <img src='assets/images/logo/logo.png' alt='Strive Star Academy' />
                </Link>
              </div>
              {/* Logo End  */}
            </div>
            {/* Header Right start */}
            <div className='header-right flex-align'>
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                <ul className='nav-menu flex-align'>
                  {menuItems.map((item, index) => (
                    <li
                      key={`menu-item-${index}`}
                      className={`nav-menu__item ${
                        pathname === item.href ? "activePage" : ""
                      }`}
                    >
                      <Link href={item.href} className='nav-menu__link'>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Menu End  */}
              <button
                type='button'
                className='toggle-mobileMenu d-lg-none text-neutral-200 flex-center'
                onClick={toggleMenu}
              >
                <i className='ph ph-list' />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          isMenuActive ? "active" : ""
        }`}
      >
        <button type='button' className='close-button' onClick={closeMenu}>
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo flex-align gap-10'>
            <img src='assets/images/logo/logo.png' alt='Strive Star Academy' />
          </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {menuItems.map((item, index) => (
                <li
                  className={`nav-menu__item ${
                    pathname === item.href ? "activePage" : ""
                  }`}
                  key={index}
                >
                  <Link href={item.href} className='nav-menu__link'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;

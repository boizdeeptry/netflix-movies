import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/navbar/logo.png";
import avatar from "../../../assets/images/navbar/avatar.png";
import "./header.scss";

const headerNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Show",
    path: "/tv",
  },
  {
    name: "Video",
    path: "/video",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      }
      else{
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    };
  }, [])

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="header__wrap-nav">
          <Link to="/">
            <div className="header__logo">
              <img
                src={logo}
                alt="This is Logo !"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <span className="header__logo-text">Watchflix</span>
            </div>
          </Link>
          <ul className="header__nav">
            {headerNav.map((e, i) => (
              <li
                key={i}
                className={`header__nav-link ${active === i ? "active" : ""}`}
              >
                <Link to={e.path}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__profiles">
          <div className="header__btn-search">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.707 19.2932L16.168 14.7542C17.5149 13.0467 18.1585 10.889 17.967 8.72265C17.7756 6.55628 16.7636 4.54494 15.1381 3.10009C13.5126 1.65524 11.3965 0.886082 9.22261 0.949973C7.04874 1.01386 4.98143 1.90597 3.44361 3.44379C1.90579 4.98162 1.01368 7.04892 0.94979 9.22279C0.885899 11.3967 1.65505 13.5128 3.09991 15.1383C4.54476 16.7638 6.5561 17.7757 8.72247 17.9672C10.8888 18.1586 13.0465 17.5151 14.754 16.1682L19.293 20.7072L20.707 19.2932ZM9.50002 16.0002C8.21444 16.0002 6.95773 15.619 5.88881 14.9048C4.81989 14.1905 3.98677 13.1754 3.4948 11.9876C3.00283 10.7999 2.87411 9.49299 3.12491 8.23211C3.37571 6.97123 3.99478 5.81305 4.90382 4.904C5.81286 3.99496 6.97105 3.3759 8.23193 3.12509C9.4928 2.87429 10.7997 3.00301 11.9875 3.49498C13.1752 3.98695 14.1903 4.82007 14.9046 5.88899C15.6188 6.95791 16 8.21462 16 9.5002C15.9979 11.2235 15.3124 12.8755 14.0939 14.0941C12.8753 15.3126 11.2233 15.9981 9.50002 16.0002Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="header__profile">
            <img
              src={avatar}
              alt="This is Avatar !"
              className="header__profile-avatar"
              style={{ width: "40px", height: "40px", borderRadius: "100rem" }}
            />
            <span className="header__profile-name">Posty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

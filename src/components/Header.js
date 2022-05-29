import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand light">
          <Link to="/">さばかんブログ</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/">ホーム</Link>
            </li>
            <li className="nav-item">
              <Link to="/introduction">自己紹介</Link>
            </li>
            <li className="nav-item">
              <Link to="/inquiry">お問い合わせ</Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy-policy">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand light">
          さばかんブログ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                ホーム
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/introduction" className="nav-link">
                自己紹介
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inquiry" className="nav-link">
                お問い合わせ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy-policy" className="nav-link">
                プライバシーポリシー
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/post" className="nav-link">
                投稿
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

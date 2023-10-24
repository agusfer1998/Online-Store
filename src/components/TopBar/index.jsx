import React from 'react';
import { PropTypes } from 'prop-types';
// import cn from 'classnames';
import './index.scss';
// import { Link } from 'react-router-dom';

const TopBar = ({ routes }) => (
  <div className="topBar">
    <div className="topBar__logo">
      <img
        className="topBar__logo__image"
        src="https://uploads-ssl.webflow.com/645148ab8da9eb193e1acac5/64552f9a822de11ff5da8a89_Logotipo.svg"
        alt="Logo"
      />
      <h1 className="topBar__logo__title">movies</h1>
    </div>
    <div className="topBar__menu">
      <ul>
        {routes.map((thisRoute) => (
          <li className="topBar__links">
            <button
              className="topBar__button"
              onClick={() =>
                window.location.href === thisRoute.route
              }>
              {thisRoute.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TopBar.propTypes = { routes: PropTypes.array };

export default TopBar;

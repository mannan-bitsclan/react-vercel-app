import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrupsstyle.css'

const BreadCrumps = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className='bread-crups-nav-back'>
      <ul className='breadcrups-links-text'>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name}>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo}>{name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumps;

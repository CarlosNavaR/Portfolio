import React from 'react';
import Styles from './Navbar.module.scss';
import './nav.scss';
const Navbar = () => {
  return (
    <nav className={Styles.app__navbar}>
      <div className="prueba"></div>
      <div className={Styles.app__navbar_logo}>Carlos Nava</div>
      <ul className={Styles.app__navbar_links}>
        {['Inicio', 'Proyectos', 'Contacto'].map((item) => (
          <li
            className={`${Styles.app__flex} ${Styles.p_text}`}
            key={`link-${item}`}
          >
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

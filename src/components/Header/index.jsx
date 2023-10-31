import './index.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuStyles = {
    right: menuOpen ? 0 : '-100%',
  };

  return (
    <section className='headerContainer'>
      <div className='h-container'>
        <div>
          <img src="./logo.png" alt="logo" width={100} />
        </div>
        <div className='h-menu'>
          <OutsideClickHandler onOutsideClick={closeMenu}>
            <nav style={menuStyles}>
              <a href="">Residencies</a>
              <a href="">Residencies</a>
              <a href="">Residencies</a>
              <a href="">Residencies</a>
              <button className='button'>
                <a href="">Contact</a>
              </button>
            </nav>
          </OutsideClickHandler>
        </div>
      </div>
      <div className='mobile-icon' onClick={toggleMenu}>
        <BiMenuAltRight size={30} />
      </div>
    </section>
  );
}

import './css/MainMenu.css';

import React from 'react';
import { Link } from 'react-router-dom';


const MainMenu = ({ categories, updateDroppedMenuVisible, itemMenu }) => {
  return(
    <nav className="main-menu">
      <div className="wrapper">
        <ul className="main-menu__items">

          <li className="main-menu__item main-menu__item_sales"
              key={0} 
              onMouseEnter={() => updateDroppedMenuVisible(0, true)}
              onClick={() => updateDroppedMenuVisible(-1, false)}>
            <Link 
              to={{pathname: '/catalogue', search: `?discounted=true`}} 
              className={`${itemMenu === 0 ? 'main-menu__item_active' : ''}`} 
            >
              Акции
            </Link>
          </li>

          {categories.map((el, index) => 
            <li className="main-menu__item main-menu__item_sales" 
                key={index + 1} 
                onMouseEnter={() => updateDroppedMenuVisible(index + 1, true)}
                onClick={() => updateDroppedMenuVisible(-1, false)}>
              <Link 
                to={{pathname: '/catalogue', search: `?categoryId=${el.id}`}} 
                className={`${itemMenu === index + 1 ? 'main-menu__item_active' : ''}`} 
              >
                {el.title}
              </Link>
            </li>                
          )}

        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;


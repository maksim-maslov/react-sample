import './css/HiddenPanel.css';

import Basket from './Basket';

import React from 'react';
import { Link } from 'react-router-dom';


function HiddenPanel({ basketVisibility, profileVisibility, productsInBasket, updateBasket }) {
  return (
    <div className={`header-main__hidden-panel ${profileVisibility || basketVisibility ? 'hidden-panel header-main__hidden-panel_visible' : ''}`}>
      <div className="wrapper">

        <div className={`hidden-panel__profile ${profileVisibility ? 'hidden-panel__profile_visible' : ''}`}>
          <a>Личный кабинет</a>
          <Link to="/favorite">
            <i className="fa fa-heart-o" aria-hidden="true"></i>Избранное
          </Link>
        </div>
        
        <Basket 
          basketVisibility={basketVisibility} 
          productsInBasket={productsInBasket} 
          updateBasket={updateBasket} 
        />

      </div>
    </div>
  );
}

export default HiddenPanel;
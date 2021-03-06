import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCog, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

const Header = () => {
  return (
    <div className="header">
      <div className="header--left">
        <FontAwesomeIcon className="header--left__content bars" icon={faBars} />
        <img alt="Federato Header" src="https://static1.squarespace.com/static/5f6cb97c8e8440301b4373fa/t/5f6cba62cf0e041b8bd893e9/1600960959293/?format=1500w" className="header--left__content"/>
      </div>
      <div className="header--right">
        <FontAwesomeIcon className="header--right__content bell" icon={faBell} />
        <FontAwesomeIcon className="header--right__content cog" icon={faCog} />
        <FontAwesomeIcon className="header--right__content circle-question" icon={faQuestionCircle} />
        <FontAwesomeIcon className="header--right__content user" icon={faUser} />
        <AppsOutlinedIcon className="header--right__content appsOutline" />
      </div>
    </div>
  )
}

export default Header;
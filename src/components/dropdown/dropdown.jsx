import React from 'react'
import "./dropdown.scss"

const dropdown = () => {
  return (
    <div className='dropdown'>
      <div className="left">
        <h1 className="title">Solutions</h1>
        <hr />
      <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Azure</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>AWS</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Cloud Migration</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Cyber Security</span>
    </a>
        
      </div>
      <div className="right">
      <h1 className="title">Devlopment</h1>
      <hr />
      <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Mobile App</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Web App</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>Custom Software</span>
    </a>
    <a href="#" className="menu-item">
        <span className='drop-icon'>
            <ion-icon name="chatbubble-outline"></ion-icon>
        </span>
        <span className='drop-text'>UI/UX Design</span>
    </a>
      </div>
    </div>
  )
}

export default dropdown

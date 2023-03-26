import React, { useEffect } from 'react'
import "./navbar.scss"
import Dropdown from '../dropdown/dropdown';


const Mynavbar = () => {
        useEffect(() => {
          const list = document.querySelectorAll(".list");
      
          function activelink() {
            list.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
          }
      
          list.forEach((item) => item.addEventListener("click", activelink));
      
          // Remove event listener on component unmount
          return () => {
            list.forEach((item) => item.removeEventListener("click", activelink));
          };
        }, []);
  return (
    <div className="navbar">
        <ul>
            <li className='list active'>
                <a href="#">
                    <span className='icon'>
                    <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span className='text'>Home</span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'>
                    <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span className='text'>About<br /> <ion-icon name="chevron-down-outline"></ion-icon></span>
                </a>
                <Dropdown />
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                    <span className='text'>Messages</span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'>
                    <ion-icon name="camera-outline"></ion-icon>
                    </span>
                    <span className='text'>Photos</span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'>
                    <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span className='text'>Settings</span>
                </a>
            </li>
            <div className="indicator">

            </div>
        </ul>
      </div>
  )
}

export default Mynavbar

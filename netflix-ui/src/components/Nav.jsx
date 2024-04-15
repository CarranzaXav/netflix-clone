import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link, useNavigate}  from 'react-router-dom';
import {FaPowerOff, FaSearch} from "react-icons/fa"
import { signOut, onAuthStateChanged } from 'firebase/auth';

//  ------Images ------ //
import logo from "../assets/LogoNetflix.png";
import avatar from "../assets/NetflixAvatar.png";
import { firebaseAuth } from '../utils/firebase-config';

 export default function Nav() {

  // -----Routes-----//
const links = [
  { name: "Home", link:"/"},
  { name: "TV Shows", link:"/tv"},
  { name: "Movies", link:"/movies"},
  { name: "My Favs", link:"/favorites"},

];

const navigate = useNavigate();

  //------Logout---- //
  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(!currentUser) navigate("/login");
});

const [showSearch, setShowSearch] = useState(false);
const [inputHover, setInputHover] = useState(false);

 const [show, handleShow] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else handleShow(false);
    });
    return () => {
    window.removeEventListener("scroll",null);
        };
    },[]);

  return (
    <Container>
    <nav className={`nav ${show && "nav__black"} flex`}>
    <div className='left flex a-center'>
        <div className=" flex a-center j-center">
          <img className='nav__logo' src={logo} alt="Netflix Logo" />
         </div>
        <ul className="links flex">
          {
          links.map(({name,link}) => {
            return (
              <li key={name} >
                <Link to={link}>{name}</Link>
              </li>
            )
          })}
          <div className={`search ${showSearch ? "show-search":"" }`}> 
          <button onFocus={()=>setShowSearch(true)} onBlur={
            ()=>{
                if(!inputHover) setShowSearch(false);
            }
          } ><FaSearch/></button>
          <input type="text" placeholder='Search'
          onMouseEnter={()=>setInputHover(true)}
          onMouseLeave={()=>setInputHover(false)}
          onBlur={()=>{
            setShowSearch(false)
            setInputHover(false)
          }}
           />
          </div>
        </ul>
    </div>
          <div className='right flex a-center dropdown'>
        <img className='nav__avatar ' src={avatar} alt="Netflix Logo" />
        <div className='dropdownLogout' >
          <button onClick={()=>signOut(firebaseAuth)}>
            <FaPowerOff/>
          </button>
          </div>
        </div>
    </nav>
    </Container>
  );
}

const Container = styled.div`
.nav {
  top: 0;
  width: 100%;
  height: 6.5rem;
  z-index: 2;
  padding: 0 4rem;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  transition: 0.3s ease-in-out;
  .left{
    gap: 2rem;
    img{
      height: 3rem;
    }
    }
  .links{
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color:white;
        text-decoration: none;
      }
    }
  }
  .search{
display: flex;
gap: 0.4rem;
align-items: center;
justify-content: center;
padding: 0.2rem;
padding-left: 0.5;
button{
  background-color:transparent;
  border:none;
  &:focus{
    outline: none;
  }
  svg{
    color: white;
    font-size: 1.2rem;
  }
}
  } 
  input{
    width:0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    border: none;
    color: white;
    &:focus{
      outline: none;
    }
  }
  .show-search{
    border: 1px solid white;
    background-color: rgba(0,0,0,0.6);
    input{
      width: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0.3rem;
    }
  }
  .right{
    position: relative;
    right:30px;
    gap: 1rem;
      button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus{
      outline: none;
    }
    svg{
      color:#f34242;
      font-size: 1.2rem;
    }
  }
  }
}
.nav__black {
  background-image:linear-gradient(rgba(0,0,0,1) 70%,rgba(0,0,0,0)100%);
  }

.nav__avatar {
  gap: 1rem;
  right: 20px;
  width: 3rem;
  object-fit: contain;
}

.dropdown{
position: relative;
display:inline-block;
}

.dropdownLogout{
  display: none;
  position: absolute;
  background-color: rgba(0,0,0,0.6);
  min-width:5vw;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  padding: 10px;
  right:0;
}

.dropdownLogout img:hover{
background-color: #ddd;
}
.dropdown:hover .dropdownLogout {
  width:2vw;
  display:flex;
  border-radius:15px;
  flex-direction: row-reverse;
  padding-top:20px;
  right:0;
  }

`;

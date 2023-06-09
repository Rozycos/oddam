import React from "react";
//import React, { useContext }  from "react";
//import { Link } from "react-router-dom";
import Navigation from "./Navigation";
//import { AppContext } from "../../../../context/UserProvider";
//import { auth } from "../../../../firebase_setup/firebase";
import LoginNavElements from "./LoginNavElements";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

//const handleSignOut = () => auth.signOut();

const LoginNavigation = () =>{
    //const {currentUser} = useContext(AppContext);  

    return (
        <>
            <nav className="nav">
                {/* <ul className="nav__login">
                {currentUser === null ? (
                <>
                    <li className="nav__element"></li>
                    <li>
                        <Link className="nav__login-link" to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link className="nav__login-link nav__login-signin" to="/rejestracja">Załóż konto</Link>
                    </li>
                </>
                ) : (
                        <>
                            <li className="nav__login logged">{"Cześć " + currentUser.email + "!"}</li>
                            <li>
                                <Link className="nav__login logged" to="/oddaj-rzeczy">Oddaj rzeczy</Link>
                            </li>
                            <li>
                                <Link className="nav__login-link nav__login-signin" to="/wylogowano" onClick={handleSignOut}>Wyloguj</Link>
                            </li>
                        </>
                    )}
                </ul> */}
                <LoginNavElements/>
                <Navigation/> 
            </nav>
        </>
    )
}

export default LoginNavigation;
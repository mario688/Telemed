import React from "react";
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import 'firebase/auth';
import firebase from "firebase";
import Logout from "./Logout";

const auth = firebase.auth();

export default function NaviBar() {
    const [user] = useAuthState(auth);
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">TeleMed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to="/"> <a className="nav-link">Główna strona <span
                            className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/doctors"><a className="nav-link">Nasi Lekarze</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"><a className="nav-link">Kontakt</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about"><a className="nav-link">O nas</a></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {!user ? <Link to="/login">
                        <button className="btn-primary">Zaloguj</button>
                    </Link> : <Logout/>}
                </form>
            </div>
        </nav>
    )
}
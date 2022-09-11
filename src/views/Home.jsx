import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import '../styles/home.css'

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome</h1>
            <Button variant="secondary">
                <Link className="link" to="/login">Login</Link>
            </Button>{' '}
            <Button variant="primary">
                <Link className="link" to="/register">Register</Link>
            </Button>{' '}
        </div>
    )
}



export default Home
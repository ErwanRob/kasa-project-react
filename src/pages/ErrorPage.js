import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
    return (
        <div className='error-page'>
            <Header />
            <div className='error-page-container'>
                <h1 className='error-page__title'>404</h1>
                <p className='error-page__byline'>Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className='error-page__backHome-link'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />

        </div>
    );
}

export default NotFound;
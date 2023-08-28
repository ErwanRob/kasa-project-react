import React from 'react';
import '../style/css/style.css';
import Header from '../components/Header'
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import Footer from '../components/Footer';
import bannerImg from "../assets/imgOri1.jpg";
import apartmentsData from "../datas/appartList.json";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner image={bannerImg} text='Chez vous, partout et ailleurs' />
            <CardList apartments={apartmentsData} />
            <Footer />
        </div>
    );
};

export default Home;  

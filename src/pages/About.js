import React from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ListInfoBox from '../components/ListInfoBox'
import bannerImgAbout from "../assets/imgOri2.jpg";
import ValueList from "../datas/ValueList.json";

/* les infobox ne seront pas ici ! Mais dans list infobox*/
function About() {
    return (
        <div className='about'>
            <Header />
            <Banner image={bannerImgAbout} text="" />
            <ListInfoBox listInfoBox={ValueList} />
            <Footer />
        </div>
    );
};

export default About;
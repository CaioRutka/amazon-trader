import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import AboutContent from '../components/AboutUs/AboutContent';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent 
                    pageTitle="Sobre" 
                    pageCaption="Amazon Trader FX" 
                />

                <AboutContent />

                <Footer />
            </>
        );
    }
}

export default AboutUs;
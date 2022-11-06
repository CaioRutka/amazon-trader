import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import PaymentExperience from '../components/HomeFive/PaymentExperience';
import Footer from '../components/Layouts/Footer';
 
class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <MainBanner />

                <PaymentExperience />
                
                <Footer />
            </>
        );
    }
}

export default Index;
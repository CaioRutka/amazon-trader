import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ContactContent from '../components/Contact/ContactContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent 
                    pageTitle="Contato" 
                    pageCaption="Entre em contato que estamos prontos para tirar todas as suas duvidas." 
                />

                <ContactContent />

                <AccountCreateArea />

                <Footer />
            </>
        );
    }
}

export default Contact;
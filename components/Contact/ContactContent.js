import React, { Component } from 'react';
import ContactInfoContent from './ContactInfoContent';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <>
                <div className="contact-area ptb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Deixe-nos uma mensagem</h2>
                            <div className="bar"></div>
                            <p>Entre em contato para saber mais, tirar duvidas, um(a) de nossos atendentes ficará muito feliz de lhe atender</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <ContactInfoContent />
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </div>
            </>
        );
    }
}

export default ContactContent;
import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Endereço</span>
                        São Paulo
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span> 
                        <a href="mailto:infohaiper@haiper.com">contact@amazontraderfx.com</a>  
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>Phone</span> 
                        <a href="tel:+(321)984754">+55 (41) 9999 9999</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;
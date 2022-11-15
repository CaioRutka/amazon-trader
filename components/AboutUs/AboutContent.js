import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class AboutContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="about-area ptb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>Como tudo começou</span>
                                <h2>Rentabilidade, rápida e fácil.</h2> 
                                <p> Venha fazer parte desta plataforma de investimentos, 
                                    onde o seu lucro é diario e creditado de forma 100% automatica,
                                    cinco dias por semana, direto em sua wallet cadastrada. 
                                </p>
                                </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img1.jpg" alt="image" />

                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn"
                                > 
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='szuchBiLrEM' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </div>
            </div>
        );
    }
}

export default AboutContent;
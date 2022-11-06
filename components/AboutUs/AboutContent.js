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
                                <p>Imagine um dia no qual você tenha uma lista de 15 coisas para executar durante as próximas 12 horas. Por qual delas você começa? Como você vai avançando na execução das tarefas no decorrer do dia? O que queremos mostrar para você é que investir melhor pode estar no topo das tarefas mais fáceis da sua rotina. </p>
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
import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import AboutContent from '../components/AboutUs/AboutContent';
import Footer from '../components/Layouts/Footer';

class HowTo extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent 
                    pageTitle="Como Investir ?" 
                    pageCaption="Siga o passo a passo abaixo e começe a investir conosco hoje!" 
                />

                <div className="contact-area ptb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Siga os passos a seguir.</h2>
                            <div className="bar"></div>
                            <p> Saiba como investir com a AmazonTrader FX</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <h2>1 - Crie uma conta na Binance.</h2>
                                <div className="p-4">
                                    <h3>1.1 - Entre no site da Binance e clique em Registrar.</h3>
                                    <img src="/images/how-to/register-binance.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.2 - Realize o registro como quiser.</h3>
                                    <img src="/images/how-to/realize_registo.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.3 - Faça um depósito na Binance como preferir, nós escolheremos deposito bancario.</h3>
                                    <img src="/images/how-to/deposit.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.4 - Escolha qual a moeda a ser depositada e o metodo (PIX ou TED).</h3>
                                    <img src="/images/how-to/pix.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.5 - Escolha a quantia a ser depositada e clique em confirmar.</h3>
                                    <img src="/images/how-to/quantia.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.6 - Realize o Pix escaneando a chave criada e em poucos minutos o valor em BRL estará disponivel na sua conta da Binance.</h3>                                    
                                    <img src="/images/how-to/chave-pix.png" alt="image" />
                                    <img src="/images/how-to/carteira-visaogeral.png" alt="image" />
                                    <img src="/images/how-to/valor-na-conta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.7 - Agora iremos converter o valor de BRL para AVAX e USDT. </h3>
                                    <h3>AVAX será usado para pagar algumas taxas de transferencias, um total de U$ 1,00 é suficinete. </h3>
                                    <h3>USDT é uma stablecoin que será utilizada para investir. </h3>
                                    <img src="/images/how-to/binance-convert.png" alt="image" />
                                    <h3></h3>
                                    <img src="/images/how-to/converta-usdt-em-avax.png" alt="image" />
                                    <img src="/images/how-to/confirme-avax.png" alt="image" />
                                    <img src="/images/how-to/converta-brl-em-usdt.png" alt="image" />
                                    <img src="/images/how-to/confirme-a-trans.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>1.8 - Tudo pronto, você já tem AVAX e USDT na sua conta da Binance.</h3>
                                    <img src="/images/how-to/quantia.png" alt="image" />
                                </div>

                            <h2>2 - Crie uma carteira MetaMask.</h2>
                                <div className="p-4">
                                    <h3>2.1 - Va ao site da metamask e instale ela como extensão do seu navegador.</h3>
                                    <img src="/images/how-to/download-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.2 - Instale para seu navegador, usaremos o chrome para exemplificar.</h3>
                                    <img src="/images/how-to/install-for-chorme.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.3 - Instale a extensão.</h3>
                                    <img src="/images/how-to/instale-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.4 - Fixe ela no seu navegador para facilitar o acesso.</h3>
                                    <img src="/images/how-to/pin-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.5 - Inicie a configuracao da sua conta.</h3>
                                    <img src="/images/how-to/bemvindo-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.6 - Concorde com o termos.</h3>
                                    <img src="/images/how-to/concordo-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.7 - Se tiver uma conta da TrustWallet ou outra, apenas importe ela aqui, se nao tiver nenhuma vamos criar uma nova.</h3>
                                    <img src="/images/how-to/crie-nova-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.8 - Escolha uma senha para acessar a metamask localmente.</h3>
                                    <img src="/images/how-to/senha-meta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.9 - Anote sua chave secreta em algum lugar seguro, é o unico meio de recurepara sua conta caso perca acesso.</h3>
                                    <img src="/images/how-to/salve-chave-secreta.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>2.10 - Pronto, sua metamask foi criada com sucesso.</h3>
                                    <img src="/images/how-to/metamask-ativa.png" alt="image" />
                                </div>

                            <h2>3 - Conecte sua carteira metamask ao nosso sistema para que ela seja configurada totalmente.</h2>
                                <div className="p-4">
                                    <img src="/images/how-to/connect.png" alt="image" />
                                    <h3></h3>
                                    <img src="/images/how-to/seguinte.png" alt="image" />
                                    <h3></h3>
                                    <img src="/images/how-to/approve.png" alt="image" />
                                    <h3></h3>
                                    <img src="/images/how-to/trocar.png" alt="image" />
                                    <h3></h3>
                                    <img src="/images/how-to/correto.png" alt="image" />
                                </div>                                
                                
                            <h2>4 - Transfira AVAX e USDT da Binance para sua carteira Metamask.</h2>
                                <div className="p-4">
                                    <h3>4.1 - Agora vamos sacar os valores disponiveis de AVAX e USDT para sua carteira metamask.</h3>
                                    <img src="/images/how-to/sacar-avax.png" alt="image" />
                                    <img src="/images/how-to/sacar-usdt.png" alt="image" />
                                </div>
                                <div className="p-4">
                                    <h3>4.2 - Envie os valores em AVAX e USDT para sua carteira da metamask.</h3>
                                </div>
                                <div className="p-4">
                                    <h3>4.3 - Certifique-se de mandar os valores pela rede da AVAX.</h3>
                                    <img src="/images/how-to/Inkedadicionar_wallet.png" alt="image" />                                    
                                </div>

                        </div>
                    </div>
                
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </div>  

                <Footer />
            </>
        );
    }
}

export default HowTo;
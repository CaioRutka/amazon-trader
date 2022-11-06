import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<>
			<div className="banner-wrapper">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-content">
                                <h1>Rentabilidade diária, automática e garantida.</h1>
                                <p> Tenha lucro diariamente com a Amazon Trader FX.</p>

                                <Link href="/contact">
                                    <a className="btn btn-primary">Comece Agora</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-image">
                                <img 
                                    src="/images/banner-img11.png" 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default MainBanner;
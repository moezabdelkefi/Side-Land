import React from 'react';

import Header from './../common/Header';
import Banner from '../components/Banner';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import PageTitle from '../common/PageTitle';

const HomeFour = () => {
    return (
        <>
        <PageTitle title="CityScape - Home Four" />

            <OffCanvas/>
            <MobileMenu/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossOrigin="anonymous"></script>
            <main className="body-bg">

                {/* Header */}
                <Header 
                    headerClass="bg-white" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass=""
                    btnClass="btn btn-main  d-lg-block d-none"
                    btnLink="/ListProperty"
                    btnText="List Your Property"
                    spanClass="icon-right" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* Banner */}
                <Banner/>

         
                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeFour;
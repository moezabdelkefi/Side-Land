import React from 'react';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import CheckoutSection from '../components/CheckoutSection';
import PageTitle from '../common/PageTitle';

const Checkout = () => {
    return (
        <>      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossorigin="anonymous"></script>
        <PageTitle title="CityScape - Checkout" />

            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="List Your Property"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Checkout"
                pageName="Checkout"
            />
            
            {/* Checkout Section */}
            <CheckoutSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* FooterTwo */}
            <FooterTwo/>
        </>
    );
};

export default Checkout;
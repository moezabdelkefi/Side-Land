import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import LoginRegister from '../components/LoginRegister';
import PageTitle from '../common/PageTitle';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            toast.info('You are already logged in.', {
                theme: 'colored',
                autoClose: 5000,
            });
            setTimeout(() => {
                navigate('/account');
            }, 5000);
        }
    }, [navigate]);

    return (
        <>
        <PageTitle title="Grow And More - Login" />

        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Login"
                pageName="Login"
            />

            {/* Login Section */}
            <LoginRegister
                titleText="Sign in"
                firstNameCol="col-sm-6 col-xs-6" 
                showFirstName={false}
                lastNameCol="col-sm-6 col-xs-6" 
                showLastName={false}
                passwordCol="col-lg-12" 
                showConfirm={false}
                btnText="Login"
                showForgotRemember={true}
                showTermCondition={false}
                haveAccountText = "Don't Have An Account? "
                haveAccountLinkText = "Register"
                haveAccountLink = "/register"
            />

            {/* FooterTwo */}
            <FooterTwo/>

        </main>   
        <ToastContainer />
        </>
    );
};

export default Login;
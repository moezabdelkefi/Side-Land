import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ValidationForm from './ValidationForm';

const FaqContactUs = () => {
    return (
        <>
            <section className="contact-us">
                <div className="container container-two">
                    <div className="contact-form bg-gray-100 shadow-none">  

                        <SectionHeading
                            headingClass=""  
                            subtitle="Ready to Get Started?"
                            subtitleClass="bg-gray-100" 
                            title="List Your Property with Grow and More" 
                            renderDesc={true}
                            desc={<span style={{ color: 'black', fontSize: '1.2em' }}>We handle every step of your property journey, from expert valuation and marketing to seamless viewings and offer management, ensuring maximum value and a stress-free experience.</span>}
                            renderButton={false}
                            buttonClass="btn-main"
                            buttonText="View More"
                        />
                        <div className="contact-form__form">
                            <ValidationForm
                                colClass="col-sm-6 col-xs-6" 
                                inputClass="common-input"
                                iconSpanClass="d-none text-gradient"
                                renderLabel={false}
                                labelClass="text-white fw-normal"
                            />
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default FaqContactUs;
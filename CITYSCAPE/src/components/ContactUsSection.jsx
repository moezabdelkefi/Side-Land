import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ContactUsSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      user_subject: formData.get("user_subject"),
      message: formData.get("message"),
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/email/send-email`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      form.current.reset();
      toast.success("Congratulations! You Have Submitted Successfully.", {
        theme: "colored",
      });
    } catch (error) {
      toast.error("Something went wrong! Your message didn't send.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="contact-us-section padding-b-120">
        <div className="container container-two">
          <div className="contact-form bg-white">
            <div className="section-heading">
              <span className="section-heading__subtitle bg-gray-100">
                <span className="text-gradient fw-semibold">Contact us</span>
              </span>
              <h2 className="section-heading__title">
                Do you have any question?{" "}
              </h2>
              <p className="section-heading__desc">
                Get in touch with us today! We're here to help with all your
                real estate needs and provide expert guidance every step of the
                way.
              </p>
            </div>
            <div className="contact-form__form">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form__form"
              >
                <div className="row gy-4">
                  <div className="col-sm-6 col-xs-6">
                    <input
                      type="text"
                      className="common-input"
                      name="user_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <input
                      type="email"
                      className="common-input"
                      name="user_email"
                      placeholder="Your E-mail"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <input
                      type="tel"
                      className="common-input"
                      name="user_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <input
                      type="text"
                      className="common-input"
                      name="user_subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="common-input"
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-main w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;

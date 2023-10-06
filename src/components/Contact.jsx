import { useGlobalContext } from "../hooks/useGlobalContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BiLoaderAlt, BiBadgeCheck } from "react-icons/bi";

import ReCAPTCHA from "react-google-recaptcha";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_API;
const RECAPTCHA_API_KEY = import.meta.env.VITE_RECAPTCHA_API_KEY;

const Contact = () => {
  const { handleShowThankyou, showLoading, handleShowLoading, handleHideLoading, isThankyouVisible } = useGlobalContext();
  const [verified, setVerified] = useState(false);

  const form = useRef();
  const recaptchaRef = useRef();

  const schema = yup.object().shape({
    user_name: yup
      .string()
      .matches(/^[a-zA-Z\s_]*$/, "Invalid Name")
      .required("This field is required"),
    user_email: yup.string().email("Invalid email address").required("This field is required"),
    message: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!verified) {
      return alert("Verify Recaptcha to submit");
    }
    if (data) {
      handleShowLoading();
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          () => {
            handleShowThankyou();
            recaptchaRef.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          handleHideLoading();
          reset();
        });
    }
  };

  useEffect(() => {
    if (isThankyouVisible) {
      const timeoutId = setTimeout(() => {
        handleShowThankyou(); // Hide the "Thank you" message after 3 seconds
      }, 5000);

      return () => {
        clearTimeout(timeoutId); // Clear the timer if the component unmounts
      };
    }
  }, [isThankyouVisible, handleShowThankyou]);

  const onChange = () => {
    setVerified(true);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="header-line"></div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field name-field">
          <div>
            <label htmlFor="name">name</label>
            <p className="error-field">{errors.user_name?.message}</p>
          </div>
          <input className={`${errors.user_name ? "error" : ""}`} type="text" id="name" name="user_name" placeholder="John Doe" {...register("user_name")} />
        </div>

        <div className="input-field email-field">
          <div>
            <label htmlFor="email">email address</label>
            <p className="error-field">{errors.user_email?.message}</p>
          </div>
          <input className={`${errors.user_email ? "error" : ""}`} type="email" id="email" name="user_email" placeholder="example@example.com" {...register("user_email")} />
        </div>

        <div className="input-field message-field">
          <div>
            <label htmlFor="email-message">your message</label>
            <p className="error-field">{errors.message?.message}</p>
          </div>

          <textarea className={`${errors.message ? "error" : ""}`} id="email-message" name="message" placeholder="Enter your message here" {...register("message")}></textarea>
        </div>

        <ReCAPTCHA className="recaptcha-field" sitekey={RECAPTCHA_API_KEY} onChange={onChange} ref={recaptchaRef} />

        <button type="submit">Submit {showLoading && <BiLoaderAlt />}</button>
        {isThankyouVisible && (
          <div className="thank-you">
            <BiBadgeCheck />
            <p>Thank you for contacting me. I will response as long as possible</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;

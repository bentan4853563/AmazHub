// src/app/_components/AIContacts.jsx
"use client";
import { useRef, useState } from "react";
//import { GeoAlt, Person, EnvelopeAt, Telephone, ChatLeftDots } from 'react-bootstrap-icons';
import ActiveZone from "./ActiveZone";
import NoSSR from "./NoSSR";
import { trackEvent } from "@phntms/next-gtm";
import {
  BsChatLeftDots,
  BsEnvelopeAt,
  BsGeoAlt,
  BsPerson,
  BsTelephone,
} from "react-icons/bs";
import sendEmail from "@/lib/sendEmail";

export default function AIContacts() {
  const [activeZone, setActiveZone] = useState(false);
  const [error, setError] = useState(false);

  const aicheadRef = useRef();
  const parentRef = useRef();
  const chatLeftDotsRef = useRef();
  const submitMessageBtnRef = useRef();

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const cityRef = useRef();

  const submitMessage = async () => {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const mobile = mobileRef.current?.value || "";
    const city = cityRef.current?.value || "";
    const message = messageRef.current?.innerText || "";

    try {
      await sendEmail({ name, email, mobile, city, message });
      setError(null)
      // Clear the input fields if needed
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (cityRef.current) cityRef.current.value = "";
      if (messageRef.current) messageRef.current.innerText = "";
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <NoSSR>
        <section className="relative overflow-x-hidden border-t-2 border-transparent bg-gradient-to-b from-white/40 to-transparent px-4 ">
          <div className="items-center justify-center lg:flex">
            <div
              className="text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/contact-text.webp"
                alt="Contact us"
                width={"393px"}
                height={"90px"}
                className="mx-auto sm:pt-4 xl:mx-0"
              />
            </div>
          </div>
        </section>
        <section className="bg-white my-10">
          <div className="container">
            {/* <h2 className="text-center text-3xl font-bold text-primary">Please, try our assistant manager chat</h2> */}
            <h2 className="text-center text-xl font-bold text-secondary mb-20">
              Tell us more about your case
            </h2>
            <div className="relative z-10 lg:flex ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitMessage();
                }}
                className="rounded-3xl bg-white px-4 mb-12 lg:w-1/2 lg:px-8"
              >
                <div
                  id="aichead"
                  className="grid gap-10 sm:grid-cols-2"
                  ref={aicheadRef}
                >
                  <div className="relative">
                    <input
                      required="true"
                      aria-required="true"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      id="name"
                      ref={nameRef}
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12"
                    />

                    <BsPerson className="absolute top-1/2 -translate-y-1/2 right-4 " />
                  </div>
                  <div className="relative">
                    <input
                      required="true"
                      aria-required="true"
                      type="email"
                      name="email"
                      placeholder="Email"
                      ref={emailRef}
                      id="email"
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12"
                    />
                    <BsEnvelopeAt className="absolute top-1/2 -translate-y-1/2 right-4 " />
                  </div>
                  <div className="relative">
                    <input
                      required="true"
                      aria-required="true"
                      type="text"
                      name="mobile"
                      placeholder="Phone"
                      id="mobile"
                      ref={mobileRef}
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12"
                    />
                    <BsTelephone className="absolute top-1/2 -translate-y-1/2 right-4 " />
                  </div>
                  <div className="relative">
                    <input
                      required="true"
                      aria-required="true"
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Your City"
                      ref={cityRef}
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12"
                    />

                    <BsGeoAlt className="absolute top-1/2 -translate-y-1/2 right-4 " />
                  </div>
                </div>
                <div className="relative my-10" ref={parentRef}>
                  <div
                    onFocus={() => {
                      messageRef.current.classList.remove("border-red");
                      setError(false);
                    }}
                    contentEditable="true"
                    name="message"
                    placeholder="Message"
                    id="messageContainer"
                    style={activeZone ? { padding: 0, overflow: "hidden" } : {}}
                    ref={messageRef}
                    className=" height-60 w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary pr-12"
                  >
                    {activeZone}
                  </div>

                  <BsChatLeftDots
                    ref={chatLeftDotsRef}
                    className="absolute top-1/2 -translate-y-1/2 right-4 "
                  />
                </div>
                <div className="w-full text-red my-10">{error}</div>
                <div className="mt-10 text-center lg:text-right">
                  <button
                    type="submit"
                    ref={submitMessageBtnRef}
                    className="btn bg-white px-12 capitalize text-secondary  dark:hover:bg-secondary"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="heading text-center lg:mb-0 lg:w-1/2 lg:pr-10 lg:text-left text-dark">
                <div className="mx-auto">
                  <p>
                    We recognize the importance of effective communication in
                    our work, and that's why we have introduced an AI-powered
                    chat assistant on our website to help our clients get quick
                    answers to their basic questions.
                  </p>
                  <br />
                  <p>
                    While we strive to follow up on conversations with the AI
                    assistant as soon as possible, please note that it is
                    designed to help customers quickly find answers to their
                    basic questions. We hope that it can be a helpful resource
                    for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </NoSSR>
    </>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Modal from "./Modal"; // Adjust the path according to your folder structure

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shg8ivl",
        "template_cmotvxk",
        e.target,
        "CtTjQnKtwTfJ08KPC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalContent({
            title: "Success!",
            message: "Message sent successfully!",
          });
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
          setModalContent({
            title: "Error!",
            message: "Failed to send message, please try again.",
          });
          setIsModalOpen(true);
        }
      );
  };

  return (
    <div className="container mt-24 flex flex-col justify-center items-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="pb-16 text-4xl font-thin tracking-wider text-center dark:font-extralight"
      >
        Contact ME
      </motion.h1>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        onSubmit={sendEmail}
        className="w-3/4 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="focus:outline-none mb-6 bg-transparent border-b border-neutral-500 p-6 xxs:w-full xs:w-3/4"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none mb-6 bg-transparent border-b border-neutral-500 p-6 xxs:w-full xs:w-3/4"
        />
        <textarea
          placeholder="Message"
          name="message"
          className="focus:outline-none mb-6 bg-transparent border-b border-neutral-500 p-6 xxs:w-full xs:w-3/4"
        ></textarea>
        <button
          className="w-3/4 border border-neutral-500 p-3 rounded mb-24 hover:bg-neutral-500"
          type="submit"
        >
          Send Message
        </button>
      </motion.form>

      {/* Modal for alert */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
};

export default Contact;

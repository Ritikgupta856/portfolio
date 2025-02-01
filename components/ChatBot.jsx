"use client";

import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send message");
          console.log("FAILED...", error.message);
        }
      );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {isOpen && (
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="fixed bottom-20 right-6 md:bottom-24 md:right-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 md:w-96 z-40"
        >
          <div className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </div>
          <div className="text-sm font-medium mb-6 text-gray-600 dark:text-gray-300">
            I'd love to hear from you!
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name" className="text-gray-900 dark:text-white">
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                name="user_name"
                className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-900 dark:text-white">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="user_email"
                className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Email ID"
                required
              />
            </div>

            <div>
              <Label htmlFor="msg" className="text-gray-900 dark:text-white">
                Message
              </Label>
              <Textarea
                placeholder="Type your message here"
                name="message"
                id="msg"
                className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <Button className="mt-5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              Submit
            </Button>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
"use client";

import React, { useRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
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
    <section id="contact" className="min-h-screen">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center py-10 "
      >
        <div className="text-4xl font-bold">Get in Touch</div>
        <div className="text-lg font-medium">I'd love to hear from you!</div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 w-80 md:w-96 mt-10"
        >
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="user_name"
              className="mt-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="user_email"
              className="mt-2"
              placeholder="Your Email ID"
            />
          </div>

          <div>
            <Label htmlFor="msg">Message</Label>
            <Textarea
              placeholder="Type your message here"
              name="message"
              id="msg"
              className="mt-2"
            />
          </div>

          <Button className="mt-5">Submit</Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

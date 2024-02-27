import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-fit py-10">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">Get in Touch</div>
        <div className="text-lg font-medium">I'd love to hear from you!</div>

  
          <div className="flex flex-col gap-6 w-[400px] mt-10">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                className="mt-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="mt-2"
                placeholder="Your Email ID"
              />
            </div>

            <div>
              <Label htmlFor="msg">Message</Label>
              <Input
                type="text"
                id="msg"
                className="mt-2"
                placeholder="Your Message..."
              />
            </div>

            <Button className="mt-5">Submit</Button>
          </div>

         
        </div>

    </div>
  );
};

export default Contact;

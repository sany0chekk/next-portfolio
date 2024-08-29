"use client";

import { FormEvent, useState } from "react";
import emailjs from "@/utils/emailjs";
import Title from "./ui/title";
import { Button } from "./ui/button";

import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_iq14e5j", "template_fnzu76f", templateParams)
      .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        toast({
          title: "Success!",
          description:
            "Thank you for your message! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="mx-auto w-full lg:w-[70%]">
      <Title>Contact Me</Title>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-md flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-1 md:w-1/2 group">
            <label
              htmlFor="name"
              className="opacity-60 transition-opacity group-focus-within:opacity-95"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="outline-none rounded-sm border h-8 p-2"
            />
          </div>

          <div className="flex flex-col gap-1 md:w-1/2 group">
            <label
              htmlFor="email"
              className="opacity-60  transition-opacity group-focus-within:opacity-95"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="outline-none rounded-sm border h-8 p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 group">
          <label
            htmlFor="message"
            className="opacity-60 transition-opacity group-focus-within:opacity-95"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="outline-none rounded-sm border resize-none h-32 p-2 peer"
          />
        </div>

        <Button className="inline ml-auto">Send message</Button>
      </form>
    </div>
  );
};

export default ContactPage;

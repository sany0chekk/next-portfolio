import SequentialAnimation from "@/components/animation-container";
import ContactForm from "@/components/contact-form";
import Title from "@/components/ui/title";
import SocialsList from "@/components/socials-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O. Veselyi | Contacts",
  description:
    "Get in touch with Oleksandr Veselyi, a Front-end Developer specializing in modern web applications. Whether you have a project in mind, a question, or just want to connect, reach out through the contact form or social media links.",
};

const ContactPage = () => {
  return (
    <div>
      <SequentialAnimation>
        <div className="mb-20 flex flex-col md:flex-row items-start md:gap-20">
          <Title>Have a Question?</Title>
          <p className="max-md:text-sm">
            If you have any questions, feedback, or if you’re interested in
            discussing a potential collaboration, please feel free to use the
            contact form below. Alternatively, you can connect with me through
            the social media links provided.
          </p>
        </div>
        <div className="mb-24 flex flex-col md:flex-row md:items-start md:gap-20">
          <Title>Connect</Title>
          <SocialsList />
        </div>
        <ContactForm />
      </SequentialAnimation>
    </div>
  );
};

export default ContactPage;

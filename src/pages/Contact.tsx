import { useEffect } from "react";
import ContactusHero from "@/components/contactHero";
import ContactForm from "@/components/contactForm";




const Contact = () => {

  useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // optional delay
    }
  }
}, []);


  return (
    <div className="">
      <ContactusHero/>
      <ContactForm/>
    </div>
  );
};

export default Contact;

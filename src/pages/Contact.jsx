import ContactDetails from '@components/contact/ContactDetails';
import ContactForm from '@components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-5 lg:py-10 lg:mt-10">
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;

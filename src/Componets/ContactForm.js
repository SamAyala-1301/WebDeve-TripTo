import "./ContactStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a Message to Us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
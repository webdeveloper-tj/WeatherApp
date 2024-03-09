import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-load container">
      <p className="hello display-4 text-center ">
        Hello my name is <strong>Muhammadismoil</strong>
      </p>
      <div className="contact-me">
        <h4 className="">Contact me with </h4>
        <p>Phone: +992 401 27 04 04</p>
        <p>WhatsApp: +992 808 10 10 06</p>
        <p>Telegram: @ibnmirzorahim</p>
        <p>Email: muhammadismoil11a@gmail.com</p>

        <a href="https://github.com/webdeveloper-tj" class="text-dark">
          My GitHub
        </a>
        <Link to="/" className="go_to_back btn btn-outline-dark btn-sm">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Contact;

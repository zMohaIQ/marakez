import "./Footer.scss";

import { footerData } from "../constants/footer.constant";
import Button from "./Button";

const Footer = () => {
  return (
    <main className="footer">
      <div className="content">
        {footerData.map((section, index) => (
          <ul key={index}>
            <li className="title">{section.title}</li>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="email">
        <h4>NEWSLETTER</h4>
        <p>Join our mailing list to receive monthly news and updates about our developments.</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <Button>SIGN UP</Button>
        </form>
      </div>
    </main>
  );
};

export default Footer;

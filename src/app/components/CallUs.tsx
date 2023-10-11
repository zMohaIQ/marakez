import Image from "next/image";
import "./CallUs.scss";

import phoneIcon from "../assests/icons/phone-solid.svg";
import messageIcon from "../assests/icons/envelope-solid.svg";
import whatsappIcon from "../assests/icons/whatsapp.svg";

export default function CallUs() {
  return (
    <main className="call">
      <Image src={phoneIcon} alt="phone" width={24} />
      <Image src={messageIcon} alt="message" width={24} />
      <Image src={whatsappIcon} alt="whatsapp" width={24} />
    </main>
  );
}

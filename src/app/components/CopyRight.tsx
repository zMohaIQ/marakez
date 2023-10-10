import "./CopyRight.scss";

import Image from "next/image";

const CopyRight = () => {
  return (
    <main className="copyright">
      <p>COPYRIGHT 2022. MARAKEZ</p>
      <Image
        src="https://marakez.net/assets/icons/marakez-logo.svg"
        alt="logo"
        className="logo"
        width={120}
        height={60}
      />
      <div>
        <ul>
          <li className="title">FOLLOW US ON</li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default CopyRight;

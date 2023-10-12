import Image from "next/image";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <Image src="/landing.gif" alt="landing" width={400} height={400}></Image>
    </div>
  );
};

export default LoadingSpinner;

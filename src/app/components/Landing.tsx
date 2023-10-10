import "./Landing.scss";

export default function Landing() {
  return (
    <main className="landing">
      <video src="/Marakez-2022.mp4" autoPlay loop />
      <div className="content">
        <div className="content__holder">
          <h1>Destination</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Type of unit</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Projects</h1>
          <p>Any</p>
        </div>
        <div className="content__holder">
          <h1>Price Range</h1>
          <p>1000 to 100000</p>
        </div>
        <div className="content__holder">
          <button>Search Properties</button>
        </div>
      </div>
    </main>
  );
}

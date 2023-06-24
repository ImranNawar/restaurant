import "./styles/Peshawar.css";
import Image1 from "../static//Mario and Adrian A.png";
import Image2 from "../static/Mario and Adrian B.png";

const Peshawar = () => {
  return (
    <div>
      <div className="about-container">
        <section className="about-content">
          <h1 className="about-title">Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="about-text">
            One of Pakistan&apos;s most beloved restaurants, Little Lemon has
            welcomed guests to enjoy its contemporary Pakistan cuisine, warm
            hospitality, and unparalleled service in Peshawar for over two
            decades. Chef Gul Khan&apos;s ever-evolving seasonal menu
            showcases the restaurant&apos;s relationships with local farms and
            purveyors.
          </p>
        </section>
        <aside className="about-image-container">
          <img src={Image1} alt="Chef Mario and Adrian" id="A" />
          <img src={Image2} alt="Chef Mario and Adrian" id="B" />
        </aside>
      </div>
    </div>
  );
};

export default Peshawar;

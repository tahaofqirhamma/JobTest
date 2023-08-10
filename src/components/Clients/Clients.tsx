import "./Client.scss";
import l1 from "../../assets/images/1-white.png";
import l3 from "../../assets/images/3-white.png";
import l2 from "../../assets/images/2-white.png";
import l4 from "../../assets/images/4-white.png";
import l5 from "../../assets/images/5-white.png";
import l6 from "../../assets/images/6-white.png";

const Clients = () => {
  return (
    <section className="clt">
      <div className="clients container">
        <p className="titel">trusted by over 500 clients around the world</p>
        <div className="clt-logos">
          <img src={l1} alt="" />
          <img src={l2} alt="" />
          <img src={l3} alt="" />
          <img src={l4} alt="" />
          <img src={l5} alt="" />
          <img src={l6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

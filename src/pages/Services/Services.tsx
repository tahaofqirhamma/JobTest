import "../../SCSS/Services.scss";
import services from "../../assets/data/data";
import Service from "../../components/Service/Service";

const Services = () => {
  return (
    <>
      <div className="services">
        <section className="container">
          <div className="services-head">
            <div className="infos">
              <p className="subsubtitel">. SERVICES .</p>
              <p className="titel">Services We Offer</p>
              <p className="subtitel">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id{" "}
                <br />
                Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
            <button>
              See All Services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                strokeWidth={30}
                fill="#fff"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
          <div className="services-list">
            {services.map((s, i) => (
              <Service
                key={i}
                id={s.id}
                icon={s.icon}
                titel={s.titel}
                description={s.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

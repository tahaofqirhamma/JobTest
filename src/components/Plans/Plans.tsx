import "./Plans.scss";
const Plans = () => {
  return (
    <div className="plans">
      <section className="container">
        <div className="plan">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-window-fullscreen"
              viewBox="0 0 16 16"
            >
              <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
              <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
            </svg>
          </div>
          <p className="titel">Free Plan</p>
          <div className="price">
            <span>$</span>
            <p>00</p>
          </div>
          <p className="subsubtitel">Per Project</p>
          <hr />
          <p className="desc">
            150 Lorem, Ipsum Dolor. 20 Lorem Ipsum Dolor Sit . Lorem Ipsum Dolor
            Sit. Free Lorem Ipsum Dolor . Added Lorem Ipsum Dolor.
          </p>
          <button>Select Plan</button>
        </div>

        <div className="plan">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-headset-vr"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a4.978 4.978 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a4.979 4.979 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248z" />
              <path d="M12 12a3.988 3.988 0 0 1-2.786-1.13l-.002-.002a1.612 1.612 0 0 0-.276-.167A2.164 2.164 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.612 1.612 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8z" />
            </svg>
          </div>
          <p className="titel">Standerd Plan</p>
          <div className="price">
            <span>$</span>
            <p>85</p>
          </div>
          <p className="subsubtitel">Per Project</p>
          <hr />
          <p className="desc">
            150 Lorem, Ipsum Dolor. 20 Lorem Ipsum Dolor Sit . Lorem Ipsum Dolor
            Sit. Free Lorem Ipsum Dolor . Added Lorem Ipsum Dolor.
          </p>
          <button>Select Plan</button>
        </div>

        <div className="plan pro">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-box-seam"
              viewBox="0 0 16 16"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
          </div>
          <p className="titel">Pro Plan</p>
          <div className="price">
            <span>$</span>
            <p>150</p>
          </div>
          <p className="subsubtitel">Per Project</p>

          <hr />
          <p className="desc">
            150 Lorem, Ipsum Dolor. 20 Lorem Ipsum Dolor Sit . Lorem Ipsum Dolor
            Sit. Free Lorem Ipsum Dolor . Added Lorem Ipsum Dolor.
          </p>
          <button>Select Plan</button>
        </div>

        <div className="plan">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-infinity"
              viewBox="0 0 16 16"
            >
              <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
            </svg>
          </div>
          <p className="titel">Ultimate Plan</p>
          <div className="price">
            <span>$</span>
            <p>210</p>
          </div>
          <p className="subsubtitel">Per Project</p>
          <hr />
          <p className="desc">
            150 Lorem, Ipsum Dolor. 20 Lorem Ipsum Dolor Sit . Lorem Ipsum Dolor
            Sit. Free Lorem Ipsum Dolor . Added Lorem Ipsum Dolor.
          </p>
          <button>Select Plan</button>
        </div>
      </section>
    </div>
  );
};

export default Plans;

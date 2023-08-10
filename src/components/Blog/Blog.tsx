import "./Blog.scss";
import blg1 from "../../assets/images/blg1.jpg";

const Blog = (props: {
  topic: string;
  author: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="blog">
      <a
        className="post-link"
        href="#"
        title="give your website a new look and feel with themes"
      >
        <div className="blog-img">
          <img className="" src={blg1} alt="" />
        </div>
      </a>
      <div className="blog-date">
        <span className="day">15 </span>sep 2022{" "}
      </div>
      <div className="blog-summary">
        <div className="owner">
          <p className="topic">{props.topic}</p>
          <p>|</p>
          <p className="autor">{props.author}</p>
        </div>
        <a href="#" className="blog-link">
          {props.link}
        </a>
        <p className="blog-desc">{props.desc}</p>
        <button>
          Read More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            strokeWidth="30"
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
    </div>
  );
};

export default Blog;

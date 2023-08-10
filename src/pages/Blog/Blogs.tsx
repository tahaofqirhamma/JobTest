import "../../SCSS/Blogs.scss";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  return (
    <>
      <div className="blogs">
        <section className="container">
          <div className="blogs-head">
            <div className="infos">
              <p className="subsubtitel">. BLOGS .</p>
              <p className="titel">Latest News</p>
            </div>
            <button>
              See More{" "}
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
          <div className="blog-list">
            <Blog
              topic={"Hosting"}
              author={"Allan Moore"}
              link={" How litespeed technology works to speed up your site "}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae"
              }
            />
            <Blog
              topic={"Web Dev"}
              author={"Mhmd Amin"}
              link={" How litespeed technology works to speed up your site "}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae"
              }
            />
            <Blog
              topic={"SEO"}
              author={"Yusuf Amin"}
              link={" How litespeed technology works to speed up your site "}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae"
              }
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;

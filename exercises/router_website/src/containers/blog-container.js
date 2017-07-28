import React from "react";

import Blog from "../components/blog.js";

let articles = [
  {
    name: "article 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum possimus veniam consequatur cum commodi ab ea deserunt! Modi nulla culpa qui molestias. Pariatur molestias nisi debitis dolore facilis nobis quas."
  },
  {
    name: "article 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus atque porro odio earum incidunt, at inventore consequuntur dolorem voluptatem. Qui nam ipsam reprehenderit dolorem, maxime, quisquam saepe unde. Quae, ipsam!"
  },
  {
    name: "article 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nobis ut fuga dolores asperiores repudiandae, consequatur accusantium. Obcaecati dolores quo perspiciatis dicta corporis fugit dolorum. Illo quod debitis illum deleniti."
  }
];


class BlogContainer extends React.Component {
  render() {
    return (
      <div className="blog-container-wrapper">
        <Blog articles={articles} />
      </div>
    )
  }
}

export default BlogContainer;

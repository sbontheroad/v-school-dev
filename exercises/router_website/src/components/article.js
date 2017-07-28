import React from "react";

class Article extends React.Component {
  render() {
    console.log(this.props.article);
    return (
      <div className="home-wrapper">
        <h2>{this.props.article.name}</h2>
        <p>{this.props.article.text}</p>
      </div>
    )
  }
}

export default Article;

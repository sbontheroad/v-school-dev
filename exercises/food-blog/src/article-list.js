import React from "react";
import Content from "./content.js"

class ArticleList extends React.Component {
  alertText(desc) {
    alert(`This article is about ${desc}`);
  }
  youLike(title) {
    alert(`you like this ${title}`);
  }

  render() {
    let articles = this.props.articles.map((item) => {
      return <Content handleDescription={this.alertText} youLike ={this.youLike} name={item.name} desc={item.desc} date={item.date} url={item.url}/>
    });
    return (
      <div className="container">
        {articles}
        <div className="button">
          <p>Older Posts →</p>
        </div>
      </div>
    )
  }
}

export default ArticleList;

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NavCatch from "./navCatch.js";
import SiteContainer from "./container/site-container.js";

let navBrand =
  {
    text: "Famous Quotes",
    link: "#"
  };
let navLinks = [
  {
    text: "People",
    link: "#"
  },
  {
    text: "Places",
    link: "#"
  },
  {
    text: "About",
    link: "#"
  }
];
let images =[
  {
    person: "Margaret Thatcher",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazy4IBkYpeNy90_b_k8wn9hmKaCziuX_C6fVIb-BBhq2iATWS",
    quote: "If you set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing."
  },
  {
    person: "Mark Twain",
    image: "http://www.cmgww.com/historic/twain/wp-content/uploads/2017/05/1395308888143.cached.jpg",
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect."
  },
  {
    person: "Winston Churchill",
    image: "http://news.images.itv.com/image/file/601720/img.jpg",
    quote: "We make a living by what we get, but we make a life by what we give."
  },
{
  person: "Maya Angelou",
  image: "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTQwMjQyNDQz/maya-angelou-9185388-2-raw.jpg",
  quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
},
{
  person: "Mahatma Gandhi",
  image: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzODE4MjIwMDQ0/mahatma-gandhi-9305898-1-402.jpg",
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
},
{
  person: "Oscar Wilde",
  image: "http://cdn.playbuzz.com/cdn/96206c62-5f47-441f-8fd5-cf8b57e941c1/8ca54eeb-3116-481f-90e1-bc5fa70b0579.jpg",
  quote: "To live is the rarest thing in the world. Most people exist, that is all."
},
{
  person: "André Gide",
  image: "http://3.bp.blogspot.com/-PNo5FQt2ZQ8/VeBtdbgr0EI/AAAAAAAAVD8/8CKQmHjICWk/s1600/gid.jpg",
  quote: "It is better to be hated for what you are than to be loved for what you are not."
},
{
  person: "William Shakespear",
  image: "https://simonclark3.files.wordpress.com/2013/02/shakespeare_william.jpg",
  quote: "Love all, trust a few, do wrong to none."
}
];

class App extends React.Component {
  render() {
    return (
      <div>
        <NavCatch brand={navBrand} links={navLinks}/>
        <SiteContainer images={images}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));

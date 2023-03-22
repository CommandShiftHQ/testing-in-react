import "../styles/app.css";
import PostList from "./Postlist";

import placeholderData from "../data/posts.json"

const App = () => {
  return (
    <div className="app">
      <div className="app__background-wrap" />
      <div className="app__foreground-wrap">
        <div className="app__title">Intro to React II</div>
        {
          // TODO: Create a Postlist component to wrap all Posts in,
          //   display name of last upvoted post at the top
        }
        <PostList posts={placeholderData} />
      </div>
    </div>
  );
}

export default App;

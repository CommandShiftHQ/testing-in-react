import "../styles/app.css";
import Post from "./Post";

import placeholderData from "../data/posts.json"

const App = () => {
  return (
    <div className="app">
      <div className="app__background-wrap" />
      <div className="app__foreground-wrap">
        <div className="app__title">Intro to React II</div>
        {
          // TODO: Send data to Post component and verify it works
          //   wrap all Posts in a PostList component
          // TODO: Create a Postlist component to wrap all Posts in,
          //   display name of last upvoted post at the top
        }
        <Post postData={placeholderData[0]} />
      </div>
    </div>
  );
}

export default App;

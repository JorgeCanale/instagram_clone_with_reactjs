
import './App.css';
import Post from './components/post/post';
import SideBar from "./components/sidebar/Sidebar"
import StoriesSection from './components/stories/stories_section';
import Clicking from './components/click';

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <StoriesSection />
      {/* <Post /> */}
      {/* <Clicking /> */}
    </div>
  );
}

export default App;

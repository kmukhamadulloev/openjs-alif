import './App.css';
import Wall from './components/Wall';
import PostsProvider from './contexts/PostsProvider';

function App() {
  return (
    <div className="App">
      <PostsProvider>
        <Wall />
      </PostsProvider>
    </div>
  );
}

export default App;

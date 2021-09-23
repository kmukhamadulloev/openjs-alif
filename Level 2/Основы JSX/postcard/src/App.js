import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';

function App() {
  const post = {
    id: 9,
    author: {
      id: 99,
      avatar: 'https://lms.openjs.io/logo_js.svg',
      name: 'OpenJS',
    },
    content: 'Наше крутое лого',
    photo: 'https://lms.openjs.io/openjs.jpg',
    hit: false,
    likes: 1000,
    likedByMe: false,
    created: 1603501200,
  }

  return (
    <div className="App">
      <Post post={post} />
    </div>
  );
}

export default App;

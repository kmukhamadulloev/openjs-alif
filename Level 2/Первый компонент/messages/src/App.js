import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Post content="Первый пост" />
      <Post content="Второй пост" />
      <Post content="Третий пост" />
      <Message text="Первое сообщение" />
      <Message text="Второе сообщение" />
      <Message text="Третье сообщение" />
    </div>
  );
}

export default App;

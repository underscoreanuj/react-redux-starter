import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Post';
import PostForm from './components/PostForm';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

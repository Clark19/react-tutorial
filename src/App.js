import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Article } from './components/Article';
import { Read } from './components/Read';
import './App.css';
import { Controller } from './components/Controller';
import { Create } from './components/Create';
import { Update } from './components/Update';

const topicsJson = [
  { id: 1, title: 'html', body: 'html is ...' },
  { id: 2, title: 'css', body: 'css is ...' },
  { id: 3, title: '구글 검색', body: '구글 검색 is ...' },
  { id: 4, title: 'jsonplaceholder', body: 'jsonplaceholder is ...' },
];

function App() {
  const [topics, setTopics] = useState(topicsJson);
  const history = useHistory();

  const onCreate = ({title, body}) => {
    setTopics(cur => {
      const newTopics = [...cur];
      newTopics.push({id: cur.length+1, title, body});
      return newTopics;
    });
    history.push(`/read/${topics.length+1}`);
  }
  
  const onUpdate = ({id, title, body}) => {
    setTopics(cur => {
      const newTopics = [...cur];
      newTopics[id-1] = {id, title, body};
      return newTopics;
    });
    history.push(`/read/${id}`);
  }

  return (
    <div className='App'>
      <Header />
      <Nav data={topics} />
      
      <Route exact path="/">
        <Article title="Welcome" body="Hello, WEB"></Article>
      </Route>

      <Route path="/create">
        <Create onCreate={onCreate}/>
      </Route>
      <Route path="/update/:id">
        <Update onUpdate={onUpdate} topics={topics} />
      </Route>

      <Route path="/read/:id">
        <Read data={topics}/>
      </Route>

      <Controller />

    </div>
  );
}

export default App;
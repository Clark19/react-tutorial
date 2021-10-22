import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Article } from './Article';
import '../App.css';

export function Read({ data }) {
  var params = useParams();
  var id = Number(params.id);
  let [tt, setTT] = useState('');

  let { title, body } = data.find(topic => topic.id === id);

  // Ajax
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1') 
    .then(pResponse => pResponse.text()) 
    .then(pJSON => setTT(<p>{pJSON}</p>))
  }, []);

  // debugger;
  if (title.includes('검색')) {
    // !!활용 가능 팁 : <form action="https://www.google.com/search"> 하고
    // input 태그에 name="q" 하고 제출버튼누르면 구글 검색으로 연결 바로 됨
    return (
      <form action="https://www.google.com/search">
        <p><input type="text" name="q" placeholder="title"></input></p>
      </form>
    );
  } else if (id === 4) {
    
    return tt;
  }
  else {
    return <Article title={title} body={body} />;
  }
}

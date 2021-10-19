import React, {useRef, useState} from 'react';
import { useParams } from 'react-router';
// import {} from 'react-router-dom'

export const Update = ({updateHandler, topics}) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const params = useParams()
  const id = parseInt(params.id)
  const topic = topics.find(item => item.id === id);
  const [content, setContent] = useState(topic)
  // const [body, setBody] = useState(topic.body);

  const onUpdate = (e) => {
    e.preventDefault();
    updateHandler(content);
    debugger;
  };

  function onChange(e) {
    const {name, value} = e.target;
    setContent(cur => {
      const newContent = {...cur}
      newContent[name] = value
      return newContent
    });

  }

  return (
  <div className='App'>(CreateComp)
    <div><input name='title' ref={titleRef} value={content.title} onChange={onChange} /></div>
    <div><input name='body' ref={bodyRef} value={content.body} onChange={onChange} /></div>
    <div><button onClick={onUpdate}>Update</button></div>
  </div>);
};

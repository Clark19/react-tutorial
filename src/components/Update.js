import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

export const Update = ({onUpdate, topics}) => {
  const params = useParams()
  const id = parseInt(params.id)
  const topic = topics.find(item => item.id === id);
  const [content, setContent] = useState(topic)

  useEffect(() => console.log('Update Comp 랜더링 호출 확인용'));

  const onUpdateClick = (e) => {
    e.preventDefault();
    onUpdate(content);
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
    <div><input name='title' value={content.title} onChange={onChange} /></div>
    <div><input name='body' value={content.body} onChange={onChange} /></div>
    <div><button onClick={onUpdateClick}>Update</button></div>
  </div>);
};
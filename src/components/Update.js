import React, {useEffect, useRef} from 'react';
import { useParams } from 'react-router';

export const Update = ({onUpdate, topics}) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const params = useParams()
  const id = parseInt(params.id)
  const topic = topics.find(item => item.id === id);

  useEffect(() => console.log('Update Comp 랜더링 호출 확인용'));

  const onUpdateClick = (e) => {
    e.preventDefault();
    topic[titleRef.current.name] = titleRef.current.value
    topic[bodyRef.current.name] = bodyRef.current.value
    onUpdate(topic);
  };

  return (
  <div className='App'>(CreateComp)
    <div><input name='title' ref={titleRef} defaultValue={topic.title} /></div>
    <div><input name='body' ref={bodyRef} defaultValue={topic.body} /></div>
    <div><button onClick={onUpdateClick}>Update</button></div>
  </div>);
};
import React, {useRef} from 'react';
// import {} from 'react-router-dom'

export const Create = ({onCreate}) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    onCreate(
      {title: titleRef.current.value,
      body: bodyRef.current.value});
  };

  return (
  <div className='App'>(CreateComp)
    <div><input name='title' ref={titleRef} /></div>
    <div><input name='body' ref={bodyRef} /></div>
    <div><button onClick={onClick}>Create</button></div>
  </div>);
};

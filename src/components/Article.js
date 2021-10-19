import React from 'react';
import '../App.css'

export function Article(props) {
  return (
    <article className='App'>
      (ArticleComponent)
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

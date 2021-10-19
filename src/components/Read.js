import React from 'react';
import { useParams } from 'react-router-dom';
import { Article } from './Article';
import '../App.css';

export function Read({ data }) {
  var params = useParams();
  var id = Number(params.id);

  let { title, body } = data.find(topic => topic.id === id);

  return <Article title={title} body={body} />;
}

import React from 'react';
import { Route, Link,useParams } from 'react-router-dom';

export function Controller({deleteHandler}) {

  const onDelete = (e) => {
    e.preventDefault();
    deleteHandler();
  }

  return (<>
  {'(Controller Component)'}
  <ul>
    <li><Link to='create'>Create</Link></li>
    <Route path='/read/:id'>
      <ControllerViewOption onDelete={onDelete} />
    </Route>
  </ul>
  </>);
}


const ControllerViewOption = ({onDelete}) => {
  const params = useParams();
  const id = params.id;

  return (<>
    <li><Link to={`/update/${id}`}>Update</Link></li>
    <li><button onClick={onDelete}>Delete</button></li>
  </>);
}
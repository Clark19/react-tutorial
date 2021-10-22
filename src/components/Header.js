import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from "styled-components";

const Container = styled.header`
  box-sizing: border-box;
  background: gray;
  border: 1px solid green;
  border-radius: 1rem;
  width: 410rem;
  height: 20rem;
  padding: 2rem 2rem;
`;

export function Header() {
  return (
    <Container className='App'>
      <h1>
        <Link to="/">WEB2 (HeaderComponent)</Link>
      </h1>
    </Container>
  );
}

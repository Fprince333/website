import React from 'react';
import styled from 'styled-components';
import { ImYoutube } from "react-icons/im";

const YouTubeTitle = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  svg {
    fill: #FF0000;
    margin-right: 10px;
  }
`

const Title = props => {
  return ( 
    props.ytId && props.ytTitle.length && <a href={`https://www.youtube.com/watch?v=${props.ytId}`} target="_blank" rel="noopener noreferrer">
      <YouTubeTitle><ImYoutube /> {props.ytTitle.replace('HD', '')} </YouTubeTitle>
    </a>
  );
}
 
export default Title;
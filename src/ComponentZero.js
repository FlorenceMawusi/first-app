import React from 'react';
import ComponentOne from './ComponentOne';


function ComponentZero(props) {
    return(
      <div>
          <h1>{props.title}</h1>
          <ComponentOne/>
      </div>
    );
}

export default ComponentZero;


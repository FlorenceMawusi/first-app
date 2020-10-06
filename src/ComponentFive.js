import React from 'react';
import ComponentSix from './ComponentSix';
import ComponentSeven from './ComponentSeven';
import ComponentEight from './ComponentEight';
import ComponentNine from './ComponentNine';


import './Component.css';

function ComponentFive() {
    return(
      <div>
          

          <table style={{width:"60%" , border:"1px solid black"}}>
          <tr >
            <th>Title</th>
            <th>Description</th>
            <th>Find out more </th>

          </tr>
          <tr>
            <td>Serious Men</td>
            <td><ComponentSeven/></td>
            <td><ComponentEight/></td>

          </tr>
          <tr>
            <td>Akira</td>
            <td><ComponentSix/></td>
            <td><ComponentNine/></td>

          </tr>
          </table>
      </div>
    );
}

export default ComponentFive;


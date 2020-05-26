import React, { Component } from "react";
import Card from './Card';
import Form from './Form';
import Comments from "./Comments";

export class Dashboard extends Component {
 render() {
   return (
     <div>
       <Card/>
       <Form/>
       <Comments/>
     </div>
   )
 }
}

export default Dashboard

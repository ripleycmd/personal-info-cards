import React, { Component } from "react";
import ReactDOM from "react-dom";



function Person(props) {
    return (
      <div class = "person">
        <h1>{props.name}</h1>
        <p>{props.job}</p>
      </div>
    );
  }
  
  var app =(
    <div>
      <Person name ='Max' job= "Software Developer"/>
      <Person name ='Natalia' job= "Software Developer"/>
    </div>
  );
  
  
  ReactDOM.render(app, document.querySelector('#app'));
  
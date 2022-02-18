import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

let curDate = new Date()
let greeting='';
let curHour=curDate.getHours();
let cssStyle ={};


if(curHour>=0 && curHour<12){
  greeting='Good Morning !!'
  cssStyle.color='green';
}else if(curHour>=12 && curHour<17){
  greeting='Good Afternoon !!'
  cssStyle.color='orange';
}else if(curHour>=17 && curHour<21){
  greeting='Good Evening !!'
  cssStyle.color='#B38525';
}
else{
  greeting='Good Night !! '
  cssStyle.color='black'
}
  
ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      
    </div>
  </>,document.getElementById('root')
)
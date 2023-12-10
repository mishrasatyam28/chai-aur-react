import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement ={
//     type:'a',
//     props:{
//         href:"https://www.gooogle.com",
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

 const anotherElement = (
  <a href="https://google.com" target ="_blank">google</a>
 )
const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a',
  {href: "https://www.gooogle.com",target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <App/>
    
)

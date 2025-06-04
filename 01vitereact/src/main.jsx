import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
      <div>
        <h1>Custom App !</h1>
      </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="http://google.com" target="_blank" >Visit Google</a>
)

const anotherUser = "Coding in react"

const reactElement = React.createElement(
   'a',
   {href: 'https://google.com', target:'_blank'},
   'Click me to Visit Google',
   anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
    // MyApp()  : We can also use this method to call the function.
    // anotherElement: It will work properly 
    reactElement
)

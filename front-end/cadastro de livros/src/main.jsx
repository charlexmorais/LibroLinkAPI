import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import LoginPage from './pages/Login/Dashboard/index.jsx'
import Routes from'./routes.jsx'


function App(){
return (
  <BrowserRouter>

  <LoginPage/>
  < Routes/>

  </BrowserRouter>


)


}
export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { DbProvider } from './context/dbContex';
import { ProtectedRoutes } from './components/ProtectedRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DbProvider>
            <Routes>
                <Route path='/' element={<App/>}>
                  <Route index element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
                    <Route element={<Login/>} path='/login'/>
                </Route>                
            </Routes>
      </DbProvider>
        </BrowserRouter>
  </React.StrictMode>,
)

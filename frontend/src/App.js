import React from 'react';
import { Helmet } from 'react-helmet';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'



function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Wrap everything with Helmet for app-wide meta tags */}
        <Helmet>
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com;" />
        </Helmet>
        <Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;

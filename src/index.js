import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {Layout, Menu, Breadcrumb } from 'antd';
import {​​​​​BrowserRouter as Router, Switch, Route, Link}​​​​​ from 'react-router-dom';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
 <Router>
   <Layout>
    
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
     </ul>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
 </Router>,
  document.getElementById('container'),
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
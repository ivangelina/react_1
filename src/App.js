import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import Images from './components/images/Images';
import Footer from './components/footer/Footer';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from "./redux/reducers";

import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";



const HomeComponent = () => (
  <Layout>
    <Home />
  </Layout>
)

const GalleryComponent = () => (
  <Layout>
    <Gallery />
  </Layout>
)
const ImagesComponent = () => (
  <Layout>
    <Images />
  </Layout>
)

const routes = [
  {
    path: '/',
    exact: true,
    header: () => <Header/>,
    main: () => <HomeComponent />
  },
  {
    path: '/gallery',
    exact: true,
    header: () => <Header/>,
    main: () => <GalleryComponent />
  
  },
  {
    path: '/images',
    exact: true,
    header: () => <Header/>,
    main: () => <ImagesComponent />
  
  },
  

];

const Layout = (props) => (
  <div>
    <Header />
    <div id="main">
      { props.children }
    </div>
    <Footer />
  </div>
)


const store = createStore(reducers);
const AppRoute = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route, i) => 
          <Route 
            exact 
            key={i} 
            path={route.path} 
            component={route.main} />)}
      </Switch>
    </Router>
  </Provider>
)

export default AppRoute;

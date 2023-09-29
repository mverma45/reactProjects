import React, { Component } from 'react';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {Route, RouterProvider} from 'react-router-dom';
// Add react-router-dom imports
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// create router with JSX Route elements
const router = createBrowserRouter(createRoutesFromElements( 
<Route path="/" element={<Root/>}>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/search" element={<SearchPage/>}/>
  <Route path="/detail" element={<PetDetailsPage/>}/>
  <Route path="/petDetailsNotFound" element={<PetDetailsNotFound/>}/>
  <Route path="/components" element={<Root/>}/>
</Route>
));
function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={router}/>
  );
}

export default App;

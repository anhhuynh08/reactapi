import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import Editstudent from './pages/EditStudent';
import AddBrand from './components/Brand/AddBrand';
import Brand from './components/Brand/Brand';
import EditBrand from './components/Brand/EditBrand';
import AddCategory from './components/Category/AddCategory';
import Category from './components/Category/Category';
import EditCategory from './components/Category/EditCategory';
import EditProduct from './components/Product/EditProduct';
import Product from './components/Product/Product';
import AddProduct from './components/Product/AddProduct';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route path="/add-student" component={AddStudent} />
        <Route path="/edit-student/:id" component={Editstudent} />
        <Route path="/add-brand" component={AddBrand} />
        <Route path="/brand" component={Brand} />
        <Route path="/edit-brand/:id" component={EditBrand} />
        <Route path="/add-category" component={AddCategory} />
        <Route path="/category" component={Category} />
        <Route path="/edit-category/:id" component={EditCategory} />
        <Route path="/edit-product/:id" component={EditProduct} />
        <Route path="/product" component={Product} />
        <Route path="/add-product" component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default App;

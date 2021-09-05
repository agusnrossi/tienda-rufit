import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import ItemDetailContainer from "../components/item/itemDetailContainer";
import ItemListContainer from "../components/item/itemListContainer";
import Cart from "../components/cart/Cart";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/home" component={ItemListContainer} />
          <Route
            exact
            path="/category/:category"
            component={ItemListContainer}
          />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RouterApp;

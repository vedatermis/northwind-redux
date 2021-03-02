import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
          <Route exact path="/" component = {Dashboard}/>
          <Route exact path="/product" component = {Dashboard}/>
          <Route exact path="/cart" component = {CartDetail}/>
          <Route  path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route  path="/saveproduct" component={AddOrUpdateProduct} />
          <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;

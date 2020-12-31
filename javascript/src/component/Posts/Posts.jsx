import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { route } from "../../constant/routes";
import Edit from "./Edit";
import Add from "./Add";
import List from "./List";
import { Container } from "reactstrap";

export class Posts extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container className='mt-4'>
        <Switch>
          <Route to={route.posts.posts} exact>
            <List />
          </Route>
          <Route to={route.posts.addPost} exact>
            <Add />
          </Route>
          <Route to={route.posts.editPost} exact>
            <Edit />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default Posts;

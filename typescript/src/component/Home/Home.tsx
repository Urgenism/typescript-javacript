import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { PropsFromRedux } from "./index";
import Posts from "./Posts";
import Users from "./Users";

interface IProps extends PropsFromRedux {}

interface IState {
  selectedUserId: null | number;
}

class Home extends Component<IProps, IState> {
  state = {
    selectedUserId: null,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handlePostClick = (userId: number) => {
    this.props.getPosts();
    this.setState({ selectedUserId: userId });
  };

  render() {
    return (
      <Container fluid className='mt-4'>
        <Row>
          <Col md='4'>
            <Users
              users={this.props.users}
              handlePostClick={this.handlePostClick}
            />
          </Col>
          {this.state.selectedUserId && (
            <Col md='8'>
              <Posts
                posts={this.props.posts}
                selectedUserId={this.state.selectedUserId}
              />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Home;

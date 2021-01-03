import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export class Users extends Component {
  render() {
    return (
      <>
        <h3 className='h-3'>Users</h3>
        <div className='divider my-3'></div>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.status === 1 &&
              this.props.users.users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        color='primary'
                        onClick={() => this.props.handlePostClick(item.id)}
                      >
                        posts
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Users;

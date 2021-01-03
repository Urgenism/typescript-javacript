import React, { Component } from "react";
import { Table } from "reactstrap";

let postRenderCount = 0;
export class Posts extends Component {
  render() {
    postRenderCount++;
    console.log(postRenderCount, "postrendered");
    return (
      <>
        <h3 className='h-3'>Posts</h3>
        <div className='divider my-3'></div>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.status === 1 &&
              this.props.posts.posts
                .filter((item) => item.userId === this.props.selectedUserId)
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Posts;

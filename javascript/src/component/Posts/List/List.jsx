import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { route } from "../../../constant/routes";

export class List extends Component {
  componentDidMount() {
    this.props.getPosts();
    console.log(this.props.posts);
  }

  render() {
    return (
      <>
        <h3 className='h-3'>Posts</h3>
        <div className='divider my-3'></div>
        <div className='text-right mb-3'>
          <Link to={route.posts.addPost} className='btn btn-primary '>
            Add Posts
          </Link>
        </div>
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
              this.props.posts.posts.map((item) => {
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

export default List;

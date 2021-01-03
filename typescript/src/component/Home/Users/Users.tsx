import React from "react";
import { Table, Button } from "reactstrap";
import { IUsersInitialState } from "store/users/reducer";

interface IProps {
  handlePostClick: (userId: number) => void;
  users: IUsersInitialState;
}

const Users: React.FC<IProps> = ({ handlePostClick, users }) => {
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
          {users.status === 1 &&
            users.users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      color='primary'
                      onClick={() => handlePostClick(item.id)}
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
};

export default Users;

import { connect, ConnectedProps } from "react-redux";
import Home from "./Home";
import { RootState } from "store/rootReducer";
import { getPosts } from "store/posts/actions";
import { getUsers } from "store/users/actions";

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

const mapDispatchToProps = {
  getPosts,
  getUsers,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);

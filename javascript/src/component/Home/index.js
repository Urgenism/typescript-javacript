import { connect } from "react-redux";
import Home from "./Home";

import { getPosts } from "../../store/posts/actions";
import { getUsers } from "../../store/users/actions";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

const mapDispatchToProps = {
  getPosts,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

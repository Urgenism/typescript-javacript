import { connect } from "react-redux";
import Edit from "./Edit";

import { getPosts } from "../../../store/posts/posts.actions";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

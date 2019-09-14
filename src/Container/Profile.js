import React from "react";
import { connect } from "react-redux";
import "../Components/Details.css";
class Profile extends React.Component {
  render() {

    console.log(this.props.profile);
    const { id } = this.props.match.params;
    const { data } = this.props.profile;
    console.log(this.props.data);
    return (
      <div>
        
        <div className="box2">
          <h2>{data[id - 1].title}</h2>
          <p>{data[id - 1].pubDate}</p>
          <p>{data[id - 1].author}</p>
          <img className="fluid" src={data[id - 1].thumbnail} />
          <div dangerouslySetInnerHTML={{ __html: data[id - 1].description }} />
        </div>
        {/* <h1>{data[0].nama}</h1> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.home
  };
};
export default connect(mapStateToProps)(Profile);

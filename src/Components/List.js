import React from "react";
import { connect } from "react-redux";
import { changedName, getData } from "../actions/homeActions";
import { Link } from "react-router-dom";
import "./Home.css";
import "./animasi.css";
// import Data from "../Data/Data";
// import data from "../Data/data";

// const data = [
//   {
//     nama: "Dimas"
//   }
// ];
// const data = [
//   {
//     id: 1,
//     nama: "data2",
//     kelas: "12"
//   },
//   {
//     id: 2,
//     nama: "Data",
//     kelas: "12"
//   }
// ];

class List extends React.Component {
  render() {
    // console.log(this.props.homes);
    // const { title } = this.props.homes;
    const { data } = this.props.homes;
    return (
      <>
        <div className="sticky-top">
          <div className="mini-box">
            {data.map((list, index) => (
              <div key={list.title}>
                <ul class="list-group">
                  <Link className="link-list" to={`/details/${index + 1}`}>
                    <li
                      className="list-li"
                      // onClick={() => this.props.getData(data)}
                      class="list-group-item"
                    >
                      {/* <img src={data[0].thumbnail} /> */}
                      <a>{list.title}</a>
                    </li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    homes: state.home
  };
};
export default connect(
  mapStateToProps,
  { changedName, getData }
)(List);

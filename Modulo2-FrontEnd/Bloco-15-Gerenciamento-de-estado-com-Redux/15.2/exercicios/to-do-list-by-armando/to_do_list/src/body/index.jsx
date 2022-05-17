import { Component } from "react";
import Form from "./form";
import React from "react";
import { connect } from "react-redux";

class Body extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        <Form />
        <div className="listContainer">
          <ul>
            {list.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.addListItem,
}); // ISTO FAZ COM QUE TENHA ACESSO A PROPS LIST

export default connect(mapStateToProps)(Body);

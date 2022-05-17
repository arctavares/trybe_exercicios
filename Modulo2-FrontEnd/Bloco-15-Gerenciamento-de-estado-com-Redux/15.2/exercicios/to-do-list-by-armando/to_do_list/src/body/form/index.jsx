import { Component } from "react";
import "./form.css";
import addLI from "../../redux/action";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { textValue: "" };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div className="addListItem">
        <form>
          <label>
            Adicionar item:
            <input
              type={"text"}
              onChange={(event) =>
                this.setState({ textValue: event.target.value })
              }
            ></input>
          </label>
          <button type={"button"} onClick={() => add(textValue)}>
            Adicionar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addLI(value)),
});

export default connect(null, mapDispatchToProps)(Form);

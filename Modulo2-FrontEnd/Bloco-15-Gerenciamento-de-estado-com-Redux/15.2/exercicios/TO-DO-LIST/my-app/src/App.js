import { connect } from "react-redux";
import "./App.css";
import addLI from "./actions";
import { Component } from "react";

class App extends Component {
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
              onChange={(e) =>
                this.setState({ textValue: e.target.value })
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

const mapStateToProps = (state) => ({ list: state.addLI });

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addLI(value)), // -> o nome da função add é declarada aqui, ela irá chamar a função addLI da action, com o valor(value) que é o textValue, textValue é o valor atual do input
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

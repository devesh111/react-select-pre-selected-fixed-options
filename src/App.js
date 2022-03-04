import React from "react";
import Select from "react-select";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }
  componentDidMount = () => {
    this.setState({
      value: {
        value: "apple",
        label: "Apple",
        isFixed: true
      }
    });
  };
  onChange = (e, option) => {
    if (option.removedValue && option.removedValue.isFixed) return;

    this.setState({
      value: e
    });
  };

  render() {
    const options = [
      { value: "apple", label: "Apple", isFixed: true },
      { value: "orange", label: "Orange" },
      { value: "grape", label: "Grape" }
    ];
    return (
      <div>
        <Select
          value={this.state.value}
          isMulti
          name="fruit"
          classNamePrefix="select"
          onChange={this.onChange}
          options={options}
          isClearable={false}
        />
      </div>
    );
  }
}

export default App;

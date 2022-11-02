import React from "react";
import "./style.css";

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.props.setValue({...this.props.value, [this.props.name]:item.value});
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <div className="select-box--box">
        <div className="select-box--container" onClick={this.dropDown}>
          <div className="select-box--selected-item">
            {this.state.selectedItem.value}
          </div>
          <div className="select-box--arrow">
            <span
              className={`${
                this.state.showItems
                  ? "select-box--arrow-up"
                  : "select-box--arrow-down"
              }`}
            />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
          >
            {this.state.items.map(item => (
              <div
                key={item.id}
                onClick={() => {this.selectItem(item); this.dropDown()} }
                className={this.state.selectedItem === item ? "selected custom-select-leaves" : "custom-select-leaves"}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBox;

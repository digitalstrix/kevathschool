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
    this.props.setValue({ ...this.props.value, [this.props.name]: item.value });
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  onchange = (e) => {
    this.props.setValue({ ...this.props.value, [this.props.name]: e.target.value });
    console.log(this.props.value);
  };

  blur=()=>{
    setTimeout(() => {
      this.setState(prevState => ({
        showItems: false
      }));
    }, 200);
  }

  render() {
    return (
      <div className={this.props.small ? "select-box--box smallSb" : "select-box--box"}>

        <div className="select-box--container" onBlur={this.blur} onClick={this.dropDown}>

          <input type="text" className="select-box--selected-item" onChange={this.onchange} value={this.props.value1} required />
          {/* <div className="select-box--selected-item">
            {this.state.selectedItem.value}
          </div> */}

          <div className="select-box--arrow">
            <span
              className={`${this.state.showItems
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
                onClick={() => { this.selectItem(item); this.dropDown() }}
                className={this.state.selectedItem === item ? "selected" : ""}
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

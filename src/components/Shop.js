import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import "./Shop.css";

class Shop extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  handleChange = (event) => {
    console.log("On Change triggered", event.target.value);
    let oldList = this.props.items;
    let newList = oldList.filter((obj) => {
      let item_lc = obj.title.toLowerCase();
      if (item_lc.includes(event.target.value.toLowerCase())) {
        return obj;
      }
    });
    console.log("New List", newList);
    //this.props.items = newList;
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div style={{ maxWidth: "25% !important" }} key={item.id}>
          <div className="card-image" style={{ padding: "5px" }}>
            <li>
              <div style={{ display: "grid" }}>
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span
                  to="/"
                  className="rose"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  Add to Cart
                  <i
                    className="focus material-icons"
                    style={{ backgroundColor: "white", color: "#ee6e73" }}
                  >
                    add
                  </i>
                </span>
              </div>
              <div className="card-content">
                <span>
                  {item.desc}
                  <br />
                  <b>Price: ₹ {item.price}</b>
                </span>
              </div>
            </li>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <label htmlFor="search">Item Name</label>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <div>
          <ul>
            <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
              {itemList}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

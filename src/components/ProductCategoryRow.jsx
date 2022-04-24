import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th className="category-row" colSpan="2">
          {this.props.category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;

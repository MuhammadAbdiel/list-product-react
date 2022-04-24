import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>List Products</h1>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;

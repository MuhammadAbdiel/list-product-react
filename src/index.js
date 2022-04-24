import React from "react";
import ReactDOM from "react-dom/client";
import { PRODUCTS } from "./components/data";
import FilterableProductTable from "./components/FilterableProductTable";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FilterableProductTable products={PRODUCTS} />);

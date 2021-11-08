import Layout from "../../layout/Layout";
import Button from "../../common/Button";
import React, { Component } from "react";
import { useState, useRef } from "react";
import { createAdvert, getLatestAdverts } from "../service";
import "./Filters.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function Filters() {
  const [advertFilter, setAdvertFilter] = useState({
    name: "",
    price: [0, 0],
    sale: true,
    tags: [],
  });

  const [name, setName] = useState("");
  const [sale, setSale] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [tags, setTags] = useState([]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSale = (event) => {
    setSale(event.target.value);
  };
  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };
  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleTags = (event) => {
    const target = event.target;
    const value = Array.from(target.selectedOptions, (option) => option.value);
    setTags(value);
  };
  const handleSearch = async (event) => {
    event.preventDefault();
    advertFilter.name = name;
    advertFilter.sale = sale;
    advertFilter.price = [minPrice, maxPrice];
    advertFilter.tags = tags;

    console.log(advertFilter);
    try {
      // await getLatestAdverts();
      // await getadverts?
    } catch (error) {}
  };

  return (
    <nav className="header-nav">
      <h2>Filter by: </h2>
      <form onSubmit={handleSearch}>
        <label htmlFor="name">Name: </label>
        <input
          type="search"
          name="name"
          value={name}
          onChange={handleName}
        ></input>

        <br />
        <label htmlFor="price">Min price: </label>
        <input
          type="text"
          name="minprice"
          value={minPrice}
          onChange={handleMinPrice}
        ></input>
        <label htmlFor="price">Max price: </label>
        <input
          type="text"
          name="maxprice"
          value={maxPrice}
          onChange={handleMaxPrice}
        ></input>

        <br />
        <select name="sale" value={sale} onChange={handleSale}>
          <option value="true">VENTA</option>
          <option value="false">COMPRA</option>
        </select>
        <br />
        <label htmlFor="tags">Tags: </label>
        <select name="tags" multiple={true} value={tags} onChange={handleTags}>
          <option value="lifestyle">Lifestyle</option>
          <option value="mobile">Mobile</option>
          <option value="motor">Motor</option>
          <option value="work">Work</option>
        </select>
        <button>FILTRAR</button>
      </form>
    </nav>
  );
}
export default Filters;

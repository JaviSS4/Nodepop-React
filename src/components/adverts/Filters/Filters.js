import Layout from "../../layout/Layout";
import Button from "../../common/Button";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { createAdvert } from "../service";
import { Redirect } from "react-router";

const handleSearch = () => {};

function Filters() {
  return (
    <nav className="header-nav">
      <form onSubmit={handleSearch}>
        <input name="filter-name" type="search"></input>
        <input></input>
        <input></input>
        <input></input>
        <button></button>
      </form>
    </nav>
  );
}

export default Filters;

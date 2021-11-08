import Layout from "../../layout/Layout";
import Button from "../../common/Button";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { createAdvert } from "../service";
import { Redirect } from "react-router";

function NewAdvertPage() {
  const advert = new FormData();

  const [name, setName] = useState("");
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const photo = useRef(null);
  const [createdId, setCreatedId] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSale = (event) => {
    setSale(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleTags = (event) => {
    const target = event.target;
    //here
    const value = Array.from(target.selectedOptions, (option) => option.value);
    setTags(value);
  };

  const handlePhoto = (event) => {
    advert.append("photo", event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    advert.append("name", name);
    advert.append("sale", sale);
    advert.append("price", price);
    advert.append("tags", tags);
    try {
      const createdAdvert = await createAdvert(advert);
      setCreatedId(createdAdvert.id);
    } catch (error) {}
  };

  if (createdId) {
    return <Redirect to={`/adverts/${createdId}`} />;
  }

  return (
    <Layout title="Create your advert:">
      <div className="newAdvertPage">
        <form onSubmit={handleSubmit}>
          <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          ></input>
          <select name="sale" value={sale} onChange={handleSale}>
            <option value="true">VENTA</option>
            <option value="false">COMPRA</option>
          </select>

          <label for="tags">Tags: </label>
          <select
            name="tags"
            multiple={true}
            value={tags}
            onChange={handleTags}
          >
            <option value="lifestyle">Lifestyle</option>
            <option value="mobile">Mobile</option>
            <option value="motor">Motor</option>
            <option value="work">Work</option>
          </select>
          <label for="price">Price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handlePrice}
          ></input>
          <input type="file" ref={photo} onChange={handlePhoto} />
          <Button
            type="submit"
            className="newAdvert-submit"
            variant="primary"
            disabled={!name || !sale || !price || !tags[0]}
          >
            Enter
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default NewAdvertPage;

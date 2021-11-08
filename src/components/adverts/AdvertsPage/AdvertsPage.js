import { useEffect, useState } from "react";
import { getAdvert, getLatestAdverts } from "../service";
import classNames from "classnames";
import Layout from "../../layout";
import { Link } from "react-router-dom";
import Image from "../../common/Image";
import Button from "../../common/Button";
import Filters from "../Filters/Filters";
import {
  searchByName,
  searchByPrice,
  searchByTags,
  searchBySale,
} from "../service";

import styles from "./AdvertsPage.module.css";

const EmptyList = () => (
  <div className="no-adverts">
    <p>Create your own advert:</p>
    <Button as={Link} to="/adverts/new" variant="primary">
      Crear
    </Button>
  </div>
);

function AdvertsPage({ history, ...props }) {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

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

  const handleSearchName = async (event) => {
    event.preventDefault();
    try {
      await searchByName(name);
      setAdverts(adverts);
    } catch (error) {}
  };
  const handleSearchPrice = async (event) => {
    event.preventDefault();
    try {
      await searchByPrice([minPrice, maxPrice]);
      setAdverts(adverts);
    } catch (error) {}
  };
  const handlesearchTags = async (event) => {
    event.preventDefault();
    try {
      await searchByTags(tags, tags.length);
      setAdverts(adverts);
    } catch (error) {}
  };
  const handleSearchSale = async (event) => {
    event.preventDefault();
    try {
      await searchBySale(sale);
      setAdverts(adverts);
    } catch (error) {}
  };

  return (
    <Layout title="What are you buying? What are you selling?" {...props}>
      <nav className="header-nav">
        <h2>Filter by: </h2>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="search"
            name="name"
            value={name}
            onChange={handleName}
          ></input>

          <button onClick={handleSearchName}>FILTRAR</button>
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

          <button onClick={handleSearchPrice}>FILTRAR</button>
          <br />
          <select name="sale" value={sale} onChange={handleSale}>
            <option value="true">VENTA</option>
            <option value="false">COMPRA</option>
          </select>

          <button onClick={handleSearchSale}>FILTRAR</button>
          <br />
          <label htmlFor="tags">Tags: </label>
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

          <button onClick={handlesearchTags}>FILTRAR</button>
        </form>
      </nav>
      <div className={styles.advertsPage}>
        {console.log(adverts)}
        {!adverts.length ? (
          <EmptyList />
        ) : (
          <ul>
            {adverts.map((adverts) => (
              <li key={adverts.id}>
                <Link to={`/adverts/${adverts.id}`}>
                  {" "}
                  <article className="advert-listed">
                    <div className="advert-name">{adverts.name}</div>
                    <div className="advert-price">{adverts.price}</div>
                    {adverts.sale ? (
                      <div className="advert-sale">VENTA</div>
                    ) : (
                      <div className="advert-sale">COMPRA</div>
                    )}
                    <Image
                      className="advert-img"
                      src={`http://localhost:3001${adverts.photo}`}
                    />
                    <ul>
                      {adverts.tags.map((tag) => (
                        <li key={`${adverts.id}-${tag}`} className="advert-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;

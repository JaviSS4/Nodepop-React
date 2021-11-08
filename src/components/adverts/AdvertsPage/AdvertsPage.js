import { useEffect, useState } from "react";
import { getLatestAdverts } from "../service";
import classNames from "classnames";
import Layout from "../../layout";
import { Link } from "react-router-dom";
import Image from "../../common/Image";
import Button from "../../common/Button";
import Filters from "../Filters/Filters";

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

  /* const FilteredAdverts = adverts.filter(function (advertF) {
    return (
      advertF.name === advertFilter.name &&
      advertF.sale === advertFilter.sale &&
      advertF.price >= advertFilter.price[0] &&
      advertF.price <= advertFilter.price[1] &&
      advertF.tags.filter((item) => !advertFilter.tags.includes(item)) ===
        advertFilter.tags
    );
  });

  console.log(FilteredAdverts); */

  return (
    <Layout title="What are you buying? What are you selling?" {...props}>
      <Filters />
      <div className={styles.advertsPage}>
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

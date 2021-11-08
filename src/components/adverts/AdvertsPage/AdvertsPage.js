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

  return (
    <Layout title="What are you buying? What are you selling?" {...props}>
      <Filters />
      <div className={styles.advertsPage}>
        {!adverts.length ? (
          <EmptyList />
        ) : (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  {" "}
                  <article className="advert-listed">
                    <div className="advert-name">{advert.name}</div>
                    <div className="advert-price">{advert.price}</div>
                    {advert.sale ? (
                      <div className="advert-sale">VENTA</div>
                    ) : (
                      <div className="advert-sale">COMPRA</div>
                    )}
                    <Image
                      className="advert-img"
                      src={`http://localhost:3001${advert.photo}`}
                    />
                    <ul>
                      {advert.tags.map((tag) => (
                        <li key={`${advert.id}-${tag}`} className="advert-tag">
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

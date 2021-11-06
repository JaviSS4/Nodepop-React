import { useEffect, useState } from "react";
import { getLatestAdverts } from "../service";
import classNames from "classnames";
import Layout from "../../layout";
import "./AdvertsPage.css";

import styles from "./AdvertsPage.module.css";

console.log(styles);

function AdvertsPage(props) {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);
  return (
    <Layout title="Look at all these adverts" {...props}>
      <div className={styles.advertsPage}>
        Latest Adverts
        <ul>
          {adverts.map((advert) => (
            <li key={advert.id}>{advert.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;

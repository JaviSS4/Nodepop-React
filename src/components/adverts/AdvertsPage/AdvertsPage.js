import { useEffect, useState } from "react";
import { getLatestAdverts } from "../service";
import classNames from "classnames";
import Layout from "../../layout";

// import "./AdvertsPage.css";
import styles from "./AdvertsPage.module.css";

const adverts = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: "2021-03-15T18:23:57.579Z",
    id: 1,
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: "2021-03-15T18:24:56.773Z",
    id: 2,
  },
];

console.log(styles);

function AdvertsPage() {
  /* const [adverts, setAdverts] = useState([]);

  useEffect(() => {
     getLatestAdverts().then(setAdverts);
  }, []); */
  return (
    <Layout title="Look at all these adverts">
      <div className={styles.advertsPage}>
        Latest Adverts
        <ul>
          {adverts.map((advert) => (
            <li key={advert.id}>{advert.content}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;

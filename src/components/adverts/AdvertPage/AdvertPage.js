import Layout from "../../layout/Layout";
import React from "react";
import { getAdvert, deleteAdvert } from "../service";
import { useEffect, useState } from "react";
import Image from "../../common/Image";
import { Redirect } from "react-router";
import Button from "../../common/Button";

function AdvertPage({ match, location, history }) {
  const [advert, setAdvert] = useState({
    name: "",
    tags: [],
    photo: null,
  });
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    getAdvert(match.params.id)
      .then(setAdvert)
      .catch((error) => setError(error));
  }, [match.params.id]);

  const showConfirm = () => {
    setDeleting(false);
  };

  const handleDelete = () => {
    setDeleting(!deleting);
  };

  const confirmDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteAdvert(match.params.id);
      const { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      setError(error);
    }
  };

  if (error?.status === 404) {
    return <Redirect to="/404"></Redirect>;
  } else {
    return (
      <Layout title="Advert Detail">
        <article className="advert-detail">
          <div className="advert-detail-name">{advert.name}</div>
          <div className="advert-detail-price">{advert.price}</div>
          {advert.sale ? (
            <div className="advert-detail-sale">VENTA</div>
          ) : (
            <div className="advert-detail-sale">COMPRA</div>
          )}
          {advert.photo ? (
            <Image
              className="advert-detail-img"
              src={`http://localhost:3001${advert.photo}`}
            />
          ) : (
            <Image />
          )}
          <ul>
            {advert.tags.map((tag) => (
              <li key={`${advert.id}-${tag}`} className="advert-detail-tag">
                {tag}
              </li>
            ))}
          </ul>
        </article>
        <Button
          type="delete"
          variant="primary"
          className="delete-advert"
          value={false}
          onClick={showConfirm}
        >
          ELIMINAR ANUNCIO
        </Button>
        <div hidden={deleting}>
          <div>¿Estás seguro?</div>
          <Button
            type="delete"
            variant="primary"
            className="delete-advert-confirmation"
            onClick={confirmDelete}
          >
            SÍ
          </Button>
          <Button
            type="no"
            className="delete-advert-confirmation"
            value={true}
            onClick={handleDelete}
          >
            NO
          </Button>
        </div>
      </Layout>
    );
  }
}

export default AdvertPage;

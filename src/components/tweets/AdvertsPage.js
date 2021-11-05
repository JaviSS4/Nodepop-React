import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((data) => console.log(data));
  }, []);
  return (
    <div className="advertsPage">
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>{advert.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;

import Layout from "../../layout/Layout";

function AdvertPage({ match }) {
  // console.log(match);
  return (
    <Layout title="Advert Detail">
      <div>AdvertPage {match.params.id}</div>
    </Layout>
  );
}

export default AdvertPage;

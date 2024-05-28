import Layout from "../components/Layout";
import Container from "../components/Container";
import Error from "../components/Error";

export default function NotFound(context) {
  return (
    <div className="NotFound">
      <Layout context="notFound">
        <Container context="notFound">
          <Error />
        </Container>
      </Layout>
    </div>
  );
}

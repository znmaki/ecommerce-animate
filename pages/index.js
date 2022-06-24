import Advertisements from "../components/Advertisements";
import Header from "../components/Header";
import axios from "axios";
//redux
import { setProductList } from "../store/slices/catalogo";
import { useDispatch } from "react-redux";

export default function Home({ producto }) {
  const dispatch = useDispatch();
  dispatch(setProductList(producto))
  console.log(producto);
  return (
    <Header>
      <main>
        <Advertisements />
        <h1>holz</h1>
      </main>
    </Header>
  );
}

export async function getServerSideProps() {
  
  const url = "http://localhost:1337/api/catalogos?populate=*";
  const { data } = await axios(url);

  return {
    props: {
      producto: data.data,
    },
  };
}

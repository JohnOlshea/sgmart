import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

import Header from "../components/header";
import Footer from "../components/footer";

export default function home({ country }) {
  const { data: session } = useSession();

  return (
    <>
	  {console.log(session)}
      <div>
        <Header country={country} />
	  {
		  session ? "logged in" : "out"
	  }
        <Footer country={country} />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=sedhndcshglwov2w")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
	console.log(data)
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
      //country: {
        //name: "Nigeria",
        //flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360",
      //},
    },
  };
}


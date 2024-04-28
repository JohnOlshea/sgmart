import { useSession, signIn, signOut } from "next-auth/react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function home() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <Header />
	  {
		  session ? "logged in" : "out"
	  }
        <Footer />
      </div>
    </>
  );
}

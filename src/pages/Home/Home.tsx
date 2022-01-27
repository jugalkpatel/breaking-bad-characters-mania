import { Outlet } from "react-router-dom";

import { MaxWidthContainer } from "../../styles/common.styles";
import { Navbar } from "../../components";

function Home() {
  return (
    <MaxWidthContainer>
      <Navbar />
      <Outlet />
    </MaxWidthContainer>
  );
}

export { Home };

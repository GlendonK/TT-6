import React, { useEffect } from "react";
import Page from "./Page";

function Home() {
  return (
    <Page title="Home">
      <h2 className="text-center">
        Hello <strong>{localStorage.getItem("appUsername")}</strong>.
      </h2>
      <p className="lead text-muted text-center">Test HomePage</p>
    </Page>
  );
}

export default Home;

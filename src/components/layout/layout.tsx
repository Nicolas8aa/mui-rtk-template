import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Welcome User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        columns={20}
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Grid item>{children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;

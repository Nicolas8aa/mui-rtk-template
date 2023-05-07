import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import PrimarySearchAppBar from "../navbar/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Welcome User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimarySearchAppBar />
      <Grid
        container
        columns={20}
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;

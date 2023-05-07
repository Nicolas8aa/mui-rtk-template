import { Grid, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import PrimarySearchAppBar from "../navbar/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack>
      <PrimarySearchAppBar />
      {children}
    </Stack>
  );
};

export default Layout;

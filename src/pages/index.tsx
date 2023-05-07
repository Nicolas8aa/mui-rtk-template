import React from "react";
import { Box, Button, SpeedDialIcon, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import ThemeContext from "../utils/ThemeContext";
import SpeedIcon from "@mui/icons-material/Speed";

const IndexPage: NextPage = () => {
  const colorMode = React.useContext(ThemeContext);

  return (
    <>
      <Stack p={3}>
        <Typography variant="h1">H1-h1</Typography>
        <Typography variant="h2">H2-h2</Typography>
        <Typography variant="h3">H3-h3</Typography>
        <Typography variant="h4">H4-h4</Typography>
        <Typography variant="h5">H5-h5</Typography>
        <Typography variant="h6">H6-h6</Typography>
        <Typography variant="subtitle1">Subtitle1</Typography>
        <Typography variant="subtitle2">Subtitle2</Typography>
        <Typography variant="body1">Body1</Typography>
        <Typography variant="body2">Body2</Typography>
        <Typography variant="caption">Caption</Typography>
        <Typography variant="overline">Overline</Typography>

        <br />
        <Box>
          <Button variant="contained" onClick={colorMode.toggleColorMode}>
            Contained button
          </Button>
          <Button
            variant="contained"
            sx={{ fontWeight: 500 }}
            startIcon={<SpeedIcon />}
            onClick={colorMode.toggleColorMode}
          >
            Dashboard
          </Button>
          <Button variant="outlined">Outlined button</Button>
          <Button variant="text">Text button</Button>
        </Box>
      </Stack>
    </>
  );
};

export default IndexPage;

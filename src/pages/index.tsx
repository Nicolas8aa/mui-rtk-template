import React from "react";
import { Box, Button, SpeedDialIcon, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => {
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
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "flex-start" }}
        >
          <Button variant="contained">Contained button</Button>
          <Button variant="outlined">Outlined button</Button>
          <Button variant="text">Text button</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default IndexPage;

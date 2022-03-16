import React, { Component } from "react";
import Row from "./index";
import { Grid, Box, Typography, Link, Button, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function Application() {
  return (
    <Row>
      <Grid
        container
        direction="row"
        sx={{
          backgroundColor: "rgb(230,230,230)",
          borderRadius: "10px",
          padding: { md: "1rem 2rem", xs: "1rem" },
        }}
      >
        <Grid container md={12} justifyContent="space-between" direction="row">
          <Grid item xs={12} md={8}>
            <Grid container direction="column">
              <Grid sx={{ padding: { md: "2rem", xs: "0rem" } }} item>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontSize: { md: "1.25rem", xs: "1rem" },
                    fontWeight: "bold",
                  }}
                >
                  دانلود اپلیکیشن اُکالا
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    height: "3rem",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { md: ".875rem", xs: ".725rem" } }}
                  >
                    خرید آسان و راحت با تخفیف های جذاب لحظه ای، دانلود برای
                    سیستم عامل های اندروید و آیفون (iOS)
                  </Typography>
                  <Button
                    sx={{
                      color: "rgba(2, 160, 164, 1)",
                      marginRight: ".5rem",
                      display: { md: "inline-flex", xs: "none" },
                    }}
                    href="#text-buttons"
                    endIcon={<KeyboardArrowLeftIcon />}
                  >
                    آموزش نصب
                  </Button>
                </Box>
                <Grid display={{ md: "block", xs: "none" }}>
                  <Box
                    mt={3}
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      direction: "row",
                    }}
                  >
                    <img
                      src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FGooglePlay.png&w=256&q=75"
                      alt=""
                    />
                    <img
                      src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FCoffeBazar.png&w=256&q=75"
                      alt=""
                    />
                    <img
                      src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FMyket.png&w=256&q=75"
                      alt=""
                    />
                    <img
                      src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FDirectDownload.png&w=256&q=75"
                      alt=""
                    />
                    <img
                      src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FAppStore.png&w=256&q=75"
                      alt=""
                    />
                  </Box>
                </Grid>
                <Grid
                  display={{ md: "none", xs: "block" }}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Box
                    mt={3}
                    sx={{
                      flexWrap: "wrap",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: { sm: "center", xs: "flex-start" },
                      flexDirection: { sm: "column", xs: "row" },
                    }}
                  >
                    <Box
                      sx={{
                        borderLeft: {
                          xs: "1px solid rgba(0,0,0,0.1)",
                          sm: "none",
                        },
                      }}
                      display={"flex"}
                      flexDirection={{ sm: "row", xs: "column" }}
                    >
                      <img
                        style={{ margin: { xs: ".5rem 1rem", sm: "0.5rem" } }}
                        src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FGooglePlay.png&w=256&q=75"
                        alt=""
                      />
                      <img
                        style={{ margin: { xs: ".5rem 1rem", sm: "0.5rem" } }}
                        src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FCoffeBazar.png&w=256&q=75"
                        alt=""
                      />
                      <img
                        style={{ margin: { xs: ".5rem 1rem", sm: "0.5rem" } }}
                        src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FMyket.png&w=256&q=75"
                        alt=""
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={{ sm: "row", xs: "column" }}
                    >
                      <img
                        style={{ margin: { xs: ".5rem 1rem", sm: "0.5rem" } }}
                        src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FDirectDownload.png&w=256&q=75"
                        alt=""
                      />
                      <img
                        style={{ margin: { xs: ".5rem 1rem", sm: "0.5rem" } }}
                        src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FAppStore.png&w=256&q=75"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} sx={{ display: { xs: "none", md: "block" } }}>
            <Box>
              <img
                style={{
                  width: "200px",
                  height: "208px",
                }}
                src="https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FmobileMockup.png&w=640&q=75"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Row>
  );
}
export default Application;

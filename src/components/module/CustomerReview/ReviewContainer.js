import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import title_seperator from "../../../asserts/logo/title-seperator.png";
import ReviewCard from "./ReviewCard";

const useStyle = makeStyles({
  right_desc: {
    fontSize: "2rem",
    paddingLeft: window.innerWidth < 900 ? "0px" : "10%",
    marginTop: window.innerWidth < 900 ? "40px" : "0",
    color: "393c3f",
    fontWeight: "300",
    lineHeight: "3.4rem",
  },
  load_btn: {
    padding: "16px 10rem",
    width: "fit-content",
    borderRadius: "10px",
    fontSize: "1.6rem",
    fontWeight: "600",
    marginTop: "40px",
    color: "white",
    backgroundColor: "var(--yellow)",
    transition: "all .3s",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow: "4px 4px 10px #eee",
    },
  },
});

const ReviewContainer = () => {
  // eslint-disable-next-line
  const classes = useStyle();

  return (
    <div style={{ background: "aliceblue" }}>
      <div className="app_container" style={{ overflow: "hidden" }}>
        <Box sx={{ padding: "15rem 0px" }}>
          <Grid container marginBottom={"4rem"}>
            <Grid item md={6} sm={12} sx={{ padding: "0px 15px" }}>
              <Box>
                <Typography variant="h2" fontSize={"6rem"} fontFamily={"lora"}>
                  Customer Reviews
                </Typography>
                <img
                  src={title_seperator}
                  alt="___"
                  style={{ marginTop: "10px" }}
                />
              </Box>
            </Grid>
            {/* <Grid item md={6} sm={12} sx={{ padding: "0px 15px" }}>
          <div className={classes.right_desc}>
          Orci varius natoque penatibus et magnis dis turient montes nascetur ridiculus mus. Cras eleifend tellus sed congue consectetur, velit turpis faucibus odio eget volutpat odio lectus eu erat.
          </div>
        </Grid> */}
          </Grid>
          <Grid item sm={12}>
            <ReviewCard />
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default ReviewContainer;

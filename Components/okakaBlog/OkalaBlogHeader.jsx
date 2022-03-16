import React from "react";
import { Box, Grid } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Typography } from "@mui/material";

const OkalaBlogHeader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "83rem",
          alignContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          marginBottom: "5px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            اُکالا بلاگ
          </Typography>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                sx={{ fontSize: "14px", color: "#02a0a4", fontWeight: "bold" }}
              >
                مشاهده همه
              </Typography>
            </div>
            <div>
              <Typography
                sx={{ fontSize: "14px", color: "#02a0a4", fontWeight: "bold" }}
              >
                <ArrowBackIosNewOutlinedIcon />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OkalaBlogHeader;

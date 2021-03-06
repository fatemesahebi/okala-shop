import * as React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormSection from "./FormSection";

const BrandFilter = ({
  setFilterBrand,
  filterBrand,
  brandsOfCategory,
  setBrandsOfCategory,
}) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-start", padding: "1rem" }}
    >
      <Box
        display={{
          xl: "block",
          lg: "block",
          md: "block",
          sm: "none",
          xs: "none",
        }}
      >
        <Accordion
          sx={{
            width: "20rem",
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
            borderRadius: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                borderRight: "4px solid rgba(124, 200, 204, 1)",
                height: "1rem",
                top: ".5rem",
                paddingRight: ".41rem",
                right: "0",
                fontWeight: "bolder",
              }}
            >
              {" "}
              برندهای موجود
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              height: "300px",
              width: "308px",
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            <FormSection
              brandsOfCategory={brandsOfCategory}
              setFilterBrand={setFilterBrand}
              filterBrand={filterBrand}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default BrandFilter;

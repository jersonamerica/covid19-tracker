import React from "react";
import { Grid } from "@material-ui/core";
import { GridItem } from "../";

import styles from "./Cards.module.css";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  isLoading,
}) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <GridItem
          title="Infected"
          value={confirmed?.value}
          lastUpdate={lastUpdate}
          isLoading={isLoading}
        />
        <GridItem
          title="Recovered"
          value={recovered?.value}
          lastUpdate={lastUpdate}
          isLoading={isLoading}
        />
        <GridItem
          title="Deaths"
          value={deaths?.value}
          lastUpdate={lastUpdate}
          isLoading={isLoading}
        />
      </Grid>
    </div>
  );
};

export default Cards;

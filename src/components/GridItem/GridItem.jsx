import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import Skeleton from "@material-ui/lab/Skeleton";
import cx from "classnames";

import styles from "./GridItem.module.css";

const GridItem = ({ title, value, lastUpdate, isLoading }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[title.toLowerCase()])}
    >
      <CardContent>
        <Typography gutterBottom color="textSecondary">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {isLoading ? (
            <Skeleton variant="text" width={100} />
          ) : (
            <CountUp start={0} end={value} duration={2.5} separator="," />
          )}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default GridItem;

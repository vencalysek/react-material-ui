import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper} from "@material-ui/core";
import CardComponent from "./CardComponent";

const Content = () => {
  const APP_KEY = "75d57dea501f9ff5ad7c2d675944ed42";
  const APP_ID = "bf4a5251";

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () =>
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.hits);
      })
      .catch(err => {
        console.error(err);
      });

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    // <Grid container spacing={3}>
    <Grid container spacing={3}>
      {recipes.map(recipe => (
        <Grid
          item
          alignContent="stretch"
          justify="center"
          xs={12}
          sm={6}
          md={4}
          lg={3}>
          <Box width={1}>
            <CardComponent recipe={recipe.recipe} />
          </Box>
        </Grid>
      ))}</Grid>
  );
};

export default Content;


import React, { Component,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MovieContext } from '../context/MoviesContext';
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 645,
    marginBottom: '4px'
  },
  media: {
    height: 450,
    width: 345,
    objectFit: "cover",
    
  },
  link : {
    textDecoration: 'none',
    color : 'inherit'
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();
  const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);

  return (
    <Grid item xs={3} style={{marginBottom: '15px'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data?.image?.medium?data.image.medium:data.Imgurl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.genres.map((g,index,arr)=>arr.length-1==index ? `${g}` :  `${g}, `)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  onClick={()=>deleteMovie(data.id)} size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
        <Link className={classes.link} to={{
                pathname: '/Movies/editmovie',
                state: {data}
            }}>Edit</Link>
        </Button>
      </CardActions>
    </Card>
    </Grid>
    
  );
}
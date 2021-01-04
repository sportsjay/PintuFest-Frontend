import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: 300,
  },
  media: {
    height: 140,
  },
}));

export default function CardLink(props) {
  const classes = useStyles();

  const link = props.link;
  const title = props.title;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Game 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            description 1
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Register
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

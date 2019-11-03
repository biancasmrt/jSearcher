import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    marginBottom: 10,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Display(props) {
  const classes = useStyles();

  return (
    <Grid className="all">
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" display="inline" gutterBottom>
            Aired {props.date}
            <br/>Q:&nbsp;
        </Typography>
        <Typography variant="subtitle1" component="h2" display="inline">
            {props.question}<br/>
        </Typography>
        <Typography className={classes.title} color="textSecondary" display="inline" gutterBottom>
          A:&nbsp;
        </Typography>
        <Typography variant="body1" component="h2" display="inline">
            {props.answer}<br/>
        </Typography>
        <Typography className={classes.title} color="textSecondary" display="inline" gutterBottom>
          Category: &nbsp;
        </Typography>
        <Typography variant="body1" component="h2" display="inline">
            {props.category}<br/>
        </Typography>
        <Typography className={classes.title} color="textSecondary" display="inline" gutterBottom>
          Level &nbsp;
        </Typography>
        <Typography variant="body1" component="h2" display="inline">
            {props.difficulty}
        </Typography>
        
      </CardContent>
    </Card>
    </Grid>
  );
}
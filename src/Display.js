import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 10
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
    marginBottom: 20,
  },
});

export default function Display(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.date}
        </Typography>
        <Typography variant="subtitle1" component="h2">
            
            Q: {props.question}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Answer
        </Typography>
        <Typography variant="body1" component="h2">
            {props.answer}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Category
        </Typography>
        <Typography variant="body1" component="h2">
            {props.category}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Level 
        </Typography>
        <Typography variant="body1" component="h2">
            {props.difficulty}
        </Typography>
        
    <Grid/>
      </CardContent>
    
    </Card>
  );
}
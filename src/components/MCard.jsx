import React from 'react';

//* Material-UI Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function MCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="360"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          {
            props.isPremium ? (
              <span class="badge bg-success">Premium</span>
            ):(
              null
            )
          }
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>₹{props.price}/-</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default MCard;
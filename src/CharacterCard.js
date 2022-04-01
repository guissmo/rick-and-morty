import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import testPic from '../src/test.jpg'

function CharacterCard() {
    return(
        <div className="col-lg-4 card-container">
        <Card>
            <CardMedia
              component="img"
              height="140"
              image={testPic}
              alt="it is rick"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mr. Poopybutthole
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: Earth
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: Alive
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </div>
    )
}

export default CharacterCard;

import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { BsChatLeftTextFill } from 'react-icons/bs'

const DogCard = ({ dog }) => {
  return (
    <Grid item key={dog} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            // pt: '56.25%',
            pt: '75%',
            borderRadius: '50%',
          }}
          image="/images/placeholder.jpg"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {dog.name}
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/dog/view/${dog._id}`}>
            <BsInfoCircle
              className="text-2x1 text-green-800 mr-6"
              size="30px"
            />
          </Link>
          <Link to={`/dog/comment/${dog._id}`}>
            <BsChatLeftTextFill
              className="text-2x1 text-blue-600 mr-6"
              size="30px"
            />
          </Link>
          <Link to={`/dog/edit/${dog._id}`}>
            <AiOutlineEdit
              className="text-2x1 text-yellow-600 mr-6"
              size="30px"
            />
          </Link>
          <Link to={`/dog/remove/${dog._id}`}>
            <MdOutlineDelete
              className="text-2x1 text-red-600 mr-6"
              size="30px"
            />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default DogCard

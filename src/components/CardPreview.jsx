import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {Link} from "react-router-dom"

export const CardPreview = ({cardTitle, readingDuration, url}) => {
  return (
    <div className="single-card">
        <Card sx={{ width: "300px", height: '15rem',backgroundColor:"#f3eff7"}}>
          <CardContent sx={{ml: "8px", mt:"8px"}}>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            📝Survey
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight:"700" }} variant="h5" component="div">
            {cardTitle}
            </Typography>
            <Typography sx={{ mb: 1, mt:1 }} color="text.secondary">
            {readingDuration}
            </Typography>
          </CardContent>
          <CardActions sx={{ml: "8px", mt:"8px"}}>
            <Link to={`${url}`}>
              <Button size='small' variant="contained" color="success">
              Take Survey
              </Button>
            </Link>
            <Button sx={{marginLeft:"5px"}} size='small' variant="outlined" color="error">
            Close Survey
            </Button>
          </CardActions>
      </Card>
    </div>
  )
}

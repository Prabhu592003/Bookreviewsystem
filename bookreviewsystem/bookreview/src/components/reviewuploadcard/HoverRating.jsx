import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useEffect } from 'react';

const labels = {

  1: 'Ineffectual',

  2: 'Modest',

  3: 'Ok',

  4: 'Good',

  5: 'Excellent',
};

function getLabelText(value) {
   
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;

}

export default function HoverRating(props) {
    const {setRating} = props
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    useEffect(() => {
      
      setRating(value)
      }, [value,setRating]);
    
 
  


  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        style={{color:'orangered'}}
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{color:'white'}} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
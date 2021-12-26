import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList(props) {    
  return (       
    <ImageList  sx={{ width: '120%', height: 380, gridAutoFlow: 'column'}} cols={6} >      
      {
      props.movieData.map((item) => (
        <ImageListItem key={item.id} rowHeight={250}>
          <img          
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about ${item.title}`}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </ImageListItem>
      ))}
    </ImageList>    
  );
}
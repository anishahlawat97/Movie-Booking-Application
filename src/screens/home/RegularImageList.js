import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { height } from '@mui/system';

export default function StandardImageList(props) {
  return (
    <ImageList sx={{ width: '76%',  flexDirection: 'row', mt: '16px', ml: '16px' }} gap={25} cols={4} rowHeight={350} >
      {props.movieData.map((item) => (
        <ImageListItem key={item.id} sx={{cursor:'pointer'}} >
          <img
            src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar
            title={item.title}
            subtitle={"Release Date: "+new Date(item.release_date).toDateString()}
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

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';


export default function StandardImageList(props) {
  const [movieList, setmovieList] = React.useState(props.movieData);
  console.log(props.filterState)
  const [filteredList, setFilteredList] = React.useState(movieList);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current){
      // if (movieList && movieList.length > 0) {
        // console.log("before filter", movieList)
        const newList = movieList
        .filter(item => {
          if (item.title.toLowerCase() == (props.filterState.movieName.toLowerCase())) {
            return item;
          }
          // console.log("props genre", props.filterState.genreName)
          // console.log("item.genres", item.genres)
           if (item.genres.includes(props.filterState.genreName[0]) || item.genres.includes(props.filterState.genreName[1])) {     
            // console.log("genre")   
            return item;
          } 
          // console.log("artist 2: ",item.artists[1].first_name )        
          if(props.filterState.personName.length>0){            
            if (((item.artists[0].first_name + " " + item.artists[0].last_name).includes(props.filterState.personName[0])) || ((item.artists[1].first_name + " " + item.artists[1].last_name).includes(props.filterState.personName[0]))) {
              // console.log("artist")
              return item;
            }}
          // console.log("props. ", props.filterState.startDate)
          // console.log("item.", new Date(item.release_date).toISOString().slice(0, 10))
          if(props.filterState.startDate && props.filterState.endDate){
            const filterDate = {
              start_date: props.filterState.startDate,
              end_date: props.filterState.endDate,
            };
            console.log("start", filterDate.start_date)
            if(new Date(item.release_date).toISOString().slice(0, 10) >= filterDate.start_date && new Date(item.release_date).toISOString().slice(0, 10) <= filterDate.end_date){
            return item;
            }          
        }          
        })
        setFilteredList(newList)
        console.log("after", newList);
      // }
    }
    else {
      isMounted.current = true;
      setFilteredList(movieList)
    }
  }, [props.filterState])

  function imageClickHandler(){
    props.imageOnClick(true)
  }
  return (
    <ImageList sx={{ width: '76%', flexDirection: 'row', mt: '16px', ml: '16px' }} gap={25} cols={4} rowHeight={350} >
      {filteredList && filteredList.length>0?
      filteredList.map((item) => (
        <Link onClick={imageClickHandler} to={`/details/${item.id}`}><ImageListItem  key={item.id} sx={{ cursor: 'pointer' }} >
          <img
            src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={"Release Date: " + new Date(item.release_date).toDateString()}     
          />
        </ImageListItem>
        </Link>
      )):
      'No data'}
    </ImageList>
  );
}

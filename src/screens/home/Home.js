import React from "react";
import Header from '../../common/header/Header.js';
import { Component } from "react";
import './Home.css';
import MovieData from '../../common/moviesData.js';
import ImageList from './ImageList.js';
import RegularImageList from './RegularImageList';
import FilterCard from './FilterCard.js';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            movieName: '',
            genreName: [],
            personName: [],           
            startDate: '',
            endDate: '' ,
            name: ''                  
        };
        this.setState= this.setState.bind(this)
    }   

    // movieListHandler =(event)=>{
    //     event.preventDefault();
    //     console.log(event.target.title.value)
    //     if(MovieData && MovieData.length>0){
    //         console.log("before filter", MovieData)
    //         const newList = MovieData.filter(item =>{            
    //             if(item.title === (event.target.title)){
    //                 console.log("after", newList);
    //                 return this.setState({newList:  });
                    
    //         }
    //         })
    //     }
    //   }
    
    render(){
        return <div>
                    <Header/>
                    <div className="heading">
                        <span>Upcoming Movies</span>                        
                    </div>
                    <div className="imageListDiv">
                        <ImageList className="imageList" movieData={MovieData}/>
                    </div>
                    <div className="flex-container">
                        <div className="left">
                           <RegularImageList filterState={this.state} movieData={MovieData}/>
                        </div>
                        <div className="right">
                            <FilterCard  setFilterState={this.setState}/>
                        </div>
                    </div>
               </div>
    }
}

export default Home;
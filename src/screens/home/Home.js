import React from "react";
import Header from '../../common/header/Header.js';
import { Component } from "react";
import './Home.css';
import MovieData from '../../common/moviesData.js';
import ImageList from './ImageList.js';
import RegularImageList from './RegularImageList';


class Home extends Component{
    
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
                            <RegularImageList movieData={MovieData}/>
                        </div>
                        <div className="right"></div>
                    </div>
               </div>
    }
}

export default Home;
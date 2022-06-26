import React from "react";
import { useState } from 'react';                   //SO WE CAN UPDATE TEXT UNDER ICONS
import { Link } from 'react-router-dom';
import {makeStyles} from '@mui/styles';           //SO WE CAN USE CSS TO STYLE OUR FOOTER
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';

const useStyles = makeStyles({
    root: {
        backgroundColor:"#131921",
        paddingTop: "1rem",
        paddingBottom: "1.15rem",
        marginTop: "50px",
    }
})

function Footer() {

    const handleClickF = () => {
        window.open("http://facebook.com");
      };
      const handleClickT = () => {
        window.open("http://twitter.com");
      };
      const handleClickI = () => {
        window.open("http://instagram.com");
      };
      const handleClickY = () => {
        window.open("http://youtube.com");
      };

    const [value, setValue] = React.useState(0)

    return (
        <div>
            <BottomNavigation className= {useStyles().root} showLabels value={value} onChange={(event, newValue)=>{setValue(newValue)}}>
                <BottomNavigationAction onClick={handleClickF} label="Facebook" value="recents" style={{color:"#3b5998"}} icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
                <BottomNavigationAction onClick={handleClickT} label="Twitter" value="favorites" style={{color:"#1DA1F2"}} icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
                <BottomNavigationAction onClick={handleClickI} label="Instagram" value="nearby" style={{color:"#C13584"}} icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
                <BottomNavigationAction onClick={handleClickY} label="YouTube" value="folder" style={{color:"#c4302b"}} icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
            </BottomNavigation>
             
        </div>
    )
}

export default Footer
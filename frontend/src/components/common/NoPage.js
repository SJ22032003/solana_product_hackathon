import { Typography } from '@mui/material';
import React from 'react'
import noResult from "../assets/noresult.svg";
import pageNotFound from "../assets/pagenotfound.svg";

function NoPage({notFound}) {
  return (
    <div>
        <center>
            <img src={notFound ?  pageNotFound : noResult } style={{width:"300px", margin:"80px 0 0 0"}} alt="" />
            <Typography variant="h5" style={{margin:"20px 0 0 0"}}>{notFound ? "Page Not Found" : "No Result Found"}</Typography>
        </center>
    </div>
  )
}

export default NoPage
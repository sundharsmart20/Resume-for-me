import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const NextPage1=()=>{
    return(
        <>
        <div style={{'position':'relative','top':'40px','paddingLeft':'60px'}} class="row">  
        <p className="gradient-border" style={{'position':'relative','top':'40px','border':'2px solid black','width':'300px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>PERSONAL PROFILE </p>
            <ul  style={{'padding':'60px'}}>
                <li><span>Father’s Name : </span>Mr.I.Paramasivan </li>
                <li><span>Mother’s Name : </span>Mrs.P.Venmathi </li> 
                <li><span>Date of birth : </span>24-02-2000</li> 
                <li><span> Nationality : </span> Indian</li>  
                <li><span>Language known :  </span> Tamil&English</li>          
            </ul>
    </div>
    <div  style={{'position':'relative','top':'120px','padding':'60px','fontWeight':'bold'}} class="d-flex justify-content-between">
        <div class="row">
            <span>PLACE : </span>
            <span>DATE : </span>
        </div>
        <div class="row">
            <span>[SUNDHARESHWARAN P]</span>
        </div>
    </div>

</>
    )
}
export default  NextPage1;
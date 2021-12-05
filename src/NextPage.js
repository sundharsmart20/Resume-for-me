import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const NextPage=()=>{
    return(
        <div >
            
            <div style={{'paddingLeft':'60px','marginTop':'460px'}} class="row ">
                <span className="gradient-border" style={{'position':'relative','top':'-400px','border':'2px solid black','width':'200px','borderRadius':'20px 0 20px 0','textAlign':'center'}} id="gradient-border">ACADEMIC PROJECT</span>
            </div>
        <div style={{'position':'relative','top':'-435px','padding':'60px'}}>
            <ul class="nav nav-tabs"  id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><span class="badge bg-info text-dark">Project1</span></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><span class="badge bg-primary">Project2</span></button>
                </li>
              
                </ul>
                <div class="tab-content"  id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                       <div style={{'padding':'30px'}}> 
                            <p ><span>Title: </span> ONLINE LEAVE MANAGEMENT SYSTEM </p>
                    
            
                            <p><span>Description </span> The Application is allowed to send the leave form to the receiver without meeting the receiver.</p>
                            <p><span>Tools: </span>HTML,CSS,MYSQL</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div style={{'padding':'30px'}}> 
                            <p ><span>Title: </span> NETWORK PACKET SNIFFER  </p>
                    
            
                            <p><span>Description </span>  The Packet Sniﬀer allows the computer to examine and analyze all the traﬃc passing by its network connection.</p>
                            <p><span>Tools: </span> java swing and diﬀerent protocols.</p>
                        </div>
                    </div>
                </div>
        </div>

         <div style={{'position':'relative','top':'-540px','paddingLeft':'60px'}} class="row">  
            <p className="gradient-border" style={{'position':'relative','top':'40px','border':'2px solid black','width':'300px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>CO-CURRICULAR ACTIVITIES </p>
                <ul  style={{'padding':'60px'}}>
                    <li>Presented a paper on “EFFICIENT CACHE SUPPORTED PATH PLANNING ON ROADS“at Coimbatore Institute of Technology </li>
                    <li>Presented a paper on “BLUE EYES TECHNOLOGY” at Mahendra Engineering College </li>
                    <li>Attended webinar on “Virtual & Augmented Reality in industry 4.0” at Velammal Engineering College </li>
                    <li>Attended a value added course on “BUILDING BLOCKSOF JAVA” at Kongunadu College of Engineering and Technology</li>
                </ul>
        </div>
    <div style={{'marginTop':'-70px'}}>
        <div style={{'position':'relative','top':'-540px','paddingLeft':'60px'}} >  
            <p className="gradient-border" style={{'position':'relative','top':'40px','border':'2px solid black','width':'300px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>INTERNSHIP </p>
                <ul  style={{'padding':'60px'}}>
                    <li>Attended “Android App Development” internship for 15days on SILICON SOFTWARE SERVICES from Sep 16th 2020 to Sep 30th 2020. </li>
                    <li>Attended “Front End Development” course for the period of one month. </li>                  
                </ul>
        </div>

        <div style={{'position':'relative','top':'-540px','paddingLeft':'60px'}}>  
            <p className="gradient-border" style={{'position':'relative','top':'40px','border':'2px solid black','width':'300px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>ACHIEVEMENT </p>
                <ul  style={{'padding':'60px'}}>
                    <li> Done a training on “CISCO(MODULE 1 & MODULE 2)” on a period of three months at Kongunadu college of engineering and technology. </li>              
                </ul>
        </div>
    </div>
       

       



        </div> 
    )
}
export default NextPage;

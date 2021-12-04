import React from 'react';

const NextPage=()=>{
    return(
        <div class="container" >
        <div class="row justify-content-between" style={{'padding':'50px'}}>
            <div style={{'padding':'50px'}} class="row justify-content-start">
                <p><span>Description </span> The Application is allowed to send the leave form to the receiver without meeting the receiver.</p>
                <p><span>Tools: </span>HTML,CSS,MYSQL</p>
            </div>
        <div style={{'position':'relative','top':'-60px'}} class="row justify-content-between">  
            <p style={{'position':'absolute','top':'40px','border':'2px solid black','width':'230px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>CO-CURRICULAR ACTIVITIES </p>
                <ul  style={{'padding':'50px','position':'relative','top':'40px'}}>
                    <li>Presented a paper on “EFFICIENT CACHE SUPPORTED PATH PLANNING ON ROADS“at Coimbatore Institute of Technology </li>
                    <li>Presented a paper on “BLUE EYES TECHNOLOGY” at Mahendra Engineering College </li>
                    <li>Attended webinar on “Virtual & Augmented Reality in industry 4.0” at Velammal Engineering College </li>
                    <li>Attended a value added course on “BUILDING BLOCKSOF JAVA” at Kongunadu College of Engineering and Technology</li>
                </ul>
        </div>
        </div>
        </div>
    )
}
export default NextPage;

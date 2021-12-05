import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiMailFill,RiPhoneFill } from "react-icons/ri";
import img from './IMG-20210803-WA0004.jpg'

const Head=()=>{
    return(
        <div >
        <div class="container" >
            <div class="row justify-content-between" style={{'padding':'50px'}}>
            <div class="col justify-content-start">
                <p style={{'font-size': '20px','font-weight': 'bold'}}><span>SUNDHARESHWARAN P</span></p>
                <p><span>45,parvathipuram 1<sup>st</sup> street,</span></p>
                <p><span>Musiri,Trichy-621211</span></p>
            </div>
            <div class="col-5  align-self-end" style={{}}>
                <p><span style={{'color':'rebeccapurple'}}><RiMailFill /></span> <span>sundharsmart20@gmail.com</span></p>
                <p><span style={{'color':'green'}}><RiPhoneFill /> </span><span>8344719443</span></p>
            </div>         
            </div>
           
            <div class="d-flex justify-content-center">
            <div class="bordering"></div> <img src={img}  class="rounded-circle  shadow-lg p-3 mb-5 bg-body rounded" style={{'top':'-80px','position':'relative','width':'150px','height':'150px'}} />
            </div>
            
            <div style={{'padding':'50px','marginTop':'50px'}} class="row justify-content-start">
                <span className="gradient-border"  style={{'position':'relative','top':'-170px','border':'2px solid black','width':'195px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>CAREER OBJECTIVE</span>
                <p style={{'position':'relative','top':'-160px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking for an opportunity to serve in an influential organisation to the best of my ability as a brave,honest,hard working and dedicated person to develop effective solutions by examining my knowledge and skills.</p>
            </div>
            <div style={{'padding':'50px','marginTop':'30px'}} class="row justify-content-start">
                <span className="gradient-border" style={{'position':'relative','top':'-240px','border':'2px solid black','width':'250px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>ACADEMIC CURRICULUM</span>
                <table style={{'position':'relative','top':'-250px'}} class="table">
                        <thead>
                            <tr>
                            <th scope="col">Degree/Course</th>
                            <th scope="col">Institute/College</th>
                            <th scope="col">University/Board</th>
                            <th scope="col">Percentage/CGPA</th>
                            <th scope="col">Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                            <th scope="row">BE(CSE)</th>
                            <td>Kongunadu College of Engineering and Technology</td>
                            <td>Anna University</td>
                            <td>7.9</td>
                            <td>2021</td>
                            </tr>
                            <tr class="text-center">
                            <th scope="row">HSLC</th>
                            <td>Mullai Higher Secondary School</td>
                            <td>Stateboard</td>
                            <td>90%</td>
                            <td>2017</td>
                            </tr>
                            <tr class="text-center">
                            <th scope="row">SSLC</th>
                            <td>Government Boys Higher Secondary School</td>
                            <td>Stateboard</td>
                            <td>85%</td>
                            <td>2015</td>
                            </tr>
                        </tbody>
                        </table>
            </div>
            <div style={{'padding':'50px','marginTop':'20px'}} class="row justify-content-start">
                <span className="gradient-border" style={{'position':'relative','top':'-330px','border':'2px solid black','width':'198px','borderRadius':'20px 0 20px 0','textAlign':'center'}}>AREA OF EXPERTISE</span>
                <p style={{'position':'relative','top':'-320px','left':'40px'}}>Programming Skills: <span>JAVA</span></p>
                <p style={{'position':'relative','top':'-320px','left':'40px'}}>Web Technology: <span>HTML,CSS</span></p>
                <p style={{'position':'relative','top':'-320px','left':'40px'}}>Area of Interest: <span>Web Development</span></p>
                
            </div>
        
        </div>
        </div>
    )
}
export default Head;

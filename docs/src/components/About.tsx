
import * as React from 'react';
import { Image,  Row, Col } from 'react-bootstrap';
import ReactMarkdown  from 'react-markdown';
import remarkGfm from 'remark-gfm';
const headShot = require("../../images/justheadmed.jpg");
//const myText = require("../../data/cv.md");
export class About extends React.Component<any, any> {

    constructor(props) {
        super(props); 
        this.state = { info:null};
        
        //fetch('https://gist.githubusercontent.com/StevenMDrucker/89d3aeba972f1f44bf7454928c12e117/raw/Bio.md')                
        //fetch(myText)                
        //fetch('https://stevenmdrucker.github.io/ResearchContent/CV.md')
        fetch('https://stevenmdrucker.github.io/ResearchContent/Bio.md')        
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed with HTTP code " + response.status);
            }
            return(response.text())
        }).then(text=> {
            this.setState( {info: text})
        });
    }

    render() {
        return(
            <div>
             <Col lg={2} md={2} sm={1}>
             </Col>
             <Col lg={8} md={8} sm={10}>        
             <div className="bio">
               <Row>
                   <Col lg={3} md={4} sm={5}>
                       <Image src={headShot} responsive></Image>
                   </Col>
                   <Col lg={9} md={8} sm={5}>
                       <div>                           
                           <ReactMarkdown children={this.state.info} remarkPlugins={[remarkGfm]} />
                        </div>
                   </Col>
   
                </Row>
           </div>
             </Col>          
             <Col lg={3} md={2} sm={1}>
             </Col>       
   
           </div>
           )
    }
}
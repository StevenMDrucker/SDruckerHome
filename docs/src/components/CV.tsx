
import * as React from 'react';

import { Image, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// const myText = require("../../../data/cv.md");
const headShot = require("../../images/justheadmed.jpg");


export class CV extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { info: null };

        //fetch('https://gist.githubusercontent.com/StevenMDrucker/89d3aeba972f1f44bf7454928c12e117/raw/Bio.md')                        
        fetch('https://stevenmdrucker.github.io/ResearchContent/CV.md')                  
        // fetch('https://stevenmdrucker.github.io/ResearchContent/CV.test.md')                  
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed with HTTP code " + response.status);
                }
                return (response.text())
            }).then(text => {
                this.setState({ info: text })
                // this.setState( {info: myText})
            });
    }

    render() {
        return (
            <div>
                {/* <Col lg={2} md={2} sm={1}>
                 </Col> */}
                <Col lg={12} md={12} sm={12}>
                    <div className="cv">
                        <Row>
                            <Col lg={1} md={1} sm={1}></Col>
                            <Col lg={12} md={12} sm={12}>
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

    // render2() {
    //     return (
    //         <div id="cv" className="instaFade">
    //             <div className="mainDetails">
    //                 <div id="headshot" className="quickFade">
    //                     <img src={headShot} alt="Steven M Drucker<" />
    //                 </div>

    //                 <div id="name">
    //                     <h1 className="quickFade delayTwo"><b>Steven M Drucker</b></h1>
    //                     <h2 className="quickFade delayThree">Principle Researcher</h2>
    //                     <h3 className="quickFade delayThree">Microsoft Research</h3>
    //                 </div>

    //                 <div id="contactDetails" className="quickFade delayFour">
    //                     <ul>
    //                         <li>email: <a href="mailto:sdrucker@microsoft.com" target="_blank">sdrucker@microsoft.com</a></li>
    //                         <li>web: <a href="https://stevenmdrucker.github.io/">www.steven-drucker.com</a></li>
    //                         <li>office: 425-703-5850</li>
    //                         <li>vidoes: <a href="https://www.youtube.com/channel/UCgh_BTNsTeI7MScu6e-9Yxw">youtube link</a></li>
    //                     </ul>
    //                 </div>
    //                 <div className="clear"></div>
    //             </div>

    //             <div id="mainArea" className="quickFade delayFive">
    //                 <section>
    //                     <article>
    //                         <div className="sectionTitle">
    //                             <h1>Personal Profile</h1>
    //                         </div>

    //                         <div className="sectionContent">
    //                             <p>
    //                                 Dr. Steven M Drucker has a 30+ year career in computer research and development focusing on graphics, interfaces, and information visualization. In the course of his research, he has developed prototypes, products, and websites; managed several groups; published over 110 papers; and filed over 130 patents.
    //                              </p>
    //                             <p>
    //                                 Currently, he is a Principle Researcher and Manager of the Visualization and Interactive Data Analysis (VIDA) group at Microsoft Research (MSR). He is also an affiliate professor at the University of Washington Computer Science and Engineering Department. His research focuses on where human computer interaction meets data: democratizing the process of understanding and explaining information through the creation of tools that facilitate discovery and communication of insights using natural interaction and storytelling techniques.
    //                             </p>

    //                             <p>
    //                                 Before coming to Microsoft, he received his Ph.D. from the Computer Graphics and Animation Group at the MIT Media Lab in May 1994. His thesis research was on intelligent camera control interfaces for graphical environments. Dr. Drucker graduated Magna Cum Laude with Honors in Neurosciences from Brown University where he also worked with the Brown Graphics Group and went on to complete his masters at the Artificial Intelligence Laboratory at MIT doing research in robot learning.
    //                             </p>
    //                             <p>
    //                                 He has demonstrated his work on stage with Satya Nadella at the Microsoft CEO Summit and with Bill Gates at the Consumer Electronics Show (CES); has shipped numerous products including a project for visualizing large datasets and another project for gathering and acting on information collected from the web; was written up in the New York Times; filed over 130 patents; and published papers on technologies as diverse as exploratory search, information visualization, multi-user environments, online social interaction, hypermedia research, human and robot perceptual capabilities, robot learning, parallel computer graphics, spectator oriented gaming, and human interfaces for camera control.
	// 				            </p>
    //                         </div>
    //                     </article>
    //                     <div className="clear"></div>
    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Education</h1>
    //                     </div>
    //                     <div className="sectionContent">
    //                         <article>
    //                             <h2>Ph.D, Massachusetts Institute of Technology - Media Lab</h2>
    //                             <p className="subDetails">1989 - 1994</p>
    //                             <p> Thesis title: Integlligent Camera Control for Graphical Environments: Advisor, David Zeltzer, Committee: Dr. Alex Pentland, Dr. Pattie Maes, Glorianna Davenport. Research topics included virtual environments, human computer interaction, telerobotics, and parallel computer graphic algorithms.
    //                         </p>

    //                         </article>

    //                         <article>
    //                             <h2>ScM. Massachusetts Institute of Technology - Artificial Intelligence Laboratory</h2>
    //                             <p className="subDetails">1986 - 1989</p>
    //                             <p> Thesis title: Task Level learning on a complex task: Advisors: John Hollerbach, Chris Atkeson Research topics included machine learning, robot juggling, robot hand manipulation, tactile sensing, real time vision. GPA. 5.0/5.0
    //                         </p>
    //                         </article>

    //                         <article>
    //                             <h2>ScB. Brown University</h2>
    //                             <p className="subDetails">1981 - 1984</p>
    //                             <p>Graduated Magna Cum Laude with Honors, Sc.B. in Department of Neurosciences.</p>
    //                         </article>

    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Work Experience</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <article>
    //                             <h2>Principal Researcher and Manager of the Visualization and Interactive Data Analysis (VIDA) group at Microsoft Research </h2>
    //                             <p className="subDetails">November 2018 - Present</p>
    //                             <p> Exploring the intersection of HCI and data. Exploring three primary areas: the creation of tools to facilitate communication of insights in data; understanding and troubleshooting of Machine Learning models using visualization techniques; and immersive analytics - exploration of new UI strategies including AR/VR and mixed initiative interaction in the domain of visual analytics.
	// 				            </p>

    //                         </article>
    //                         <article>
    //                             <h2>Principal Researcher at Microsoft Research in Visualization and Interaction for Business and Entertainment (MSR VIBE)</h2>
    //                             <p className="subDetails">October 2010 - November 2018</p>
    //                             <p>Working on interactive visualization technologies for understanding and communicating about infromation and data. Released SandDance, particle based visualization in PowerBI and over the web. Demonstrated on stage with Satya Nadella at the 2016 Microsoft CEO Summit. Other projects include touch interaction for visualizations, intelligent clustering, tools for understanding and debugging machine learning, and an office extensibility architecture which has been adopted as the basic extensibility mechanism for Office in 2015.
    //                         </p>

    //                         </article>

    //                         <article>
    //                             <h2>Principal Researcher Microsoft Research vXTeam</h2>
    //                             <p className="subDetails">April  2008 - October 2010</p>
    //                             <p>
    //                                 Worked on information visualization and scalable computational systems and displays. Projects included parallel algorithms for computer graphics and large display interaction for visualization.
    //             </p>

    //                         </article>

    //                         <article>
    //                             <h2>Principal Scientist Microsoft Live Labs</h2>
    //                             <p className="subDetails">April 2006 - April 2008</p>

    //                             <p> Led a group focussed on user interface, information visualization, and machine learning.
    //                 Shipped technologies ranging from Microsoft Thumbtack for gathering and displaying web collections, and Microsoft Pivot for visualizing collections.</p>
    //                         </article>

    //                         <article>
    //                             <h2>Senior Researcher Microsoft Next Media Group</h2>
    //                             <p className="subDetails">October 1999 - March 2006</p>
    //                             <p>
    //                                 Directed research efforts in social computing and virtual environments.
    //                 </p>
    //                         </article>

    //                         <article>
    //                             <h2> Lead-researcher Microsoft Research Virtual Worlds Group</h2>
    //                             <p className="subDetails">June 1995 - September 1999</p>
    //                             <p>Worked at the intersection of interaction and media. Demonstrated photo management software for large collections of photos at CES on stage with Bill Gates. Media browsing for movie collections. Augmented television consumption.</p>
    //                         </article>

    //                         <article>
    //                             <h2> Interzone Inc., Co-founder with John Underkoffler </h2>
    //                             <p className="subDetails">June 1994 - May 1995</p>
    //                             <p> Designed and implemented early wine purchase system over the World Wide Web.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> Medical Media Systems, Consultant </h2>
    //                             <p className="subDetails">June 1993 - March 1995</p>
    //                             <p> User Interface design and graphics systems programming for Medical Computer Graphics company.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> MIT Media Laboratory, Teaching Assistant </h2>
    //                             <p className="subDetails">January 1993 - June 1994</p>
    //                             <p> Teaching Assistant and Research Assistant in Computer Graphics and Animation..
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> NHK Japan Broadcasting, Tokyo, Consultant. </h2>
    //                             <p className="subDetails">June 1991, June 1992</p>
    //                             <p>  Installed and taught an experimental 3D graphics system and interfaced with 3D input device.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> MIT Artificial Intelligence Laboratory, Research Assistant. </h2>
    //                             <p className="subDetails">September 1986, June 1989</p>
    //                             <p>  Developed learning algorithms for controlling a juggling robot and tactile sensing systems.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> Institute for Information and Scholarship - Brown University, Full-time Employee </h2>
    //                             <p className="subDetails">September 1984 - June 1986</p>
    //                             <p>  Developed prototype Hypertext system and implemented framework layer of Intermedia, a hypermedia system. Development platforms included UNIX 4.2 BSD on Sun Workstations, IBM PC/RTs and Apple Macintoshes.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> Neural Science Department  - Brown University, Research Assistant </h2>
    //                             <p className="subDetails">June 1982 - June 1984</p>
    //                             <p> Led to eventual honors work in plasticity in cat visual system and motion gated visual environments.
    //             </p>
    //                         </article>

    //                         <article>
    //                             <h2> Gould Laboratory, Brown University,  Technical Support Staff Leader </h2>
    //                             <p className="subDetails">June 1983 - June 1984</p>
    //                             <p>Leader of group of students assigned to diagnose and correct problems related to the experimental classroom of networked Apollo Workstations. Implemented interactive three-dimensional model of the human brain, later used in introductory neuroscience class.
    //             </p>
    //                         </article>

    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Key Skills</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <h2> Areas of Expertise: </h2>
    //                         <h3> Information Visualization </h3>
    //                         <h3> Human Computer Interaction </h3>
    //                         <h3> Machine Learning </h3>
    //                         <p />
    //                         <h2> Programming Languages/Environments/Frameworks: </h2>
    //                         <ul className="keySkills">
    //                             <li>C,C++,C#,Java</li>
    //                             <li>Python, R, LISP, SQL</li>
    //                             <li>Javascript, ECMAScript,Typescript</li>
    //                             <li>DirectX, OpenGL</li>
    //                             <li>JQuery, Angular, React/Redux</li>
    //                         </ul>
    //                         <h2>Applications: </h2>
    //                         <ul className="keySkills">
    //                             <li>Tableau</li>
    //                             <li>PowerBI</li>
    //                             <li>Excel</li>
    //                             <li>Word</li>
    //                             <li>LaTeX</li>
    //                             <li>Photoshop</li>
    //                             <li>Premiere</li>
    //                             <li>Illustrator</li>
    //                             <li>AfterEffects</li>
    //                         </ul>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>


    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Bibliography</h1>
    //                     </div>
    //                     <div className="sectionContent">
    //                         <div style={{ "lineHeight": "1.35" }} className="csl-bib-body">
    //                             <ol>

    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Wolfgang Stuerzlinger, Tim Dwyer, <b>Steven M Drucker</b>, Carsten Gorg, Chris North, Gerik Scheuermann. 2018. Immersive human-centered computational analytics. <i>Immersive Analytics</i> 139–163.</div>
    //                                 </div>
    //                                 </li>

    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Wolfgang Buschell, Jian Chen, Raimund Dachselt, <b>Steven M Drucker</b>, Tim Dwyer, Carsten Gorg, Tobias Isenberg, Andreas Kern, Chris North, Wolfgang Stuerzlinger. 2018. Interaction for Immersive Analytics. <i>Immersive Analytics</i> 95–138.</div>
    //                                 </div>
    //                                 </li>

    //                                 <li>
    //                                     <div style={{ "clear": "left" }} className="csl-entry">
    //                                         <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Benjamin Bach, Moritz Stefaner, Jeremy Boy, <b> Steven M. Drucker </b>, Lyn Bartram, Jo Wood, Barbara Tversky 2018. Narrative Design Patterns for Data-Driven Storytelling. <i>Data-Driven Storytelling</i>, 107–133. https://doi.org/10.1201/9781315281575-5</div>                                                                                
    //                                     </div>
    //                                 </li>


    //                                 <li>
    //                                     <div style={{ "clear": "left" }} className="csl-entry">
    //                                         <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b> Steven M. Drucker</b>, Samuel Huron, Robert Kosara, Jon Schwabish, Nicholas Diakopoulos. 2018. Communicating Data to an Audience.<i>Data-Driven Storytelling</i>, 107–133. https://doi.org/10.1201/9781315281575-5</div>                                                                                
    //                                     </div>
    //                                 </li>

    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Nan-Chen Chen, Jina Suh, Johan Verwey, Gonzalo Ramos, <b>Steven M Drucker</b>, Patrice Simared. 2018. AnchorViz: Facilitiating classifier error discovery through interactive semantic data exploration. In <i> Intelligent User Interfaces.</i> 269-280</div>
    //                                 </div>
    //                                 </li>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Deokgun Park, <b>Steven M. Drucker</b>, Niklas Elmqvist. 2018. Atom: a grammar for unit visualizations. In <i>IEEE Transactions on Visualization and Computer Graphics</i> 24, 12: 3032-3043.</div>
    //                                 </div>
    //                                 </li>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Christophe Hurter, Nathalie Henry Riche, <b>Steven M. Drucker</b>, Maxim Cordell, Richard Alligier, Romaine Vuillemot. 2018. FibreClay: Sculpting Three Dimensional Trajectories to Reveal Structural Insights. In <i>IEEE Transactions on Visualization and Computer Graphics</i> 25, 1: 705-714.</div>
    //                                 </div>
    //                                 </li>

    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Arjun Srinivasn,  <b>Steven M. Drucker</b>, Alex Endert, John Stasko. 2018. Augmenting Visualizations with Interactive Data Facts to Facilitate Interpretation and Communication. In <i>IEEE Transactions on Visualization and Computer Graphics</i> 25, 1: 672-681.</div>
    //                                 </div>
    //                                 </li>

    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Yifan Wu,  <b>Steven M. Drucker</b>, Matthai Philipose, Lenin Ravindranath. 2018. Querying Videos Using DNN Generated Labels. In <i>HILDA 2018</i>  6:1-6:6.</div>
    //                                 </div>
    //                                 </li>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Alex Bigelow, <b>Steven M Drucker</b>, Danyel Fisher, and Miriah Meyer. 2017. Iterating between tools to create and edit visualizations. <i>IEEE Transactions on Visualization and Computer Graphics</i> 23, 1: 481–490.</div>
    //                                 </div>
    //                                 </li>
    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Iterating%20between%20tools%20to%20create%20and%20edit%20visualizations&amp;rft.jtitle=IEEE%20Transactions%20on%20Visualization%20and%20Computer%20Graphics&amp;rft.volume=23&amp;rft.issue=1&amp;rft.aufirst=Alex&amp;rft.aulast=Bigelow&amp;rft.au=Alex%20Bigelow&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Miriah%20Meyer&amp;rft.date=2017&amp;rft.pages=481%E2%80%93490"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Titus Barik, Robert DeLine, <b><b>Steven M Drucker</b></b>, and Danyel Fisher. 2016. The bones of the system: a case study of logging and telemetry at Microsoft. In <i>Proceedings of the 38th International Conference on Software Engineering Companion</i>, 92–101.</div>
    //                                 </div>
    //                                 </li>
    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20bones%20of%20the%20system%3A%20a%20case%20study%20of%20logging%20and%20telemetry%20at%20Microsoft&amp;rft.btitle=Proceedings%20of%20the%2038th%20International%20Conference%20on%20Software%20Engineering%20Companion&amp;rft.publisher=ACM&amp;rft.aufirst=Titus&amp;rft.aulast=Barik&amp;rft.au=Titus%20Barik&amp;rft.au=Robert%20DeLine&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.date=2016&amp;rft.pages=92%E2%80%93101"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Darren Edge, Xi Yang, Yasmine Kotturi, Shuoping Wang, Dan Feng, Bongshin Lee, and <b><b>Steven M Drucker</b></b>. 2016. SlideSpace: Heuristic Design of a Hybrid Presentation Medium. <i>ACM Transactions on Computer-Human Interaction (TOCHI)</i> 23, 3: 16.</div>
    //                                 </div>
    //                                 </li>
    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=SlideSpace%3A%20Heuristic%20Design%20of%20a%20Hybrid%20Presentation%20Medium&amp;rft.jtitle=ACM%20Transactions%20on%20Computer-Human%20Interaction%20(TOCHI)&amp;rft.volume=23&amp;rft.issue=3&amp;rft.aufirst=Darren&amp;rft.aulast=Edge&amp;rft.au=Darren%20Edge&amp;rft.au=Xi%20Yang&amp;rft.au=Yasmine%20Kotturi&amp;rft.au=Shuoping%20Wang&amp;rft.au=Dan%20Feng&amp;rft.au=Bongshin%20Lee&amp;rft.au=Steven%20Drucker&amp;rft.date=2016&amp;rft.pages=16"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, Rob DeLine, Mary Czerwinski, and <b><b>Steven M Drucker</b></b>. 2016. <i>Understanding the Breadth of the Event Space: Learning from Logan</i>.</div>
    //                                 </div>
    //                                 </li>
    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Understanding%20the%20Breadth%20of%20the%20Event%20Space%3A%20Learning%20from%20Logan&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Rob%20DeLine&amp;rft.au=Mary%20Czerwinski&amp;rft.au=Steven%20Drucker&amp;rft.date=2016-10"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Alper Sarikaya, Emanuel Zgraggen, Rob DeLine, <b>Steven M Drucker</b>, and Danyel Fisher. 2016. Sequence Pre-processing: Focusing Analysis of Log Event Data.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Sequence%20Pre-processing%3A%20Focusing%20Analysis%20of%20Log%20Event%20Data&amp;rft.aufirst=Alper&amp;rft.aulast=Sarikaya&amp;rft.au=Alper%20Sarikaya&amp;rft.au=Emanuel%20Zgraggen&amp;rft.au=Rob%20DeLine&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.date=2016"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Saleema Amershi, Max Chickering, <b>Steven M Drucker</b>, Bongshin Lee, Patrice Simard, and Jina Suh. 2015. Modeltracker: Redesigning performance analysis tools for machine learning. In <i>Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems</i>, 337–346.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Modeltracker%3A%20Redesigning%20performance%20analysis%20tools%20for%20machine%20learning&amp;rft.btitle=Proceedings%20of%20the%2033rd%20Annual%20ACM%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Saleema&amp;rft.aulast=Amershi&amp;rft.au=Saleema%20Amershi&amp;rft.au=Max%20Chickering&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Bongshin%20Lee&amp;rft.au=Patrice%20Simard&amp;rft.au=Jina%20Suh&amp;rft.date=2015&amp;rft.pages=337%E2%80%93346"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Michael Brooks, Saleema Amershi, Bongshin Lee, <b>Steven M Drucker</b>, Ashish Kapoor, and Patrice Simard. 2015. FeatureInsight: Visual support for error-driven feature ideation in text classification. In <i>Visual Analytics Science and Technology (VAST), 2015 IEEE Conference on</i>, 105–112.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=FeatureInsight%3A%20Visual%20support%20for%20error-driven%20feature%20ideation%20in%20text%20classification&amp;rft.btitle=Visual%20Analytics%20Science%20and%20Technology%20(VAST)%2C%202015%20IEEE%20Conference%20on&amp;rft.publisher=IEEE&amp;rft.aufirst=Michael&amp;rft.aulast=Brooks&amp;rft.au=Michael%20Brooks&amp;rft.au=Saleema%20Amershi&amp;rft.au=Bongshin%20Lee&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Ashish%20Kapoor&amp;rft.au=Patrice%20Simard&amp;rft.date=2015&amp;rft.pages=105%E2%80%93112"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Sanjay Kairam, Nathalie Henry Riche, <b>Steven M Drucker</b>, Roland Fernandez, and Jeffrey Heer. 2015. Refinery: Visual exploration of large, heterogeneous networks through associative browsing. In <i>Computer Graphics Forum</i>, 301–310.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Refinery%3A%20Visual%20exploration%20of%20large%2C%20heterogeneous%20networks%20through%20associative%20browsing&amp;rft.btitle=Computer%20Graphics%20Forum&amp;rft.aufirst=Sanjay&amp;rft.aulast=Kairam&amp;rft.au=Sanjay%20Kairam&amp;rft.au=Nathalie%20Henry%20Riche&amp;rft.au=Steven%20Drucker&amp;rft.au=Roland%20Fernandez&amp;rft.au=Jeffrey%20Heer&amp;rft.date=2015&amp;rft.pages=301%E2%80%93310"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Shixia Liu, Yang Chen, Hao Wei, Jing Yang, Kun Zhou, and <b>Steven M Drucker</b>. 2015. Exploring topical lead-lag across corpora. <i>IEEE Transactions on Knowledge and Data Engineering</i> 27, 1: 115–129.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Exploring%20topical%20lead-lag%20across%20corpora&amp;rft.jtitle=IEEE%20Transactions%20on%20Knowledge%20and%20Data%20Engineering&amp;rft.volume=27&amp;rft.issue=1&amp;rft.aufirst=Shixia&amp;rft.aulast=Liu&amp;rft.au=Shixia%20Liu&amp;rft.au=Yang%20Chen&amp;rft.au=Hao%20Wei&amp;rft.au=Jing%20Yang&amp;rft.au=Kun%20Zhou&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2015&amp;rft.pages=115%E2%80%93129"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Emanuel Zgraggen, <b>Steven M Drucker</b>, Danyel Fisher, and Rob DeLine. 2015. <i>(s|qu)eries: Visual Regular Expressions for Querying and Exploring Event Sequences</i>. ACM Association for Computing Machinery.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=(s%7Cqu)eries%3A%20Visual%20Regular%20Expressions%20for%20Querying%20and%20Exploring%20Event%20Sequences&amp;rft.publisher=ACM%20Association%20for%20Computing%20Machinery&amp;rft.aufirst=Emanuel&amp;rft.aulast=Zgraggen&amp;rft.au=Emanuel%20Zgraggen&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Rob%20DeLine&amp;rft.date=2015-04"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Alex Bigelow, <b>Steven M Drucker</b>, Danyel Fisher, and Miriah Meyer. 2014. Reflections on how designers design with data. In <i>Proceedings of the 2014 International Working Conference on Advanced Visual Interfaces</i>, 17–24.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Reflections%20on%20how%20designers%20design%20with%20data&amp;rft.btitle=Proceedings%20of%20the%202014%20International%20Working%20Conference%20on%20Advanced%20Visual%20Interfaces&amp;rft.publisher=ACM&amp;rft.aufirst=Alex&amp;rft.aulast=Bigelow&amp;rft.au=Alex%20Bigelow&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Miriah%20Meyer&amp;rft.date=2014&amp;rft.pages=17%E2%80%9324"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Pei-Yu Chi, Bongshin Lee, and <b>Steven M Drucker</b>. 2014. DemoWiz: re-performing software demonstrations for a live presentation. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 1581–1590.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=DemoWiz%3A%20re-performing%20software%20demonstrations%20for%20a%20live%20presentation&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Pei-Yu&amp;rft.aulast=Chi&amp;rft.au=Pei-Yu%20Chi&amp;rft.au=Bongshin%20Lee&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2014&amp;rft.pages=1581%E2%80%931590"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, <b>Steven M Drucker</b>, and Mary Czerwinski. 2014. Business Intelligence Analytics [Guest editors’ introduction]. <i>IEEE computer graphics and applications</i> 34, 5: 22–24.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Business%20Intelligence%20Analytics%20%5BGuest%20editors'%20introduction%5D&amp;rft.jtitle=IEEE%20computer%20graphics%20and%20applications&amp;rft.volume=34&amp;rft.issue=5&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20Drucker&amp;rft.au=Mary%20Czerwinski&amp;rft.date=2014&amp;rft.pages=22%E2%80%9324"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Meredith Ringel Morris, Andreea Danielescu, <b>Steven M Drucker</b>, Danyel Fisher, Bongshin Lee, and Jacob O Wobbrock. 2014. Reducing legacy bias in gesture elicitation studies. <i>interactions</i> 21, 3: 40–45.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Reducing%20legacy%20bias%20in%20gesture%20elicitation%20studies&amp;rft.jtitle=interactions&amp;rft.volume=21&amp;rft.issue=3&amp;rft.aufirst=Meredith%20Ringel&amp;rft.aulast=Morris&amp;rft.au=Meredith%20Ringel%20Morris&amp;rft.au=Andreea%20Danielescu&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Bongshin%20Lee&amp;rft.au=Jacob%20O%20Wobbrock&amp;rft.date=2014&amp;rft.pages=40%E2%80%9345"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Emanuel Zgraggen, Robert Zeleznik, and <b>Steven M Drucker</b>. 2014. PanoramicData: Data analysis through pen &amp; touch. <i>IEEE transactions on visualization and computer graphics</i> 20, 12: 2112–2121.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=PanoramicData%3A%20Data%20analysis%20through%20pen%20%26%20touch&amp;rft.jtitle=IEEE%20transactions%20on%20visualization%20and%20computer%20graphics&amp;rft.volume=20&amp;rft.issue=12&amp;rft.aufirst=Emanuel&amp;rft.aulast=Zgraggen&amp;rft.au=Emanuel%20Zgraggen&amp;rft.au=Robert%20Zeleznik&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2014&amp;rft.pages=2112%E2%80%932121"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mike Barnett, Badrish Chandramouli, Robert DeLine, <b>Steven M Drucker</b>, Danyel Fisher, Jonathan Goldstein, Patrick Morrison, and John Platt. 2013. Stat!: an interactive analytics environment for big data. In <i>Proceedings of the 2013 ACM SIGMOD International Conference on Management of Data</i>, 1013–1016.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Stat!%3A%20an%20interactive%20analytics%20environment%20for%20big%20data&amp;rft.btitle=Proceedings%20of%20the%202013%20ACM%20SIGMOD%20International%20Conference%20on%20Management%20of%20Data&amp;rft.publisher=ACM&amp;rft.aufirst=Mike&amp;rft.aulast=Barnett&amp;rft.au=Mike%20Barnett&amp;rft.au=Badrish%20Chandramouli&amp;rft.au=Robert%20DeLine&amp;rft.au=Steven%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Jonathan%20Goldstein&amp;rft.au=Patrick%20Morrison&amp;rft.au=John%20Platt&amp;rft.date=2013&amp;rft.pages=1013%E2%80%931016"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Roland Fernandez. 2013. <i>SandDance</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=SandDance&amp;rft.publisher=Microsoft%20Research&amp;rft.aufirst=Steven%20M.&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M.%20Drucker&amp;rft.au=Roland%20Fernandez&amp;rft.date=2013"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Danyel Fisher, Ramik Sadana, and Jessica Herron. 2013. TouchViz: a case study comparing two interfaces for data analytics on tablets. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 2301–2310.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=TouchViz%3A%20a%20case%20study%20comparing%20two%20interfaces%20for%20data%20analytics%20on%20tablets&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Ramik%20Sadana&amp;rft.au=Jessica%20Herron&amp;rft.date=2013&amp;rft.pages=2301%E2%80%932310"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Jessica Hullman, <b>Steven M Drucker</b>, Nathalie Henry Riche, Bongshin Lee, Danyel Fisher, and Eytan Adar. 2013. A deeper understanding of sequence in narrative visualization. <i>IEEE transactions on visualization and computer graphics</i> 19, 12: 2406–2415.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=A%20deeper%20understanding%20of%20sequence%20in%20narrative%20visualization&amp;rft.jtitle=IEEE%20transactions%20on%20visualization%20and%20computer%20graphics&amp;rft.volume=19&amp;rft.issue=12&amp;rft.aufirst=Jessica&amp;rft.aulast=Hullman&amp;rft.au=Jessica%20Hullman&amp;rft.au=Steven%20Drucker&amp;rft.au=Nathalie%20Henry%20Riche&amp;rft.au=Bongshin%20Lee&amp;rft.au=Danyel%20Fisher&amp;rft.au=Eytan%20Adar&amp;rft.date=2013&amp;rft.pages=2406%E2%80%932415"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Andruid Kerne, Andrew M Webb, Celine Latulipe, Erin Carroll, <b>Steven M Drucker</b>, Linda Candy, and Kristina Höök. 2013. Evaluation methods for creativity support environments. In <i>CHI’13 Extended Abstracts on Human Factors in Computing Systems</i>, 3295–3298.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Evaluation%20methods%20for%20creativity%20support%20environments&amp;rft.btitle=CHI'13%20Extended%20Abstracts%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Andruid&amp;rft.aulast=Kerne&amp;rft.au=Andruid%20Kerne&amp;rft.au=Andrew%20M%20Webb&amp;rft.au=Celine%20Latulipe&amp;rft.au=Erin%20Carroll&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Linda%20Candy&amp;rft.au=Kristina%20H%C3%B6%C3%B6k&amp;rft.date=2013&amp;rft.pages=3295%E2%80%933298"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, Rob DeLine, Mary Czerwinski, and <b>Steven M Drucker</b>. 2012. Interactions with big data analytics. <i>interactions</i> 19, 3: 50–59.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Interactions%20with%20big%20data%20analytics&amp;rft.jtitle=interactions&amp;rft.volume=19&amp;rft.issue=3&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Rob%20DeLine&amp;rft.au=Mary%20Czerwinski&amp;rft.au=Steven%20Drucker&amp;rft.date=2012&amp;rft.pages=50%E2%80%9359"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, <b>Steven M Drucker</b>, and Arnd Christian König. 2012. Exploratory visualization involving incremental, approximate database queries and uncertainty. <i>IEEE computer graphics and applications</i> 32, 4: 55–62.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Exploratory%20visualization%20involving%20incremental%2C%20approximate%20database%20queries%20and%20uncertainty&amp;rft.jtitle=IEEE%20computer%20graphics%20and%20applications&amp;rft.volume=32&amp;rft.issue=4&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Arnd%20Christian%20K%C3%B6nig&amp;rft.date=2012&amp;rft.pages=55%E2%80%9362"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, Igor Popov, <b>Steven M Drucker</b>, and m.c. schraefel. 2012. Trust me, I’m partially right: incremental visualization lets analysts explore large datasets faster. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 1673–1682.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Trust%20me%2C%20I'm%20partially%20right%3A%20incremental%20visualization%20lets%20analysts%20explore%20large%20datasets%20faster&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Igor%20Popov&amp;rft.au=Steven%20Drucker&amp;rft.au=m.c.%20schraefel&amp;rft.date=2012&amp;rft.pages=1673%E2%80%931682"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Brian Guenter, Mark Finch, <b>Steven M Drucker</b>, Desney Tan, and John Snyder. 2012. Foveated 3D graphics. <i>ACM Transactions on Graphics (TOG)</i> 31, 6: 164.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Foveated%203D%20graphics&amp;rft.jtitle=ACM%20Transactions%20on%20Graphics%20(TOG)&amp;rft.volume=31&amp;rft.issue=6&amp;rft.aufirst=Brian&amp;rft.aulast=Guenter&amp;rft.au=Brian%20Guenter&amp;rft.au=Mark%20Finch&amp;rft.au=Steven%20Drucker&amp;rft.au=Desney%20Tan&amp;rft.au=John%20Snyder&amp;rft.date=2012&amp;rft.pages=164"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Neel Joshi, Sisil Mehta, <b>Steven M Drucker</b>, Eric Stollnitz, Hugues Hoppe, Matt Uyttendaele, and Michael Cohen. 2012. Cliplets: juxtaposing still and dynamic imagery. In <i>Proceedings of the 25th annual ACM symposium on User interface software and technology</i>, 251–260.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Cliplets%3A%20juxtaposing%20still%20and%20dynamic%20imagery&amp;rft.btitle=Proceedings%20of%20the%2025th%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Neel&amp;rft.aulast=Joshi&amp;rft.au=Neel%20Joshi&amp;rft.au=Sisil%20Mehta&amp;rft.au=Steven%20Drucker&amp;rft.au=Eric%20Stollnitz&amp;rft.au=Hugues%20Hoppe&amp;rft.au=Matt%20Uyttendaele&amp;rft.au=Michael%20Cohen&amp;rft.date=2012&amp;rft.pages=251%E2%80%93260"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Johannes Kopf, Wolf Kienzle, <b>Steven M Drucker</b>, and Sing Bing Kang. 2012. Quality prediction for image completion. <i>ACM Transactions on Graphics (TOG)</i> 31, 6: 131.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Quality%20prediction%20for%20image%20completion&amp;rft.jtitle=ACM%20Transactions%20on%20Graphics%20(TOG)&amp;rft.volume=31&amp;rft.issue=6&amp;rft.aufirst=Johannes&amp;rft.aulast=Kopf&amp;rft.au=Johannes%20Kopf&amp;rft.au=Wolf%20Kienzle&amp;rft.au=Steven%20Drucker&amp;rft.au=Sing%20Bing%20Kang&amp;rft.date=2012&amp;rft.pages=131"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Turner Whitted and <b>Steven M Drucker</b>. 2012. Visualization Surfaces. In <i>Expanding the Frontiers of Visual Analytics and Visualization</i>. Springer London, 417–427.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Visualization%20Surfaces&amp;rft.publisher=Springer%20London&amp;rft.aufirst=Turner&amp;rft.aulast=Whitted&amp;rft.au=Turner%20Whitted&amp;rft.au=Steven%20Drucker&amp;rft.date=2012&amp;rft.pages=417%E2%80%93427"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Jian Zhao, <b>Steven M Drucker</b>, Danyel Fisher, and Donald Brinkman. 2012. TimeSlice: Interactive faceted browsing of timeline data. In <i>Proceedings of the International Working Conference on Advanced Visual Interfaces</i>, 433–436.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=TimeSlice%3A%20Interactive%20faceted%20browsing%20of%20timeline%20data&amp;rft.btitle=Proceedings%20of%20the%20International%20Working%20Conference%20on%20Advanced%20Visual%20Interfaces&amp;rft.publisher=ACM&amp;rft.aufirst=Jian&amp;rft.aulast=Zhao&amp;rft.au=Jian%20Zhao&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Donald%20Brinkman&amp;rft.date=2012&amp;rft.pages=433%E2%80%93436"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mohamed Ali, Badrish Chandramouli, Jonathan Fay, Curtis Wong, <b>Steven M Drucker</b>, and Balan Sethu Raman. 2011. Online visualization of geospatial stream data using the WorldWide telescope. In <i>Proceedings of the International Conference on Very Large Data Bases (VLDB)</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Online%20visualization%20of%20geospatial%20stream%20data%20using%20the%20WorldWide%20telescope&amp;rft.btitle=Proceedings%20of%20the%20International%20Conference%20on%20Very%20Large%20Data%20Bases%20(VLDB)&amp;rft.aufirst=Mohamed&amp;rft.aulast=Ali&amp;rft.au=Mohamed%20Ali&amp;rft.au=Badrish%20Chandramouli&amp;rft.au=Jonathan%20Fay&amp;rft.au=Curtis%20Wong&amp;rft.au=Steven%20Drucker&amp;rft.au=Balan%20Sethu%20Raman&amp;rft.date=2011"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Danyel Fisher, and Sumit Basu. 2011. Helping users sort faster with adaptive machine learning recommendations. In <i>IFIP Conference on Human-Computer Interaction</i>, 187–203.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Helping%20users%20sort%20faster%20with%20adaptive%20machine%20learning%20recommendations&amp;rft.btitle=IFIP%20Conference%20on%20Human-Computer%20Interaction&amp;rft.publisher=Springer%20Berlin%20Heidelberg&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Danyel%20Fisher&amp;rft.au=Sumit%20Basu&amp;rft.date=2011&amp;rft.pages=187%E2%80%93203"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, <b>Steven M Drucker</b>, Roland Fernandez, and Xiaoji Chen. 2011. <i>Vis-a-vis: A Visual Language for Spreadsheet Visualizations</i>. Technical Report MSR-TR-2011-142, Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Vis-a-vis%3A%20A%20Visual%20Language%20for%20Spreadsheet%20Visualizations&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20Drucker&amp;rft.au=Roland%20Fernandez&amp;rft.au=Xiaoji%20Chen&amp;rft.date=2011"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Kayur Patel, <b>Steven M Drucker</b>, James Fogarty, Ashish Kapoor, and Desney S Tan. 2011. Using multiple models to understand data. In <i>IJCAI Proceedings-International Joint Conference on Artificial Intelligence</i>, 1723.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Using%20multiple%20models%20to%20understand%20data&amp;rft.btitle=IJCAI%20Proceedings-International%20Joint%20Conference%20on%20Artificial%20Intelligence&amp;rft.aufirst=Kayur&amp;rft.aulast=Patel&amp;rft.au=Kayur%20Patel&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=James%20Fogarty&amp;rft.au=Ashish%20Kapoor&amp;rft.au=Desney%20S%20Tan&amp;rft.date=2011&amp;rft.pages=1723"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Sumit Basu, Danyel Fisher, <b>Steven M Drucker</b>, and Hao Lu. 2010. Assisting Users with Clustering Tasks by Combining Metric Learning and Classification. In <i>AAAI</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Assisting%20Users%20with%20Clustering%20Tasks%20by%20Combining%20Metric%20Learning%20and%20Classification.&amp;rft.btitle=AAAI&amp;rft.aufirst=Sumit&amp;rft.aulast=Basu&amp;rft.au=Sumit%20Basu&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Hao%20Lu&amp;rft.date=2010"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, <b>Steven M Drucker</b>, David Salesin, and Michael F Cohen. 2010. From Web Summaries to search templates. <i>No Code Required: Giving Users Tools to Transform the Web</i>: 235.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=From%20Web%20Summaries%20to%20search%20templates&amp;rft.jtitle=No%20Code%20Required%3A%20Giving%20Users%20Tools%20to%20Transform%20the%20Web&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2010&amp;rft.pages=235"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Danyel Fisher, <b>Steven M Drucker</b>, Roland Fernandez, and Scott Ruble. 2010. Visualizations everywhere: A multiplatform infrastructure for linked visualizations. <i>IEEE Transactions on Visualization and Computer Graphics</i> 16, 6: 1157–1163.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Visualizations%20everywhere%3A%20A%20multiplatform%20infrastructure%20for%20linked%20visualizations&amp;rft.jtitle=IEEE%20Transactions%20on%20Visualization%20and%20Computer%20Graphics&amp;rft.volume=16&amp;rft.issue=6&amp;rft.aufirst=Danyel&amp;rft.aulast=Fisher&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20Drucker&amp;rft.au=Roland%20Fernandez&amp;rft.au=Scott%20Ruble&amp;rft.date=2010&amp;rft.pages=1157%E2%80%931163"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Varun Jampani, Gonzalo Ramos, and <b>Steven M Drucker</b>. 2010. <i>ImageFlow: Streaming Image Search</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=ImageFlow%3A%20Streaming%20Image%20Search&amp;rft.aufirst=Varun&amp;rft.aulast=Jampani&amp;rft.au=Varun%20Jampani&amp;rft.au=Gonzalo%20Ramos&amp;rft.au=Steven%20Drucker&amp;rft.date=2010-11"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Kayur Patel, Naomi Bancroft, <b>Steven M Drucker</b>, James Fogarty, Andrew J Ko, and James Landay. 2010. Gestalt: integrated support for implementation and analysis in machine learning. In <i>Proceedings of the 23nd annual ACM symposium on User interface software and technology</i>, 37–46.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Gestalt%3A%20integrated%20support%20for%20implementation%20and%20analysis%20in%20machine%20learning&amp;rft.btitle=Proceedings%20of%20the%2023nd%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Kayur&amp;rft.aulast=Patel&amp;rft.au=Kayur%20Patel&amp;rft.au=Naomi%20Bancroft&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=James%20Fogarty&amp;rft.au=Andrew%20J%20Ko&amp;rft.au=James%20Landay&amp;rft.date=2010&amp;rft.pages=37%E2%80%9346"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Aamer Hydrie. 2009. <i>LiveLabs ThumbTack</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=LiveLabs%20ThumbTack&amp;rft.aufirst=Steven%20M.&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M.%20Drucker&amp;rft.au=Aamer%20Hydrie&amp;rft.date=2009"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Gary Flake, Karim Farouki, Brett Brewer, and <b>Steven M Drucker</b>. 2009. <i>LiveLabs Pivot Viewer</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=LiveLabs%20Pivot%20Viewer&amp;rft.aufirst=Gary&amp;rft.aulast=Flake&amp;rft.au=Gary%20Flake&amp;rft.au=Karim%20Farouki&amp;rft.au=Brett%20Brewer&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2009"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Yevgeniy Medynskiy, Mira Dontcheva, and <b>Steven M Drucker</b>. 2009. Exploring websites through contextual facets. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 2013–2022.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Exploring%20websites%20through%20contextual%20facets&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Yevgeniy&amp;rft.aulast=Medynskiy&amp;rft.au=Yevgeniy%20Medynskiy&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2009&amp;rft.pages=2013%E2%80%932022"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Jaime Teevan, Edward Cutrell, Danyel Fisher, <b>Steven M Drucker</b>, Gonzalo Ramos, Paul André, and Chang Hu. 2009. Visual snippets: summarizing web pages for search and revisitation. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 2023–2032.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Visual%20snippets%3A%20summarizing%20web%20pages%20for%20search%20and%20revisitation&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Jaime&amp;rft.aulast=Teevan&amp;rft.au=Jaime%20Teevan&amp;rft.au=Edward%20Cutrell&amp;rft.au=Danyel%20Fisher&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Gonzalo%20Ramos&amp;rft.au=Paul%20Andr%C3%A9&amp;rft.au=Chang%20Hu&amp;rft.date=2009&amp;rft.pages=2023%E2%80%932032"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Michael Toomim, <b>Steven M Drucker</b>, Mira Dontcheva, Ali Rahimi, Blake Thomson, and James A Landay. 2009. Attaching UI enhancements to websites with end users. In <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 1859–1868.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Attaching%20UI%20enhancements%20to%20websites%20with%20end%20users&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Michael&amp;rft.aulast=Toomim&amp;rft.au=Michael%20Toomim&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Ali%20Rahimi&amp;rft.au=Blake%20Thomson&amp;rft.au=James%20A%20Landay&amp;rft.date=2009&amp;rft.pages=1859%E2%80%931868"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Billy Chen, Gonzalo Ramos, Eyal Ofek, Michael Cohen, <b>Steven M Drucker</b>, and David Nistér. 2008. <i>Interactive techniques for registering images to digital terrain and building models</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Interactive%20techniques%20for%20registering%20images%20to%20digital%20terrain%20and%20building%20models&amp;rft.aufirst=Billy&amp;rft.aulast=Chen&amp;rft.au=Billy%20Chen&amp;rft.au=Gonzalo%20Ramos&amp;rft.au=Eyal%20Ofek&amp;rft.au=Michael%20Cohen&amp;rft.au=Steven%20Drucker&amp;rft.au=David%20Nist%C3%A9r&amp;rft.date=2008"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, Sharon Lin, <b>Steven M Drucker</b>, David Salesin, and Michael F Cohen. 2008. Experiences with content extraction from the web. In <i>Proc SUI</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Experiences%20with%20content%20extraction%20from%20the%20web&amp;rft.btitle=Proc%20SUI&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Sharon%20Lin&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2008"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Qing Luan, <b>Steven M Drucker</b>, Johannes Kopf, Ying-Qing Xu, and Michael F Cohen. 2008. Annotating gigapixel images. In <i>Proceedings of the 21st annual ACM symposium on User interface software and technology</i>, 33–36.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Annotating%20gigapixel%20images&amp;rft.btitle=Proceedings%20of%20the%2021st%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Qing&amp;rft.aulast=Luan&amp;rft.au=Qing%20Luan&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Johannes%20Kopf&amp;rft.au=Ying-Qing%20Xu&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2008&amp;rft.pages=33%E2%80%9336"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Lalatendu Satpathy, Saara Kamppari, Bridget Lewis, Ajay Prasad, Yong Woo Rhee, Benjamin Elgart, and <b>Steven M Drucker</b>. 2008. Pixaura: supporting tentative decision making when selecting and sharing digital photos. In <i>Proceedings of the 22nd British HCI Group Annual Conference on People and Computers: Culture, Creativity, Interaction-Volume 2</i>, 87–91.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Pixaura%3A%20supporting%20tentative%20decision%20making%20when%20selecting%20and%20sharing%20digital%20photos&amp;rft.btitle=Proceedings%20of%20the%2022nd%20British%20HCI%20Group%20Annual%20Conference%20on%20People%20and%20Computers%3A%20Culture%2C%20Creativity%2C%20Interaction-Volume%202&amp;rft.publisher=British%20Computer%20Society&amp;rft.aufirst=Lalatendu&amp;rft.aulast=Satpathy&amp;rft.au=Lalatendu%20Satpathy&amp;rft.au=Saara%20Kamppari&amp;rft.au=Bridget%20Lewis&amp;rft.au=Ajay%20Prasad&amp;rft.au=Yong%20Woo%20Rhee&amp;rft.au=Benjamin%20Elgart&amp;rft.au=Steven%20Drucker&amp;rft.date=2008&amp;rft.pages=87%E2%80%9391"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Paul André, <b>Steven M Drucker</b>, and m. c. schraefel. 2007. Informal Online Decision Making: Current Practices and Support System Design.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=manuscript&amp;rft.title=Informal%20Online%20Decision%20Making%3A%20Current%20Practices%20and%20Support%20System%20Design&amp;rft.description=Existing%20group%20decision%20support%20systems%20are%20too%20complex%20to%20support%20lightweight%2C%20informal%20decision%20making%20made%20popular%20by%20the%20amount%20of%20information%20available%20on%20the%20Web.%20From%20an%20examination%20of%20related%20work%2C%20an%20online%20survey%20and%20a%20formative%20study%20to%20examine%20how%20people%20currently%20use%20the%20Web%20for%20decision%20support%2C%20we%20present%20a%20set%20of%20design%20recommendations%20towards%20the%20development%20of%20an%20informal%20Web%20decision%20support%20tool.&amp;rft.aufirst=Paul&amp;rft.aulast=Andr%C3%A9&amp;rft.au=Paul%20Andr%C3%A9&amp;rft.au=Steven%20Drucker&amp;rft.au=m.%20c.%20schraefel&amp;rft.date=2007"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, <b>Steven M Drucker</b>, David Salesin, and Michael F Cohen. 2007. Relations, cards, and search templates: user-guided web data integration and layout. In <i>Proceedings of the 20th annual ACM symposium on User interface software and technology</i>, 61–70.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Relations%2C%20cards%2C%20and%20search%20templates%3A%20user-guided%20web%20data%20integration%20and%20layout&amp;rft.btitle=Proceedings%20of%20the%2020th%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2007&amp;rft.pages=61%E2%80%9370"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Andy Edmonds, Ryen W White, Dan Morris, and <b>Steven M Drucker</b>. 2007. Instrumenting the dynamic web. <i>Journal of Web Engineering</i> 6, 3: 243.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Instrumenting%20the%20dynamic%20web&amp;rft.jtitle=Journal%20of%20Web%20Engineering&amp;rft.volume=6&amp;rft.issue=3&amp;rft.aufirst=Andy&amp;rft.aulast=Edmonds&amp;rft.au=Andy%20Edmonds&amp;rft.au=Ryen%20W%20White&amp;rft.au=Dan%20Morris&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2007&amp;rft.pages=243"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Gang Hua, Paul A Viola, and <b>Steven M Drucker</b>. 2007. Face recognition using discriminatively trained orthogonal rank one tensor projections. In <i>2007 IEEE Conference on Computer Vision and Pattern Recognition</i>, 1–8.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Face%20recognition%20using%20discriminatively%20trained%20orthogonal%20rank%20one%20tensor%20projections&amp;rft.btitle=2007%20IEEE%20Conference%20on%20Computer%20Vision%20and%20Pattern%20Recognition&amp;rft.publisher=IEEE&amp;rft.aufirst=Gang&amp;rft.aulast=Hua&amp;rft.au=Gang%20Hua&amp;rft.au=Paul%20A%20Viola&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2007&amp;rft.pages=1%E2%80%938"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Ryen W White and <b>Steven M Drucker</b>. 2007. Investigating behavioral variability in web search. In <i>Proceedings of the 16th international conference on World Wide Web</i>, 21–30.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Investigating%20behavioral%20variability%20in%20web%20search&amp;rft.btitle=Proceedings%20of%20the%2016th%20international%20conference%20on%20World%20Wide%20Web&amp;rft.publisher=ACM&amp;rft.aufirst=Ryen%20W&amp;rft.aulast=White&amp;rft.au=Ryen%20W%20White&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2007&amp;rft.pages=21%E2%80%9330"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Ryen W White, <b>Steven M Drucker</b>, Gary Marchionini, Marti Hearst, and others. 2007. Exploratory search and HCI: designing and evaluating interfaces to support exploratory search interaction. In <i>CHI’07 Extended Abstracts on Human Factors in Computing Systems</i>, 2877–2880.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Exploratory%20search%20and%20HCI%3A%20designing%20and%20evaluating%20interfaces%20to%20support%20exploratory%20search%20interaction&amp;rft.btitle=CHI'07%20Extended%20Abstracts%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Ryen%20W&amp;rft.aulast=White&amp;rft.au=Ryen%20W%20White&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Gary%20Marchionini&amp;rft.au=Marti%20Hearst&amp;rft.au=others&amp;rft.date=2007&amp;rft.pages=2877%E2%80%932880"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Robert DeLine, Mary Czerwinski, Brian Meyers, Gina Venolia, <b>Steven M Drucker</b>, and George Robertson. 2006. Code thumbnails: Using spatial memory to navigate source code. In <i>Visual Languages and Human-Centric Computing (VL/HCC’06)</i>, 11–18.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Code%20thumbnails%3A%20Using%20spatial%20memory%20to%20navigate%20source%20code&amp;rft.btitle=Visual%20Languages%20and%20Human-Centric%20Computing%20(VL%2FHCC'06)&amp;rft.publisher=IEEE&amp;rft.aufirst=Robert&amp;rft.aulast=DeLine&amp;rft.au=Robert%20DeLine&amp;rft.au=Mary%20Czerwinski&amp;rft.au=Brian%20Meyers&amp;rft.au=Gina%20Venolia&amp;rft.au=Steven%20Drucker&amp;rft.au=George%20Robertson&amp;rft.date=2006&amp;rft.pages=11%E2%80%9318"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, <b>Steven M Drucker</b>, Geraldine Wade, David Salesin, and Michael F Cohen. 2006. Collecting and organizing web content. In <i>Personal Information Management-Special Interest Group for Information Retrieval Workshop</i>, 44–47.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Collecting%20and%20organizing%20web%20content&amp;rft.btitle=Personal%20Information%20Management-Special%20Interest%20Group%20for%20Information%20Retrieval%20Workshop&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Geraldine%20Wade&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2006&amp;rft.pages=44%E2%80%9347"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, <b>Steven M Drucker</b>, Geraldine Wade, David Salesin, and Michael F Cohen. 2006. Summarizing personal web browsing sessions. In <i>Proceedings of the 19th annual ACM symposium on User interface software and technology</i>, 115–124.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Summarizing%20personal%20web%20browsing%20sessions&amp;rft.btitle=Proceedings%20of%20the%2019th%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Geraldine%20Wade&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2006&amp;rft.pages=115%E2%80%93124"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Georg Petschnigg, and Maneesh Agrawala. 2006. Comparing and managing multiple versions of slide presentations. In <i>Proceedings of the 19th annual ACM symposium on User interface software and technology</i>, 47–56.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Comparing%20and%20managing%20multiple%20versions%20of%20slide%20presentations&amp;rft.btitle=Proceedings%20of%20the%2019th%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Georg%20Petschnigg&amp;rft.au=Maneesh%20Agrawala&amp;rft.date=2006&amp;rft.pages=47%E2%80%9356"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Brian Meyers, AJ Brush, <b>Steven M Drucker</b>, Marc A Smith, and Mary Czerwinski. 2006. Dance your work away: exploring step user interfaces. In <i>CHI’06 extended abstracts on Human factors in computing systems</i>, 387–392.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Dance%20your%20work%20away%3A%20exploring%20step%20user%20interfaces&amp;rft.btitle=CHI'06%20extended%20abstracts%20on%20Human%20factors%20in%20computing%20systems&amp;rft.publisher=ACM&amp;rft.aufirst=Brian&amp;rft.aulast=Meyers&amp;rft.au=Brian%20Meyers&amp;rft.au=AJ%20Brush&amp;rft.au=Steven%20Drucker&amp;rft.au=Marc%20A%20Smith&amp;rft.au=Mary%20Czerwinski&amp;rft.date=2006&amp;rft.pages=387%E2%80%93392"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Ben Shneiderman, Benjamin B Bederson, and <b>Steven M Drucker</b>. 2006. Find that photo!: interface strategies to annotate, browse, and share. <i>Communications of the ACM</i> 49, 4: 69–71.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Find%20that%20photo!%3A%20interface%20strategies%20to%20annotate%2C%20browse%2C%20and%20share&amp;rft.jtitle=Communications%20of%20the%20ACM&amp;rft.volume=49&amp;rft.issue=4&amp;rft.aufirst=Ben&amp;rft.aulast=Shneiderman&amp;rft.au=Ben%20Shneiderman&amp;rft.au=Benjamin%20B%20Bederson&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2006&amp;rft.pages=69%E2%80%9371"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Jue Wang, <b>Steven M Drucker</b>, Maneesh Agrawala, and Michael F Cohen. 2006. The cartoon animation filter. In <i>ACM Transactions on Graphics (TOG)</i>, 1169–1173.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20cartoon%20animation%20filter&amp;rft.btitle=ACM%20Transactions%20on%20Graphics%20(TOG)&amp;rft.publisher=ACM&amp;rft.aufirst=Jue&amp;rft.aulast=Wang&amp;rft.au=Jue%20Wang&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Maneesh%20Agrawala&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2006&amp;rft.pages=1169%E2%80%931173"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Ryen W White, Bill Kules, <b>Steven M Drucker</b>, and others. 2006. Supporting exploratory search, introduction, special issue, communications of the ACM. <i>Communications of the ACM</i> 49, 4: 36–39.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Supporting%20exploratory%20search%2C%20introduction%2C%20special%20issue%2C%20communications%20of%20the%20ACM&amp;rft.jtitle=Communications%20of%20the%20ACM&amp;rft.volume=49&amp;rft.issue=4&amp;rft.aufirst=Ryen%20W&amp;rft.aulast=White&amp;rft.au=Ryen%20W%20White&amp;rft.au=Bill%20Kules&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=others&amp;rft.date=2006&amp;rft.pages=36%E2%80%9339"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Mira Dontcheva, <b>Steven M Drucker</b>, and Michael F Cohen. 2005. v4v: a View for the Viewer. In <i>Proceedings of the 2005 conference on Designing for User eXperience</i>, 19.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=v4v%3A%20a%20View%20for%20the%20Viewer&amp;rft.btitle=Proceedings%20of%20the%202005%20conference%20on%20Designing%20for%20User%20eXperience&amp;rft.publisher=AIGA%3A%20American%20Institute%20of%20Graphic%20Arts&amp;rft.aufirst=Mira&amp;rft.aulast=Dontcheva&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Michael%20F%20Cohen&amp;rft.date=2005&amp;rft.pages=19"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Tim Regan, Asta Roseway, and Markus Lofstrom. 2005. The visual decision maker: A recommendation system for collocated users. In <i>Proceedings of the 2005 conference on Designing for User eXperience</i>, 21.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20visual%20decision%20maker%3A%20A%20recommendation%20system%20for%20collocated%20users&amp;rft.btitle=Proceedings%20of%20the%202005%20conference%20on%20Designing%20for%20User%20eXperience&amp;rft.publisher=AIGA%3A%20American%20Institute%20of%20Graphic%20Arts&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Tim%20Regan&amp;rft.au=Asta%20Roseway&amp;rft.au=Markus%20Lofstrom&amp;rft.date=2005&amp;rft.pages=21"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">David F Huynh, <b>Steven M Drucker</b>, Patrick Baudisch, and Curtis Wong. 2005. Time quilt: scaling up zoomable photo browsers for large, unstructured photo collections. In <i>CHI’05 extended abstracts on Human factors in computing systems</i>, 1937–1940.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Time%20quilt%3A%20scaling%20up%20zoomable%20photo%20browsers%20for%20large%2C%20unstructured%20photo%20collections&amp;rft.btitle=CHI'05%20extended%20abstracts%20on%20Human%20factors%20in%20computing%20systems&amp;rft.publisher=ACM&amp;rft.aufirst=David%20F&amp;rft.aulast=Huynh&amp;rft.au=David%20F%20Huynh&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Patrick%20Baudisch&amp;rft.au=Curtis%20Wong&amp;rft.date=2005&amp;rft.pages=1937%E2%80%931940"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Aseem Agarwala, Mira Dontcheva, Maneesh Agrawala, <b>Steven M Drucker</b>, Alex Colburn, Brian Curless, David Salesin, and Michael Cohen. 2004. Interactive digital photomontage. In <i>ACM Transactions on Graphics (TOG)</i>, 294–302.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Interactive%20digital%20photomontage&amp;rft.btitle=ACM%20Transactions%20on%20Graphics%20(TOG)&amp;rft.publisher=ACM&amp;rft.aufirst=Aseem&amp;rft.aulast=Agarwala&amp;rft.au=Aseem%20Agarwala&amp;rft.au=Mira%20Dontcheva&amp;rft.au=Maneesh%20Agrawala&amp;rft.au=Steven%20Drucker&amp;rft.au=Alex%20Colburn&amp;rft.au=Brian%20Curless&amp;rft.au=David%20Salesin&amp;rft.au=Michael%20Cohen&amp;rft.date=2004&amp;rft.pages=294%E2%80%93302"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Curtis Wong, Asta Roseway, Steven Glenner, and Steven De Mar. 2004. MediaBrowser: reclaiming the shoebox. In <i>Proceedings of the working conference on Advanced visual interfaces</i>, 433–436.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=MediaBrowser%3A%20reclaiming%20the%20shoebox&amp;rft.btitle=Proceedings%20of%20the%20working%20conference%20on%20Advanced%20visual%20interfaces&amp;rft.publisher=ACM&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.au=Asta%20Roseway&amp;rft.au=Steven%20Glenner&amp;rft.au=Steven%20De%20Mar&amp;rft.date=2004&amp;rft.pages=433%E2%80%93436"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Curtis Wong. 2003. <i>Movie Variations</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Movie%20Variations&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2003"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Curtis Wong. 2003. <i>People Browser</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=People%20Browser&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2003"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Curtis Wong, Asta Roseway, Steve Glenner, and Steve De Mar. 2003. <i>Photo-triage: Rapidly annotating your digital photographs</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Photo-triage%3A%20Rapidly%20annotating%20your%20digital%20photographs&amp;rft.aufirst=Steven&amp;rft.aulast=Drucker&amp;rft.au=Steven%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.au=Asta%20Roseway&amp;rft.au=Steve%20Glenner&amp;rft.au=Steve%20De%20Mar&amp;rft.date=2003"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Li-wei He, Michael Cohen, Curtis Wong, and Anoop Gupta. 2002. <i>Spectator games: A new entertainment modality of networked multiplayer games</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Spectator%20games%3A%20A%20new%20entertainment%20modality%20of%20networked%20multiplayer%20games&amp;rft.aufirst=Steven&amp;rft.aulast=Drucker&amp;rft.au=Steven%20Drucker&amp;rft.au=Li-wei%20He&amp;rft.au=Michael%20Cohen&amp;rft.au=Curtis%20Wong&amp;rft.au=Anoop%20Gupta&amp;rft.date=2002"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Steven De Mar. 2002. <i>Spectator implementation in Mechwarrior</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Spectator%20implementation%20in%20Mechwarrior&amp;rft.publisher=Microsoft%20Research&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Steven%20De%20Mar&amp;rft.date=2002"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Asta Glatzer, Steven De Mar, and Curtis Wong. 2002. SmartSkip: consumer level browsing and skipping of digital video content. In <i>Proceedings of the SIGCHI conference on Human factors in computing systems</i>, 219–226.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=SmartSkip%3A%20consumer%20level%20browsing%20and%20skipping%20of%20digital%20video%20content&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20conference%20on%20Human%20factors%20in%20computing%20systems&amp;rft.publisher=ACM&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Asta%20Glatzer&amp;rft.au=Steven%20De%20Mar&amp;rft.au=Curtis%20Wong&amp;rft.date=2002&amp;rft.pages=219%E2%80%93226"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Curtis Wong. 2002. <i>Filtered Electronic Program Guides</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Filtered%20Electronic%20Program%20Guides&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2002"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Curtis Wong, and Steven De Mar. 2002. <i>Right Now Viewer</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Right%20Now%20Viewer&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.au=Steven%20De%20Mar&amp;rft.date=2002"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Jim Gemmell, Gordon Bell, Roger Lueder, <b>Steven M Drucker</b>, and Curtis Wong. 2002. MyLifeBits: fulfilling the Memex vision. In <i>Proceedings of the tenth ACM international conference on Multimedia</i>, 235–238.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=MyLifeBits%3A%20fulfilling%20the%20Memex%20vision&amp;rft.btitle=Proceedings%20of%20the%20tenth%20ACM%20international%20conference%20on%20Multimedia&amp;rft.publisher=ACM&amp;rft.aufirst=Jim&amp;rft.aulast=Gemmell&amp;rft.au=Jim%20Gemmell&amp;rft.au=Gordon%20Bell&amp;rft.au=Roger%20Lueder&amp;rft.au=Steven%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2002&amp;rft.pages=235%E2%80%93238"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Harry Chesley, <b>Steven M Drucker</b>, Anoop Gupta, Greg Kimberly, and Steven White. 2001. <i>Flatland, Rapid prototyping of distributed internet applications</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Flatland%2C%20Rapid%20prototyping%20of%20distributed%20internet%20applications&amp;rft.aufirst=Harry&amp;rft.aulast=Chesley&amp;rft.au=Harry%20Chesley&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Anoop%20Gupta&amp;rft.au=Greg%20Kimberly&amp;rft.au=Steven%20White&amp;rft.date=2001"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">R Alex Colburn, Michael F Cohen, <b>Steven M Drucker</b>, Scott LeeTiernan, and Anoop Gupta. 2001. Graphical enhancements for voice only conference calls. <i>Microsoft Corporation, Redmond, WA, Technical Report MSR-TR-2001-95</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Graphical%20enhancements%20for%20voice%20only%20conference%20calls&amp;rft.jtitle=Microsoft%20Corporation%2C%20Redmond%2C%20WA%2C%20Technical%20Report%20MSR-TR-2001-95&amp;rft.aufirst=R%20Alex&amp;rft.aulast=Colburn&amp;rft.au=R%20Alex%20Colburn&amp;rft.au=Michael%20F%20Cohen&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Scott%20LeeTiernan&amp;rft.au=Anoop%20Gupta&amp;rft.date=2001"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Curtis Wong. 2001. <i>DeepNews: Automatic related material based on closed caption information</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=DeepNews%3A%20Automatic%20related%20material%20based%20on%20closed%20caption%20information&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2001"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Curtis Wong. 2001. <i>Token TV: Sharing preferences for Television DVR recording</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Token%20TV%3A%20Sharing%20preferences%20for%20Television%20DVR%20recording&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Curtis%20Wong&amp;rft.date=2001"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Alex Colburn, Michael F Cohen, and <b>Steven M Drucker</b>. 2000. The role of eye gaze in avatar mediated conversational interfaces. <i>Sketches and Applications, Siggraph’00</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=The%20role%20of%20eye%20gaze%20in%20avatar%20mediated%20conversational%20interfaces&amp;rft.jtitle=Sketches%20and%20Applications%2C%20Siggraph'00&amp;rft.aufirst=Alex&amp;rft.aulast=Colburn&amp;rft.au=Alex%20Colburn&amp;rft.au=Michael%20F%20Cohen&amp;rft.au=Steven%20Drucker&amp;rft.date=2000"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Carlos Jensen, Shelly D Farnham, <b>Steven M Drucker</b>, and Peter Kollock. 2000. The effect of communication modality on cooperation in online environments. In <i>Proceedings of the SIGCHI conference on Human Factors in Computing Systems</i>, 470–477.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20effect%20of%20communication%20modality%20on%20cooperation%20in%20online%20environments&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Carlos&amp;rft.aulast=Jensen&amp;rft.au=Carlos%20Jensen&amp;rft.au=Shelly%20D%20Farnham&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Peter%20Kollock&amp;rft.date=2000&amp;rft.pages=470%E2%80%93477"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Marc A Smith, Shelly D Farnham, and <b>Steven M Drucker</b>. 2000. The social life of small graphical chat spaces. In <i>Proceedings of the SIGCHI conference on Human Factors in Computing Systems</i>, 462–469.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20social%20life%20of%20small%20graphical%20chat%20spaces&amp;rft.btitle=Proceedings%20of%20the%20SIGCHI%20conference%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Marc%20A&amp;rft.aulast=Smith&amp;rft.au=Marc%20A%20Smith&amp;rft.au=Shelly%20D%20Farnham&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=2000&amp;rft.pages=462%E2%80%93469"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>. 1999. <i>Moving from MOOs to Multi-User Applications</i>. Microsoft Research.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Moving%20from%20MOOs%20to%20Multi-User%20Applications&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=1999"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Marc A Smith, <b>Steven M Drucker</b>, Robert Kraut, and Barry Wellman. 1999. Counting on community in cyberspace. In <i>CHI’99 Extended Abstracts on Human Factors in Computing Systems</i>, 87–88.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Counting%20on%20community%20in%20cyberspace&amp;rft.btitle=CHI'99%20Extended%20Abstracts%20on%20Human%20Factors%20in%20Computing%20Systems&amp;rft.publisher=ACM&amp;rft.aufirst=Marc%20A&amp;rft.aulast=Smith&amp;rft.au=Marc%20A%20Smith&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Robert%20Kraut&amp;rft.au=Barry%20Wellman&amp;rft.date=1999&amp;rft.pages=87%E2%80%9388"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">David Vronay, Marc Smith, and <b>Steven M Drucker</b>. 1999. Alternative interfaces for chat. In <i>Proceedings of the 12th annual ACM symposium on User interface software and technology</i>, 19–26.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Alternative%20interfaces%20for%20chat&amp;rft.btitle=Proceedings%20of%20the%2012th%20annual%20ACM%20symposium%20on%20User%20interface%20software%20and%20technology&amp;rft.publisher=ACM&amp;rft.aufirst=David&amp;rft.aulast=Vronay&amp;rft.au=David%20Vronay&amp;rft.au=Marc%20Smith&amp;rft.au=Steven%20Drucker&amp;rft.date=1999&amp;rft.pages=19%E2%80%9326"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Manny Vellon, Kirk Marple, Don Mitchell, and <b>Steven M Drucker</b>. 1998. The Architecture of a Distributed Virtual Worlds System. In <i>COOTS</i>, 211–218.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=The%20Architecture%20of%20a%20Distributed%20Virtual%20Worlds%20System.&amp;rft.btitle=COOTS&amp;rft.aufirst=Manny&amp;rft.aulast=Vellon&amp;rft.au=Manny%20Vellon&amp;rft.au=Kirk%20Marple&amp;rft.au=Don%20Mitchell&amp;rft.au=Steven%20Drucker&amp;rft.date=1998&amp;rft.pages=211%E2%80%93218"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Rebecca Xiong, Marc A Smith, and <b>Steven M Drucker</b>. 1998. Visualizations of collaborative information for end-users. <i>Microsoft Research</i>: 1–8.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Visualizations%20of%20collaborative%20information%20for%20end-users&amp;rft.jtitle=Microsoft%20Research&amp;rft.aufirst=Rebecca&amp;rft.aulast=Xiong&amp;rft.au=Rebecca%20Xiong&amp;rft.au=Marc%20A%20Smith&amp;rft.au=Steven%20M%20Drucker&amp;rft.date=1998&amp;rft.pages=1%E2%80%938"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>. 1994. CamDroid. In <i>Intelligent camera control for graphical environments</i>. MIT.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=CamDroid&amp;rft.publisher=MIT&amp;rft.aufirst=Steven%20Mark&amp;rft.aulast=Drucker&amp;rft.au=Steven%20Mark%20Drucker&amp;rft.date=1994"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>. 1994. Intelligent camera control for graphical environments. Massachusetts Institute of Technology.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adissertation&amp;rft.title=Intelligent%20camera%20control%20for%20graphical%20environments&amp;rft.aufirst=Steven%20Mark&amp;rft.aulast=Drucker&amp;rft.au=Steven%20Mark%20Drucker&amp;rft.date=1994"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>. 1994. Virtual Football. In <i>Intelligent camera control for graphical environments</i>. MIT.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Virtual%20Football&amp;rft.publisher=MIT&amp;rft.aufirst=Steven%20Mark&amp;rft.aulast=Drucker&amp;rft.au=Steven%20Mark%20Drucker&amp;rft.date=1994"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and David Zeltzer. 1994. Intelligent camera control in a virtual environment. In <i>Graphics Interface</i>, 190–190.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Intelligent%20camera%20control%20in%20a%20virtual%20environment&amp;rft.btitle=Graphics%20Interface&amp;rft.publisher=CANADIAN%20INFORMATION%20PROCESSING%20SOCIETY&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=David%20Zeltzer&amp;rft.date=1994&amp;rft.pages=190%E2%80%93190"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>, Tinsley A Galyean, and David Zeltzer. 1992. Cinema: A system for procedural camera movements. In <i>Proceedings of the 1992 symposium on Interactive 3D graphics</i>, 67–70.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Cinema%3A%20A%20system%20for%20procedural%20camera%20movements&amp;rft.btitle=Proceedings%20of%20the%201992%20symposium%20on%20Interactive%203D%20graphics&amp;rft.publisher=ACM&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Tinsley%20A%20Galyean&amp;rft.au=David%20Zeltzer&amp;rft.date=1992&amp;rft.pages=67%E2%80%9370"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b> and Peter Schröder. 1992. Fast radiosity using a data parallel architecture. In <i>Third Eurographics Workshop on Rendering (Bristol, uk</i>, 247–258.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Fast%20radiosity%20using%20a%20data%20parallel%20architecture&amp;rft.btitle=Third%20Eurographics%20Workshop%20on%20Rendering%20(Bristol%2C%20uk&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Peter%20Schr%C3%B6der&amp;rft.date=1992&amp;rft.pages=247%E2%80%93258"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Tinsley Galyean and <b>Steven M Drucker</b>. 1992. <i>Self Inflated</i>.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Self%20Inflated&amp;rft.aufirst=Tinsley&amp;rft.aulast=Galyean&amp;rft.au=Tinsley%20Galyean&amp;rft.au=Steven%20Drucker&amp;rft.date=1992"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Peter Schroder and <b>Steven M Drucker</b>. 1992. A data parallel algorithm for raytracing of heterogeneous databases. <i>Proceedings of Computer Graphics Interface</i>: 167–175.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=A%20data%20parallel%20algorithm%20for%20raytracing%20of%20heterogeneous%20databases&amp;rft.jtitle=Proceedings%20of%20Computer%20Graphics%20Interface&amp;rft.aufirst=Peter&amp;rft.aulast=Schroder&amp;rft.au=Peter%20Schroder&amp;rft.au=Steven%20Drucker&amp;rft.date=1992&amp;rft.pages=167%E2%80%93175"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">David Zeltzer and <b>Steven M Drucker</b>. 1992. A virtual environment system for mission planning. In <i>Proceedings of the IMAGE VI conference</i>, 125–134.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=A%20virtual%20environment%20system%20for%20mission%20planning&amp;rft.btitle=Proceedings%20of%20the%20IMAGE%20VI%20conference&amp;rft.aufirst=David&amp;rft.aulast=Zeltzer&amp;rft.au=David%20Zeltzer&amp;rft.au=Steven%20Drucker&amp;rft.date=1992&amp;rft.pages=125%E2%80%93134"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Eric W Aboaf, <b>Steven M Drucker</b>, and Christopher G Atkeson. 1989. Task-level robot learning: Juggling a tennis ball more accurately. In <i>Robotics and Automation, 1989. Proceedings., 1989 IEEE International Conference on</i>, 1290–1295.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=proceeding&amp;rft.atitle=Task-level%20robot%20learning%3A%20Juggling%20a%20tennis%20ball%20more%20accurately&amp;rft.btitle=Robotics%20and%20Automation%2C%201989.%20Proceedings.%2C%201989%20IEEE%20International%20Conference%20on&amp;rft.publisher=IEEE&amp;rft.aufirst=Eric%20W&amp;rft.aulast=Aboaf&amp;rft.au=Eric%20W%20Aboaf&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Christopher%20G%20Atkeson&amp;rft.date=1989&amp;rft.pages=1290%E2%80%931295"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline"><b>Steven M Drucker</b>. 1988. Texture from Touch. In <i>Natural Computation</i>, Whitman Richards (ed.). MIT Press.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Texture%20from%20Touch&amp;rft.publisher=MIT%20Press&amp;rft.aufirst=Steven%20M&amp;rft.aulast=Drucker&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Whitman%20Richards&amp;rft.date=1988"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Nicole Yankelovich, Bernard J. Haan, Norman K. Meyrowitz, and <b>Steven M Drucker</b>. 1988. Intermedia: The concept and the construction of a seamless information environment. <i>IEEE computer</i> 21, 1: 81–96.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Intermedia%3A%20The%20concept%20and%20the%20construction%20of%20a%20seamless%20information%20environment&amp;rft.jtitle=IEEE%20computer&amp;rft.volume=21&amp;rft.issue=1&amp;rft.aufirst=Nicole&amp;rft.aulast=Yankelovich&amp;rft.au=Nicole%20Yankelovich&amp;rft.au=Bernard%20J.%20Haan&amp;rft.au=Norman%20K.%20Meyrowitz&amp;rft.au=Steven%20M.%20Drucker&amp;rft.date=1988&amp;rft.pages=81%E2%80%9396"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">David M Siegel, <b>Steven M Drucker</b>, and Inaki Garabieta. 1987. <i>Performance analysis of a tactile sensor</i>. IEEE.</div>
    //                                 </div>
    //                                 </li>

    //                                 <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Performance%20analysis%20of%20a%20tactile%20sensor&amp;rft.publisher=IEEE&amp;rft.aufirst=David%20M&amp;rft.aulast=Siegel&amp;rft.au=David%20M%20Siegel&amp;rft.au=Steven%20M%20Drucker&amp;rft.au=Inaki%20Garabieta&amp;rft.date=1987"></span>
    //                                 <li> <div style={{ "clear": "left" }} className="csl-entry">
    //                                     <div style={{ "margin": "0 .4em 0 2.5em" }} className="csl-right-inline">Nicole Yankelovich, Bernard Haan, and <b>Steven M Drucker</b>. 1987. Connections in Context: The intermedia system. <i>Providence, Rhode Island: Institute for Research in Information and Scholarship, Brown University</i>.</div>
    //                                     <span className="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Connections%20in%20Context%3A%20The%20intermedia%20system&amp;rft.jtitle=Providence%2C%20Rhode%20Island%3A%20Institute%20for%20Research%20in%20Information%20and%20Scholarship%2C%20Brown%20University&amp;rft.aufirst=Nicole&amp;rft.aulast=Yankelovich&amp;rft.au=Nicole%20Yankelovich&amp;rft.au=Bernard%20Haan&amp;rft.au=Steven%20Drucker&amp;rft.date=1987"></span>
    //                                 </div>
    //                                 </li>


    //                             </ol>
    //                         </div>

    //                     </div>
    //                     <div className="clear"></div>

    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Press</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <ul>
    //                             <li><a href="https://www.microsoft.com/en-us/garage/profiles/profile-sanddance.aspx">SandDance, a web app</a></li>
    //                             <li><a href="https://www.schemadesign.com/work/microsoft-sanddance">Exploring Data Visually: Microsoft SandDance</a></li>
    //                             <li><a href="http://thenextweb.com/apps/2016/03/23/microsoft-sanddance-beautiful-data-visualization-tool-chart-geeks/">Microsoft SandDance is a beautiful data visualization tool for chart geeks</a></li>
    //                             <li><a href="http://community.powerbi.com/t5/Community-Blog/SandDance-my-first-impressions-and-test/ba-p/30479#.VxkeggQntpg.twitter">SandDance, my first impression​s and test</a></li>
    //                             <li><a href="http://analyticswithankit.blogspot.com/2016/04/sanddance-in-power-bi.html">A blog on modern business intelligence technologies, tools and miscellaneous things</a></li>
    //                             <li><a href="http://www.fastcodesign.com/3058185/microsofts-new-data-viz-tool-puts-excel-charts-to-shame">Microsoft&#8217;s New Data-Viz Tool Puts Excel Charts To Shame</a></li>
    //                             <li><a href="https://blogs.microsoft.com/firehose/2016/03/22/discover-stories-within-data-using-sanddance-a-new-microsoft-research-project/">Discover stories within data using SandDance, a new Microsoft Research project </a></li>
    //                             <li><a href="https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sanddance/">Visual Awesomeness Unlocked – SandDance</a></li>
    //                             <li><a href="http://www.tricentis.com/blog/2016/04/07/software-fail-watch-2016-quarter-one/">Software Fail Watch 2016, Quarter One</a></li>
    //                             <li><a href="http://www.techworm.net/2016/03/microsoft-sanddance-lets-discover-stories-within-data.html">Microsoft SandDance lets you discover stories within data</a></li>
    //                             <li><a href="http://www.fiercecio.com/story/sanddance-tells-data-stories-can-be-harder-read/2016-03-23">SandDance tells the data stories that can be harder to read </a></li>
    //                             <li><a href="http://www.stocksdaily.net/microsoft-corporation-nasdaqmsft-sanddance-aids-in-finding-stories-and-extracting-insight-from-data/77006/">SandDance Aids In Finding Stories And Extracting Insight From Data</a></li>
    //                             <li><a href="http://sqlmag.com/business-intelligence/power-bi-cozies-excel-gets-other-upgrades-microsoft-data-insight-summit">Power BI cozies up with Excel, gets other upgrades at Microsoft Data Insight Summit</a></li>
    //                             <li><a href="http://thenextweb.com/apps/2016/03/23/microsoft-sanddance-beautiful-data-visualization-tool-chart-geeks/">Microsoft SandDance is a beautiful data visualization tool for chart geeks </a></li>
    //                             <li> <a href="http://www.discover.com/issues/may-04/departments/emerging-technology"> Beauty and the Beastly PC: Microsoft discovers that software should be—surprise!—a thing of beauty. </a>
    //                                 Steven Johnson, Discover Magazine, Vol. 25, No. 4, May, 2004. </li>
    //                             <li> <a href="http://www.canada.com/vancouver/theprovince/news/archives/story.html?id=a3930671-4985-40a7-a6e5-d3c46464a41d"> Imagining a digital future: Passion for science drives research to open new Windows, </a>
    //                                 Jim Jamieson, The Province, April 4, 2004. </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/NYTimes31904.pdf"> Navigating Home Networks </a>
    //                                 Michel Marriott, New York Times, February 19, 2004.  </li>
    //                             <li> <a href="http://www.wired.com/news/technology/0,1282,61837,00.html?tw=wn_tophead_2"> Gates previews 'amazing decade.' </a>
    //                                 Wired Magazine, January 8, 2004. </li>
    //                             <li> <a href="http://www.microsoft.com/billgates/speeches/2004/01-07ces.asp">CES Keynote Speech With Bill Gates, (towards the end of transcript)</a>
    //                                 CES, January, 2004.</li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/Press/dance.html">StepMail/StepPhoto </a>
    //                                 Ars Electronica, 3/1/2006.  </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/Press/spectator.mht"> Spectator: Microsoft 5000th Patent </a>
    //                                 XGP Gaming, 3/2006  </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/Press/IT%20Business.mht"> At home with Microsoft Research </a>
    //                                 ITBusiness.ca, Interview 4/13/2006)  </li>
    //                         </ul>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Invited Presentations</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <ul>
    //                             <li>Microsoft CEO Summit Keynote Demo</li>
    //                             <li>Texas A&amp;M: Distinguished Lecturer</li>
    //                             <li>Georgia Tech (Atlanta, GA) Distinguished Lecturer</li>
    //                             <li>SFU (Vancouver, BC) Distinguished Lecturer</li>
    //                             <li>PARC (Palo Alto, California)</li>
    //                             <li>USC (LA, Calilfornia)</li>
    //                             <li>CMU (Pittsburgh, PA)</li>
    //                             <li>E3 (Electronic Entertainment Exposition) “Educational Game Technology”</li>
    //                             <li>GDC (Game Developer Conference) “MSR Graphics and Game”</li>
    //                             <li>Microsoft Faculty Summit</li>
    //                             <li>Microsoft South American Faculty Summit (Brazil)</li>
    //                             <li>Microsoft South American Faculty Summit (Chile)</li>
    //                             <li>MIT CSAIL, Media Laboratory (Cambridge, MA)</li>
    //                             <li>Keynote demo, Bill Gates Presentation Consumer Electronics Show</li>
    //                             <li>Keynote demo, Bill Gates, MGB</li>
    //                             <li>Berkeley, (Berkeley, CA)</li>
    //                             <li>Kunsthochshule für Medien(Cologne, Germany)</li>
    //                             <li>GMD (Bonn, Germany)</li>
    //                             <li>NACB (Providence, RI)</li>
    //                             <li>NHK (Japan)</li>
    //                             <li>Dartmouth University (NH)</li>
    //                             <li>MERL (Cambridge, MA.)</li>
    //                         </ul>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>

    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Selected Presentations</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <ul>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/Presentations/Making Tools for Making Games.ppt"> Making Tools for Making Games</a>, Presented at Education Arcade, E3, May, 2004. </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/novel2004.ppt"> Creating Novel Experiences for interacting with media </a>, Presented at Strategy Day, November, 2004  </li>
    //                             <li><a href="http://research.microsoft.com/~sdrucker/Presentations/MIT2006.ppt"> Information Overload meets Information Visualization: Building user interfaces to deal with too much information </a>, MIT, 2006. </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/Presentations/DealingWithDigitalStuff.pptx"> Dealing with your Digital ‘Stuff’: Lessons from Information Visualization for Interacting with collections </a>. Georgia Tech, SFU, 2012 </li>
    //                             <li> <a href="http://research.microsoft.com/~sdrucker/presentations/visualizationCommunication.pptx"> Visualization Communication. </a> HCIC, 2012 </li>
    //                         </ul>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>
    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Reviews and Committees</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <ul>
    //                             <li>iCampus Joint Steering Committee (Microsoft-MIT Educational Technology Grant)</li>
    //                             <li>Graphics Interface Program Committee</li>
    //                             <li>SIGCHI Awards Chair</li>
    //                             <li>SIGCHI Program Committee</li>
    //                             <li>UIST Program Committee</li>
    //                             <li>Infovis Program Committee</li>
    //                             <li>Infovis Fundraising/Exhibits Chair</li>
    //                             <li>VAST Program Committee</li>
    //                             <li>ISVC (International Symposium on Visual Computing) Program Committee</li>
    //                             <li>ISWC (International Semantic Web Conference Program Committee)</li>
    //                             <li>WWW Conference, Program Committee</li>
    //                             <li>Communications of the ACM, Guest Editor</li>
    //                             <li>IEEE CG&amp;A: Guest Editor</li>
    //                             <li>SIGGRAPH, SIGCHI, UIST, SIGCHI, TOG,WWW,IUI,TOCHI,CG&amp;A reviewer</li>
    //                         </ul>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>
    //                 <section>
    //                     <div className="sectionTitle">
    //                         <h1>Granted Patents</h1>
    //                     </div>

    //                     <div className="sectionContent">
    //                         <ol>
    //                             <li>    Animation Transitions and Effects In A Spreadsheet Application</li>
    //                             <li>	VISUALIZATION OF CHANGING CONFIDENCE INTERVALS</li>
    //                             <li>	Image Completion Including Automatic Cropping</li>
    //                             <li>	JUXTAPOSING STILL AND DYNAMIC IMAGERY FOR CLIPLET CREATION</li>
    //                             <li>	RELATIONAL RENDERING OF MULTI-FACETED DATA</li>
    //                             <li>	Staged Animated Transitions for Aggregation Charts</li>
    //                             <li>	GENERATING CUSTOMIZED DATA BOUND VISUALIZATIONS</li>
    //                             <li>	Browsing Related Image Search Result Sets</li>
    //                             <li>	TEXT MINING OF MICROBLOGS USING LATENT TOPIC LABELS</li>
    //                             <li>	COMMUNITY AUTHORING CONTENT GENERATION AND NAVIGATION</li>
    //                             <li>	EXPLORING DATA USING MULTIPLE MACHINE-LEARNING MODELS</li>
    //                             <li>	ASSISTED CLUSTERING</li>
    //                             <li>	Pluggable Web-based Visualizations for Applications</li>
    //                             <li>	ANIMATION TRANSITION ENGINE</li>
    //                             <li>	RENDERING ANNOTATIONS FOR IMAGES</li>
    //                             <li>	Hybrid Interface for Interactively Registering Images to Digital Models</li>
    //                             <li>	VISUAL SUMMARIZATION OF WEB PAGES</li>
    //                             <li>	Collection Represents Combined Intent</li>
    //                             <li>	3D Content Aggregation  Built Into Devices</li>
    //                             <li>	Mark-up Extensions for Semantically more Relevant Thumbnails of Content</li>
    //                             <li>	Multi-Scale Navigational Vsualization</li>
    //                             <li>	Non-Destructive Media Presentation Derivatives</li>
    //                             <li>	Procedural Authoring</li>
    //                             <li>	Dynamic Multi-scale Schema</li>
    //                             <li>	Intermediate Point Between Images to Insert/Overlay Ads</li>
    //                             <li>	CLIENT-SIDE COMPOSING/WEIGHTING OF ADS</li>
    //                             <li>	Zoom for Annotatable Margins</li>
    //                             <li>	Connected Gaming</li>
    //                             <li>	User-created Trade Cards</li>
    //                             <li>	Trade Card Services</li>
    //                             <li>	Integrating Ads with Media</li>
    //                             <li>	Magic Wand</li>
    //                             <li>	Non-Media Centric Packaging of Content</li>
    //                             <li>	Accounting For Behavioral Variability In Web Search</li>
    //                             <li>	Mining Implicit Behavior</li>
    //                             <li>	Automatic Configuration of Devices Based on Biometric Data</li>
    //                             <li>	Face Recognition Using Discriminatively Trained Orthogonal Tensor Projections</li>
    //                             <li>	Image Organization Based on Image Content</li>
    //                             <li>	Persistent Spatial Collaboration</li>
    //                             <li>	Persistent Collaborative Framework for Interactive Web Applications</li>
    //                             <li>	Dynamic Thumbnails For Document Navigation</li>
    //                             <li>	Representing Animation As A Static Image On A Graphical User Interface</li>
    //                             <li>	Flow Computing</li>
    //                             <li>	Digital Image Browser</li>
    //                             <li>	Graphical Web Browser History Toolbar</li>
    //                             <li>	Automatic Layout of Items Along an Embedded One-Manifold Path</li>
    //                             <li>	A Presentation Viewing Tool Designed For The Viewer</li>
    //                             <li>	Manipulating Association of a Data with a Physical Object</li>
    //                             <li>	Rapid Visual Sorting of Digital Files and Data</li>
    //                             <li>	Using Physical Objects to Adjust Attributes of an Interactive Display Application</li>
    //                             <li>	Using a Physical Object to Control an Attribute of an Interactive Display Application</li>
    //                             <li>	Mediacube</li>
    //                             <li>	A System And Process For Controlling A Shared Display Given Inputs From Multiple Users Using Multiple Input Modalities</li>
    //                             <li>	Interactive Media Frame Display</li>
    //                             <li>	Relationship View</li>
    //                             <li>	Media Frame Object Visualization System</li>
    //                             <li>	Rapid Media Group Annotation</li>
    //                             <li>	Random Access Editing Of Media</li>
    //                             <li>	Media Variations Browser</li>
    //                             <li>	System and Method to Provide a Spectator Experience for Network Gaming</li>
    //                             <li>	Transportable Identifier and System and Method to Facilitate Access to Broadcast Data</li>
    //                             <li>	Shared and Private Object Stores for a Networked Computer Application Communication Environment</li>
    //                             <li>	System and Method for Content Retrieval</li>
    //                             <li>	System and Method for Identifying Audio/Visual Programs to b e Recorded</li>
    //                             <li>	System and Method to Facilitate Selection and Programming of an Associated Audio/Visual System</li>
    //                             <li>	System and Method for Providing Program Criteria Representing Audio and/or Visual Programming</li>
    //                             <li>	Improved Visualizations for Collaborative Information</li>
    //                             <li>	Social Dilemma Software for Evaluating Online Interactive Societies</li>
    //                             <li>	High Density Visualizations for Threaded Information</li>
    //                             <li>	View Dependent Tiled Textures</li>
    //                             <li>	Dynamic Inheritance Of Software Object Services</li>
    //                             <li>	Distributed Object Oriented Multi-User Domain with Multimedi a Presentations</li>
    //                             <li>	Software Object Security Mechanism</li>
    //                             <li>	Virtual Environment Bystander Updating in Client Server Arch itecture</li>
    //                             <li>	Compression of Graphic Data Normals</li>
    //                         </ol>
    //                     </div>
    //                     <div className="clear"></div>
    //                 </section>
    //             </div>
    //         </div>
    //     )
    // }



import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

import { image2, image3, image1, image4 } from "../assets/images/index"

const Home = () => {

  

  return (

    <div className="home">
      
      <div className="carousel">
        <div className="list">



        <div class="grid-container">
    <div class="grid-item">
        <img  className='grid_img' src={image1} alt="toto 1" />

        <div class="overlay">
        <Link to="/upload"><button className='' >Upload</button></Link>
          
        </div>
    </div>
    <div class="grid-item">
        <img className='grid_img'   src={image2} alt="docig 2" />
        <div class="overlay">
        <Link to="/todo"><button className='' >Add To-Do</button></Link>
        </div>
    </div>
    <div class="grid-item">
        <img className='grid_img'  src={image3} alt="mongo 3" />
        <div class="overlay">
        <Link to="/time_table"><button className='' >Time Table</button></Link>
        </div>
    </div>
    <div class="grid-item">
        <img className='grid_img'  src={image4} alt="angna 4" />
        <div class="overlay">
        <Link to="/soon"><button className='' >Soon..</button></Link>
        </div>
    </div>
</div>






{/*  --------- itme 1 --------------- */}
                        {/* <div className="item">
                          <img src={image2} alt="To-do List" />

                          <div className="introduce">
                            <div className="title">Make a list of all your tasks</div>
                            <div className="topic">To-do list</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">Get started &#8599;</button>
                          </div>
                          <div className="detail">
                            <div className="title">To-do list</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                          </div>
                        </div> */}
{/*  --------- itme 2 --------------- */}
                        {/* <div className="item">
                          <img src={image3} alt="Timetable"/>
                          <div className="introduce">
                            <div className="title">Check your schedule</div>
                            <div className="topic">Timetable</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">Get started &#8599;</button>
                          </div>
                          <div className="detail">
                            <div className="title">Course Timetable</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                          </div>
                        </div> */}
{/*  --------- itme 3 --------------- */}

                        {/* <div className="item">
                          <img src={image1} alt="Documents" />
                          <div className="introduce">
                            <div className="title">Store your important documents</div>
                            <div className="topic">Documents</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                            </div>
                            <button className="seeMore">Get started &#8599;</button>
                          </div>
                          <div className="detail">
                            <div className="title">Documents</div>
                            <div className="des">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                            </div>
                          </div>
                        </div> */}

{/*  --------- itme 4 --------------- */}
                        {/* <div className="item">
                            <img src={image4} alt="Attendance" />
                            <div className="introduce">
                              <div className="title">Keep track of your attendance</div>
                              <div className="topic">Attendance</div>
                              <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                              </div>
                              <button className="seeMore">Get started &#8599;</button>
                            </div>

                            <div className="detail">
                              <div className="title">Attendance</div>
                              <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                              </div>
                            </div>
                        </div> */}

{/*  --------- item ends heree --------------- */}
  
        </div>

        {/* <div className="arrows">
          <button id="prev">&#60;</button>
          <button id="next">&#62;</button>
          <button id="back">See All &#8599;</button>
        </div> */}

      </div>
    </div>
  );
};

export default Home;

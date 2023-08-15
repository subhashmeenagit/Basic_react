import React from 'react'
import vg from "../assets/pic2.jpg"

import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id="homees">

                <main>
                    <h1>tech_master</h1>
                    <p>we have best solution For your tech problems.</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt='graphics' />
                <div>
                    <p>Techolution is a consulting firm specializing in Innovation done right. We co-create solutions and
                        deliver transformations at
                        a fixed price for enterprises</p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>who we are ?</h1>


                    <p>Since 2014 Techsolution delivers IT solutions all over Chile, such as IT outsourcing, structured cabling, Electrical projects, CCTV and others, offering high quality standards in all our different area services to our clients, covering any place in the country.
                        Techsolution is a company focused on deliver the best service to their clients, competitive, dynamic with broad future repercussions whose mission is to do easy and natural the IT management, offering integral and interdisciplinary services to our clients.
                    </p>
                </div>
            </div>


            <div className="home4" id="brands">

                <div>
                    <h1>brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.9s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillInstagram />
                            <p>Github</p>
                        </div>
                        <div style={{ animationDelay: "0.1s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
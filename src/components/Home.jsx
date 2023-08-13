import React from 'react'
import vg from "../assets/pic2.jpg"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id="homees">

                <main>
                    <h1>techystar</h1>
                    <p>we provides best solution for your problems</p>
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
        
            
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
</p>   
        </div>
         </div>


<div className="home4" id="brands">

    <div>
        <h1>brands</h1>
        <article>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.1s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
        </article>
    </div>
</div>
        </>
    )
}

export default Home
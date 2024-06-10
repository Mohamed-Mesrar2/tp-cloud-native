import React from "react";
import { Link } from "react-router-dom";
function Detail(){
    return (
        <div>
            <img src='s.jpeg' className="log"  height="100%" width="50%"/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum temporibus quaerat nesciunt ad. Sed, <br />
         nostrum eius dolores ratione ipsa non autem veritatis, optio dolorum esse voluptatem <br />
         itaque repudiandae in.</p>
         <Link to="/home">ajeter en stocke</Link>
        </div>
    )
};
export default Detail;
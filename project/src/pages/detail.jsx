import React from "react";
import { Link } from "react-router-dom";
function Detail(){
    return (<>
        <div width="50px" style={{display:"flex"}} >
            <img src='s.jpeg' className="log" width={"700px"} />
         <p style={{padding:33}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum temporibus quaerat nesciunt ad. Sed, <br />
         nostrum eius dolores ratione ipsa non autem veritatis, optio dolorum esse voluptatem <br />
         itaque repudiandae in.
         <br /><br />
         <Link style={{padding:20,backgroundColor:"black",borderRadius:20}} to="/home">ajeter en stocke</Link>
         </p>

        </div>
         </>
    )
};
export default Detail;
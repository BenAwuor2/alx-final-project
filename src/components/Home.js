// import React from "react";


// function Home() {
//   return (
//     <div className="hero">
//       <div class="card bg-dark text-white border-0">
//         <img src="../assets/bg.jpg" class="card-img" alt="Background" />
//         <div class="card-img-overlay">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </p>
//           <p class="card-text">Last updated 3 mins ago</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import backgroundImage from "../assets/bg.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={backgroundImage} className="card-img" alt="Background" height={'550px'}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder ms-0" style={{ color: "#e62246" }} >New Season Arrivals</h5>
          <p className="card-text lead fs-2" style={{ color: "#e62246" }}>
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
          
         
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;

// import React, {useState} from "react";
// import BottomRow from "./BottomRow";
// import "./App.css";



// function App(){
//   const [lionScore, setlionScore] = useState(0);
//   const [tigerScore, settigerScore] = useState(0);

//   return (
//     <div className="container">
//       <section className="scoreboard">
//         <div className="topRow">
//           <div className="home">
//             <h2 className="home__name">Lions</h2>

//             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

//             <div className="home__score">{lionScore}</div>

//             <div className="homeButtons">
//               {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//               <button className="homeButtons__touchdown" onClick={() => setlionScore(lionScore + 6)}>Home Touchdown</button>
//               <button className="homeButtons_extraPoint" onClick={() => setlionScore(lionScore + 1)}>Home Extra Point</button>
//               <button className="homeButtons_twoPoints" onClick={() => setlionScore(lionScore + 2)}>Home Two Points</button>
//               <button className="homeButtons__fieldGoal" onClick={() => setlionScore(lionScore + 3)}>Home Field Goal</button>
//             </div>

//           </div>
//           <div className="awayButtons">
//               <button className="awayButtons__touchdown" onClick={() => settigerScore(tigerScore + 6)}>Away Touchdown</button>
//               <button className="awayButtons_extraPoint" onClick={() => settigerScore(tigerScore + 1)}>Away Extra Point</button>
//               <button className="awayButtons_twoPoints" onClick={() => settigerScore(tigerScore + 2)}>Away Two Points</button>
//               <button className="awayButtons__fieldGoal" onClick={() => settigerScore(tigerScore + 3)}>Away Field Goal</button>
//             </div>

//           </div>
//         </section>
//         <BottomRow />
//       </div>
//   );

// }

// export default App();
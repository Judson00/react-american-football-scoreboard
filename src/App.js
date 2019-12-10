//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setlionScore] = useState(0);
  const [tigerScore, settigerScore] = useState(0);

  //Set state for timer
  const [seconds, setSeconds] = useState(0);
  const [tenthseconds,setTenthSeconds] = useState(0)
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
    //Toggle function
    function toggle() {
      setIsActive(!isActive);
    }
  
    //Reset function
    function reset() {
      setMinute(0)
      setTenthSeconds(0)
      setSeconds(0);
      setIsActive(false);
    }
    
    //Minute counter
    let min = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setMinute((minute) =>  (minute < 9) ? minute + 1 : minute = 0 );
        }, 60000);
      } else if (!isActive && minute !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, minute]);
      
    //Tenth-place Second counder
   let tenthsec = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setTenthSeconds((tenthseconds) =>  (tenthseconds < 5) ? tenthseconds +1 : tenthseconds = 0 );
        }, 10000);
      } else if (!isActive && tenthseconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, tenthseconds]);

    //One-place second counter
   let sec = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((seconds) =>  { if (seconds < 9) { return seconds +1 } else {  return seconds = 0} } );
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>

            <div className="homeButtons">
              {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
              <button className="homeButtons__touchdown" onClick={() => setlionScore(lionScore + 6)}>Home Touchdown</button>
              <button className="homeButtons_extraPoint" onClick={() => setlionScore(lionScore + 1)}>Home Extra Point</button>
              <button className="homeButtons_twoPoints" onClick={() => setlionScore(lionScore + 2)}>Home Two Points</button>
              <button className="homeButtons__fieldGoal" onClick={() => setlionScore(lionScore + 3)}>Home Field Goal</button>
            </div>

          </div>

          <div className="timer">{minute}:{tenthseconds}{seconds}</div>
            <button className="start-button"  onClick={() => toggle()}>Start/Stop</button>
            <button className="reset-button"  onClick={() => reset()}>Reset</button>

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>

            <div className="awayButtons">
              <button className="awayButtons__touchdown" onClick={() => settigerScore(tigerScore + 6)}>Away Touchdown</button>
              <button className="awayButtons_extraPoint" onClick={() => settigerScore(tigerScore + 1)}>Away Extra Point</button>
              <button className="awayButtons_twoPoints" onClick={() => settigerScore(tigerScore + 2)}>Away Two Points</button>
              <button className="awayButtons__fieldGoal" onClick={() => settigerScore(tigerScore + 3)}>Away Field Goal</button>
            </div>

          </div>
        </div>
        <BottomRow />
      </section>
    </div>
  );
}

export default App;

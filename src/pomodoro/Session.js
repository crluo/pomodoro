import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";
import Pause from "./Pause";

export default function Session({ session, focusDuration, breakDuration, playPauseToggle, progressBar, setProgressBar }) {
    
    // only renders section when session is in started
    if (!session) return null;

    function findSessionDuration() {
        return (session?.label === "Focusing") ? focusDuration : breakDuration;
    }

    setProgressBar(() => (1-(session.timeRemaining/(findSessionDuration()*60)))*100)

    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(findSessionDuration())}{" "}
              minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <Pause playPauseToggle={playPauseToggle} />
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progressBar}
                style={{ width: `${progressBar}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
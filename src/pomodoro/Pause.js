import React from "react";

// renders a Pause statement when timer is paused
export default function Pause({playPauseToggle}) {
    if (playPauseToggle === "pause") {
        return (<h2>PAUSED</h2>);
    } else {
        return null;
    }
}
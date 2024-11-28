import React, { useState } from "react";

const DayBox = ({ day }) => {
  const [hovered, setHovered] = useState(false);

  const getColor = (count) => {
    if (count === 0) return "#e0e0e0";
    if (count < 10) return "#cce5ff";
    if (count < 20) return "#99ccff";
    return "#3399ff";
  };

  // get day from day.date 
  const dayNumber = day.date ? parseInt(day.date.split("-")[2]) : "";

  return (
    <div
      className="day-box"
      style={{ backgroundColor: getColor(day.listenedSongsCount) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {dayNumber} {/*  */}
      {hovered && day.topTrack && (
        <div className="tooltip">
          <p>Date: {day.date}</p>
          <p>Listened: {day.listenedSongsCount} songs</p>
          <p>Top Track: {day.topTrack.name}</p>
          <img
            src={day.topTrack.albumArt}
            alt={day.topTrack.name}
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      )}
    </div>
  );
};

export default DayBox;



import React, { useState } from "react";

const DayBox = ({ day }) => {
  const [hovered, setHovered] = useState(false);
  //green
  const getColor = (count) => {
    if (count === 0) return "#e0e0e0";
    if (count < 15) return "#b3e6b3"; 
    if (count < 30) return "#80d680"; 
    if (count < 45) return "#4db84d"; 
    return "#269926"; 
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
      {hovered && day.topTrack &&  day.listenedSongsCount > 0 &&(
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



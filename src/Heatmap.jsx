import React from "react";
import DayBox from "./DayBox";
import "./Heatmap.css";

const Heatmap = ({ data }) => {
  const daysInJanuary = 31;

  // creat calendar
  const calendar = Array.from({ length: daysInJanuary }, (_, i) => {
    const date = `2024-01-${String(i+1).padStart(2, "0")}`;
    const dayData = data.find((item) => item.date === date);
    
    //console.log(`Day: ${date}, Data:`, dayData);
    return dayData || { date, listenedSongsCount: 0, topTrack: null };
  });

  return (
    <div className="heatmap">
      {calendar.map((day, index) => (
        <DayBox key={index} day={day} />
      ))}
    </div>
  );
};

export default Heatmap;

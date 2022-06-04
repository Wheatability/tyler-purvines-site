import { useState } from 'react';

function ECChart({ days }) {

  const [tooltips, setTooltips] = useState([false, false, false, false, false, false, false]);

  // Process json strings into usable numbers in array
  let barHeights = [];
  for (let x = 0; x < days.length; x++) {
    barHeights.push(Number(days[x].amount))
  }

  // Determine ratio for bar chart height
  const max = Math.max(...barHeights);
  const ratio = 150 / max;
  const barRatios = barHeights.map((height) => { return Math.floor(height * ratio) });

  // Hover States
  function handleMouseEnter(e, index) {
    // Build Hover State
    e.preventDefault()
    let hoverStates = tooltips.map((val, i) => {
      if (index === i) {
        return true;
      } else return false;
    })
    setTooltips(hoverStates);
  }
  function handleMouseLeave(e, index) {
    e.preventDefault();
    setTooltips([false, false, false, false, false, false, false]);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-end space-x-3 md:space-x-4 h-[150px] md:h-[178px] select-none">
          {days.map((day, index) => {
            if (index === 2) {
              return (
                <div key={index} className="relative w-full">
                  <div onMouseEnter={e => handleMouseEnter(e, index)} onMouseLeave={e => handleMouseLeave(e, index)} style={{
                    height: barRatios[index]
                  }} className="bg-ec-cyan w-full rounded-[3px] md:rounded-[5px] hover:opacity-80">
                  </div>
                  {tooltips[index] && <div className="absolute -top-[35px] md:-top-[48px] -left-[9px] md:-left-[10px] bg-ec-brown-700 text-ec-card-white text-ec-xs md:text-ec-md font-bold w-[50px] md:w-[75px] h-[30px] md:h-[40px] rounded-[3px] md:rounded-[5px] flex justify-center items-center">${day.amount}</div>}

                </div>
              );
            } else {
              return (
                <div key={index} className="relative w-full">
                  <div onMouseEnter={e => handleMouseEnter(e, index)} onMouseLeave={e => handleMouseLeave(e, index)} style={{
                    height: barRatios[index]
                  }} className="bg-ec-orange w-full rounded-[3px] md:rounded-[5px] hover:opacity-80">
                  </div>
                  {tooltips[index] && <div className="absolute -top-[35px] md:-top-[42px] -left-[9px] md:-left-[10px] bg-ec-brown-700 text-ec-card-white text-ec-xs md:text-ec-md font-bold w-[50px] md:w-[70px] h-[30px] md:h-[35px] rounded-[3px] md:rounded-[5px] flex justify-center items-center">${day.amount}</div>}
                </div>
              );
            }

          })}
        </div>
        <div className="flex space-x-3 h-[16px] mt-3">
          {days.map((day, index) => {
            return (
              <div key={index} className="w-full rounded-[3px] text-center text-ec-brown-400 text-ec-xs md:text-ec-sm">{day.day}</div>
            );
          })}
        </div>
      </div>
    </div >
  );
}

export default ECChart;

import ECChart from "./ec-chart";

function ECSpending({ days }) {
  return (
    <>
      <div id="spending" className="flex flex-col justify-between h-[421px] space-y-6 bg-ec-card-white rounded-[10px] p-[20px]">
        <p className="text-ec-lg text-ec-brown-700 font-bold">Spending - Last 7 Days</p>
        <div className="h-[225px] border-b-2 border-[#F8E9DD] pb-6 pt-6">
          <ECChart days={days} />
        </div>
        <div className="flex flex-col justify-between space-y-[3px]">
          <div className="flex flex-col">
            <p className="text-ec-brown-400 text-ec-sm">Total this month</p>
          </div>
          <div className="flex justify-between">
            <p className="text-ec-xl text-ec-brown-700 font-bold">$478.33</p>
            <div>
              <p className="text-ec-brown-700 font-bold text-right text-ec-sm">+2.4%</p>
              <p className="text-ec-brown-400 text-ec-sm">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ECSpending
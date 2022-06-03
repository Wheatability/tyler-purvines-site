import ECChart from './ec-chart';

function ECSpending({ days }) {
  return (
    <>
      <div id="spending" className="flex flex-col justify-between h-[421px] md:h-[511px] space-y-6 bg-ec-card-white rounded-[10px] md:rounded-[20px] p-[20px] md:p-[40px] md:pt-[32px]">
        <p className="text-ec-lg md:text-ec-xxl text-ec-brown-700 font-bold">Spending - Last 7 Days</p>
        <div className="h-[225px] md:h-[278px] border-b-2 border-[#F8E9DD] pb-6 md:pb-8 pt-6 md:pt-4">
          <ECChart days={days} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-ec-brown-400 text-ec-sm md:text-ec-md">Total this month</p>
          </div>
          <div className="flex justify-between">
            <p className="text-ec-xl md:text-ec-xxxl text-ec-brown-700 font-bold">$478.33</p>
            <div>
              <p className="text-ec-brown-700 font-bold text-right text-ec-sm md:text-ec-md">+2.4%</p>
              <p className="text-ec-brown-400 text-ec-sm md:text-ec-md">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ECSpending
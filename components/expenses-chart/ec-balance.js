function ECBalance() {
  return (
    <>
      <div className="h-[97px] bg-ec-orange rounded-[10px] flex justify-between p-[20px]">
        <div className="flex flex-col justify-center text-white space-y-[4px]">
          <p className="text-ec-sm">My balance</p>
          <p className="text-ec-lg font-bold">$921.48</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-[60px] h-[40px]">
            <svg viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" /></g></svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ECBalance;
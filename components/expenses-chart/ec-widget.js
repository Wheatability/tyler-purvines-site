import ECBalance from '../../components/expenses-chart/ec-balance';
import ECSpending from './ec-spending';

function ECWidget({ data }) {
  return (
    <>
      <div id="widget" className="h-[534px] md:h-[660px] w-[343px] md:w-[540px] flex flex-col space-y-[16px] md:space-y-[24px] font-ec-sans select-auto">
        <ECBalance />
        <ECSpending
          days={data.days} />
      </div>
    </>
  );
};

export default ECWidget
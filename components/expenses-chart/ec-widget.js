import ECBalance from '../../components/expenses-chart/ec-balance';
import ECSpending from './ec-spending';

function ECWidget({ data }) {
  return (
    <>
      <div id="widget" className="h-[534px] w-[343px] flex flex-col space-y-[16px] font-ec-sans select-auto">
        <ECBalance />
        <ECSpending
          days={data.days} />
      </div>
    </>
  );
};

export default ECWidget
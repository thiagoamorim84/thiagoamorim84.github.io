import { allReports } from '../data/investments';
import Report from '../components/Report';
import { currencyNumberFormat, percentNumberFormat } from '../util/util';

export default function Investment({
  children: investment = null,
  onInvestmentClick = null,
  isVisited = false,
}) {
  if (!investment) {
    return <div>Impossível renderizar o investimento</div>;
  }

  const { id, description } = investment;

  let invReports = allReports
    .filter(rep => rep.investmentId === id)
    .sort((r1, r2) => r1.month - r2.month);

  let firstValue = +0;
  let lastValue = +0;

  if (invReports) {
    invReports.forEach(rep => {
      rep.rendimento =
        lastValue !== 0 ? (rep.value - lastValue) / lastValue : 0;
      lastValue = rep.value;
      if (!firstValue) {
        firstValue = rep.value;
      }
    });
  }

  let totalYield = currencyNumberFormat.format(
    Number(lastValue - firstValue).toFixed(2)
  );

  let percentYield = percentNumberFormat.format(
    Number((lastValue - firstValue) / firstValue).toFixed(4)
  );

  return (
    <div
      className={`border p-2 m-2 flex flex-col items-center space-x-2 cursor-pointer`}
    >
      <h1 className="font-bold text-xl">{description}</h1>
      <h2>
        <strong>Rendimento total:</strong> {totalYield} ({percentYield})
      </h2>

      {invReports.map(rep => {
        return <Report key={rep.id}>{rep}</Report>;
      })}
    </div>
  );
}

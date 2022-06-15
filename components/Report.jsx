import {
  formatDate,
  currencyNumberFormat,
  percentNumberFormat,
} from '../util/util';

export default function Report({ children: report = null }) {
  const { year, month, value, rendimento } = report;

  return (
    <div className={`p-2 m-2 flex flex-row items-center w-full space-x-2`}>
      <div className="flex-1 w-1/3">
        <span>{formatDate(year, month)}</span>
      </div>
      <div className="flex-1 w-1/3 text-center">
        <span>{currencyNumberFormat.format(Number(value).toFixed(2))}</span>
      </div>
      <div className="flex-1 w-1/3 text-right">
        <span>{`${percentNumberFormat.format(
          Number(rendimento).toFixed(4)
        )}`}</span>
      </div>
    </div>
  );
}

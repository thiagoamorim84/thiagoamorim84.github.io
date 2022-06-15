import Investments from '../components/Investments';
import Investment from '../components/Investment';
import Header from '../components/Header';
import Main from '../components/Main';

import { allInvestments } from '../data/investments';

document.title = 'Investments';
console.log(allInvestments);

export default function ReactInvestmentsPage() {
  return (
    <div>
      <Header>react-investments</Header>

      <Main>
        <Investments>
          <h2 className="text-center font-semibold">
            {allInvestments.length} investimentos
          </h2>

          {allInvestments.map(inv => {
            return <Investment key={inv.id}>{inv}</Investment>;
          })}
        </Investments>
      </Main>
    </div>
  );
}

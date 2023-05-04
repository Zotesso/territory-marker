import { useState } from 'react';
import './styles.css';

const AccordionItem = (): JSX.Element => {
  const [activeItem, toogleActiveTab] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => toogleActiveTab(!activeItem)} className={"accordion " + (activeItem ? 'active' : '')}>
        Section 1
      </button>
    <div className="panel" style={activeItem ? {display: 'flex'} : {display: 'none'}}>
      <table>
        <tbody>
        <tr>
          <th>Owner</th>
          <th>Initial Date</th>
          <th>Finish Date</th>
          <th></th>
        </tr>
        <tr>
          <td>Eu</td>
          <td>2022-02-02</td>
          <td>2022-02-02</td>
          <td><button>Salvar</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AccordionItem;

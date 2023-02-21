import { FC, useState } from 'react';
import './styles.css';

export interface SidebarProps {
  active: boolean;
  handleToogleSidebar: Function
}

export enum SidebarTabs {
  recomendations,
  updateValues
}

const Sidebar: FC<SidebarProps> = (props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<SidebarTabs>(0);
  return (
    <section className={"sidebar-menu " + (props.active ? 'visible' : 'hide')}>
      <button onClick={() => props.handleToogleSidebar(false)}>X</button>
      <ul className="tabs-container">
        <li className={activeTab === SidebarTabs.recomendations ? "active" : ''} onClick={() => setActiveTab(0)}>Recomendações</li>
        <li className={activeTab === SidebarTabs.updateValues ? "active" : ''} onClick={() => setActiveTab(1)}>Alterar Valores</li>
      </ul>
      <div>
      {
        activeTab === SidebarTabs.recomendations
          ? ( <div>Recomendações</div> )
          : ( <div>Alterar valores</div> )
      }
      </div>
    </section>
  );
};

export default Sidebar;

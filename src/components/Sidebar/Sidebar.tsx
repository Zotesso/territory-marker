import { FC } from 'react';
import './styles.css';

export interface SidebarProps {
  active: boolean;
  handleToogleSidebar: Function
}

const Sidebar: FC<SidebarProps> = (props): JSX.Element => {
  return (
    <section className={"sidebar-menu " + (props.active ? 'visible' : 'hide')}>
      <button onClick={() => props.handleToogleSidebar(false)}>X</button>
      <ul>
        <li>Recomendações</li>
        <li>Alterar Valores</li>
      </ul>
    </section>
  );
};

export default Sidebar;

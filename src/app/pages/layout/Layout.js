import {Outlet} from 'react-router-dom'
import styles from './Layout.module.css'
function Layout() {
  return (
  <>
  <header>
    <h1>
      Job<span>Hub</span>
    </h1>
  </header>
 <Outlet>

 </Outlet>
  </>
  );
}

export default Layout;

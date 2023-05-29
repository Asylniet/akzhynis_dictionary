import { Outlet } from 'react-router-dom';
import Header from "./Header";
import { Container } from 'react-bootstrap';
import { useGetTheme } from '../hooks/useGetTheme';

const Layout = () => {
    const { isDarkMode } = useGetTheme();
    return (
      <main className={isDarkMode ? "dark" : ""}>
        <div className="pageWrapper">
          {/********Sidebar**********/}
          {/* <aside className="sidebarArea shadow" id="sidebarArea">
            <Sidebar />
          </aside> */}
          {/********Content Area**********/}
  
          <div className="contentArea">
            {/********header**********/}
            {/* <Header /> */}
            {/********Middle Content**********/}
            <Container className="wrapper mt-5">
              <Outlet />
            </Container>
          </div>
        </div>
      </main>
    );
  };
  
  export default Layout;
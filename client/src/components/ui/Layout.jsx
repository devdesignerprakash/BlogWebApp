import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from './sidebar';
import AppSideBar from '../AppSideBar';
import TopBar from '../TopBar';

const Layout = () => {
  return (
    <div>
       <TopBar/>
        {/* sidebar */}
        <SidebarProvider>
        <AppSideBar/>
        <main>
            <SidebarTrigger/>
            <Outlet/>   
        </main>
        </SidebarProvider>
    </div>
  )
}

export default Layout
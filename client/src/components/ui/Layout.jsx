import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from './sidebar';
import AppSideBar from '../AppSideBar';
import TopBar from '../TopBar';

const Layout = () => {
  return (
    <div>
       
        {/* sidebar */}
        <SidebarProvider>
        <TopBar/>
        <AppSideBar/>
        <main className='mt-16 p-2'>
            <Outlet/>   
        </main>
        </SidebarProvider>
    </div>
  )
}

export default Layout
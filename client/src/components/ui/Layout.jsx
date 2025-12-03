import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from './sidebar';
import AppSideBar from '../AppSideBar';
import TopBar from '../TopBar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className='h-screen'>
        <SidebarProvider>
        <TopBar/>
        <AppSideBar/>
        <main className='w-full mt-12 p-2'>
          <div className='p-4 min-h-[calc(100vh-160px)]'>
            <Outlet/>  
            </div>
             <Footer/> 
        </main>
        </SidebarProvider>
    </div>
  )
}

export default Layout
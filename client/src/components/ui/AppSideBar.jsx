import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from "./sidebar"
import logo from '@/assets/firante-logo.png'
import { Circle } from "lucide-react"
import { Home } from "lucide-react"
import { Link } from 'react-router-dom'


const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src={logo} alt="logo" width='200px' />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home />
                  <Link to='/'>
                    Home
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  Category
                  <Link to='/'>
                    Home
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Home />
                  <Link to='/hello'>
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Categories Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Circle />Techs & Updates
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSideBar
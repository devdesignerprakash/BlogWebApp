import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Circle } from "lucide-react"
import { Home } from "lucide-react"
import { Link } from 'react-router-dom'
import { AiOutlineComment } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import logo from '@/assets/logo.png'


const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
         <img src={logo} alt='logo'className="h-12"/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home />
                  <Link to='/'>
                    गृहपृष्ठ
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <TbLogs />
                  <Link to='/'>
                    रचनाहरू
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <AiOutlineComment />
                  <Link to='/hello'>
                    प्रतिकृयाहरू
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Categories Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>
       कोटिहरू
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Circle />कथा
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
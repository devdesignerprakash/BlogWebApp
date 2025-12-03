import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from "./sidebar"
import { Circle } from "lucide-react"
import { Home } from "lucide-react"
import { Link } from 'react-router-dom'
import { AiOutlineComment } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";


const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className='text-xl font-extrabold'><span className="text-blue-800">सााहित्यिक</span> <span className="text-red-600">सँघार</span></h1>
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
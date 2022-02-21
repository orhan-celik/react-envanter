import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { AiOutlineUser } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class Header extends Component {

    render() {
        return (
            <ProSidebar className="drop-shadow-2xl">
                <SidebarHeader className="flex justify-center py-5">
                    <Link to="/"><img src="logo.png" /></Link>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<AiOutlineUser />}>Personeller</MenuItem>
                        <SubMenu title="Cihaz İşlemleri" icon={<RiComputerLine />}>
                            <MenuItem>Cihazlar</MenuItem>
                            <MenuItem><Link to="/category" className="dropdown-item">Kategoriler</Link></MenuItem>
                            <MenuItem><Link to="/brand" className="dropdown-item">Markalar</Link></MenuItem>
                            <MenuItem><Link to="/model" className="dropdown-item">Modeller</Link></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter className="flex items-center justify-center text-center text-xs text-slate-100 py-2">
                    <AiOutlineCopyrightCircle className='mr-2' /> Copyrigt 2022
                </SidebarFooter>
            </ProSidebar>
        );
    }
}
export default Header;
import React, { useState } from "react";
import { logout } from "@/utils";
import history from "@/utils/history";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
import "./Layouts.css";

export default () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const handleLogout = () => {
        logout();
        history.replace("/login");
    }
    return (
        <Layout>
            <Sider 
                trigger={null} 
                collapsible 
                collapsed={collapsed}
                width={collapsed ? 65 : 266}
                >
                <div className="logo" >111</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <span onClick={handleLogout}>登出</span>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: "calc(100vh - 64px - 48px)",
                        overflowY: "auto"
                    }}
                >
                    
                </Content>
            </Layout>
        </Layout>
    );
}
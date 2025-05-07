import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import Header from "./Header";
import { Layout, Menu, theme } from 'antd';
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 15 }).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  const menus = [
    {
        label: "首页",
        key: "/"
    },
    {
        label: "课程安排",
        key: "/program"
    },
    {
        label: "授课教师",
        key: "/speaker"
    },
    {
        label: "课程注册",
        key: "/registration"
    },
    {
        label: "交通和酒店",
        key: "/information"
    },
]; 
export default function MainLayout() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(location.pathname || '/');
    const {
    token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location]);

    return (
        <Layout justify="center" items="center">
            <Header style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                <div className="flex flex-row gap-5 min-w-[300px] flex-none md:mr-24">
                    <div className="md:flex flex-row">
                        <div className="w-[150px] flex-shrink-0 flex flex-col justify-center">
                            <img className="" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
                        </div>
                        <div className="md:text-[20px] text-[15px] text-white flex flex-col justify-end md:items-end min-w-[178px] line-clamp-1 ">AI工业软件暑期学校</div>
                    </div>
                </div>
                
                <Menu
                    className="flex justify-start"
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['home']}
                    selectedKeys={[activeMenu]}
                    items={menus}
                    style={{ flex: 1, minWidth: 0 }}
                    onClick={(e) => {
                        // const link = e.key === 'home'?  '/' : e.key
                        navigate(e.key)
                    }}
                />
            </Header>
            <Content className="py-[50px] w-full flex justify-center min-h-[calc(100vh-133px)]">
                <div
                className=" w-full md:w-[1000px] md:min-w-[1000px] md:p-10 p-2"
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    borderRadius: borderRadiusLG,
                }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                AMCAX ©{new Date().getFullYear()} USTC --- NEXT AIIS
            </Footer>
            </Layout>
    );
}
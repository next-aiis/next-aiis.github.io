import { Menu } from "antd"
import { useNavigate } from "react-router-dom";

const items = [
    {
        label: "首页",
        key: "home"
    },
    {
        label: "课程安排",
        key: "program"
    },
    {
        label: "授课教师",
        key: "speaker"
    },
    {
        label: "课程注册",
        key: "registration"
    },
    {
        label: "交通和酒店",
        key: "information"
    },
];  

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-white flex justify-center">
            <Menu
                mode="horizontal"
                className="w-full"
                items={items}
                onClick={(e) => {
                    const link = e.key === 'home'?  '/' : e.key
                    navigate(link)
                }}
            />
        </header>
    )
}
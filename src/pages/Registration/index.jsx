import { useState } from "react";
import { serverApi } from "../../server";

export default function Registration() {
    const [data, setData] = useState({});
    useState(() => {
        serverApi.getRegistration().then(res => {
            const { data, meta } = res;
            setData(data);
        });
    }, []);
    return (
        <div>
            <div className="text-3xl text-center font-bold">课程注册</div>
            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
            <div><div dangerouslySetInnerHTML={{ __html: data.content }}></div></div>
        </div>
    )
}
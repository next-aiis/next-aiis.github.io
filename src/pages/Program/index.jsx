import { useEffect, useState } from "react";
import { serverApi } from "../../server";

export default function Program() {
    const [data, setData] = useState({});
     useEffect(() => {
            loadData();
        }, []);
    
        const loadData = () => {
            serverApi.getProgram().then(res => {
                const { data, meta } = res;
                setData(data);
            });
        }
    return (
        <div>
            <div className="text-3xl text-center font-bold">课程安排</div>
            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
            <div><div dangerouslySetInnerHTML={{ __html: data.content }}></div></div>
        </div>
    )
}
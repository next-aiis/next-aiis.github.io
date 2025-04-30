import { useEffect, useState } from "react";
import { serverApi } from "../../server";

export default function Information() {
    const [traffic, setTraffic] = useState({});
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        loadData();
    }, []);
    const loadData = () => {
        serverApi.getTraffic().then(res => {
            const { data, meta } = res;
            setTraffic(data);
        });
        serverApi.getHotel().then(res => {
            const { data, meta } = res;
            setHotel(data);
        });
    }

    return (
        <div>
            <div className="text-3xl text-center font-bold">交通和酒店</div>
            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
            <div>
                <div>
                    <div className="text-2xl font-bold text-[#ee7b17] w-full text-center py-5">交通情况</div>
                    <div dangerouslySetInnerHTML={{ __html: traffic.content }}></div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-[#ee7b17] w-full text-center py-5">周边酒店</div>
                    <div dangerouslySetInnerHTML={{ __html: hotel.content }}></div>
                </div>
            </div>
        </div>
    )
}
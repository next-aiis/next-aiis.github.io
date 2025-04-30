import { useEffect, useState } from "react";
import { getImageUrl, serverApi } from "../../server";

export default function Speaker() {
    const [data, setData] = useState([]);
    useEffect(() => {
        loadData();
    }, []);
    async function loadData() {
        serverApi.listSpeaker().then(res => {
            const { data, meta } = res;
            console.log(data);
            setData(data);
        });
    }
    return (
        <div>
            <div className="text-3xl text-center font-bold">授课教师</div>
            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
            <div className="grid grid-cols-4 place-items-center w-full">
                {
                    data.map((item, index) => (
                        <div className="relative w-[120px] flex flex-col items-center gap-1 group" onClick={() => {
                            window.location.href = `#${item.documentId}`;
                        }}>
                            <img src={getImageUrl(item.avatar.url)} alt="avatar" className="rounded-full w-[120px] h-[120px] border group-hover:border-[#ee7b17]" />
                            {/* <div class="relative md:w-[180px] md:h-[180px] w-[120px] h-[120px] top-0 left-0 bg-[#f5f0ec] rounded-[110px] border border-dashed border-[#ee7b17]">
                                <div class="absolute md:w-[160px] w-[70px] md:h-[160px] h-[7 md:top-[9px] top-[4px] md:left-[9px] left-[4px] bg-[#f5f0ec] rounded-[100px] md:border-[5px] border-[2.7px] border-solid border-[#ee7b17]"></div>
                                    <img class="absolute md:w-[160px] md:h-[160px] w-[7 h-[7 md:top-[9px] top-[4px] md:left-[9px] left-[4px] rounded-[100px]" alt="Mask group" src={getImageUrl(item.avatar.url)} />
                                </div> */}
                            <div className="text-xl font-bold group-hover:text-[#ee7b17]">{item.name}</div>
                            <div className="group-hover:text-[#ee7b17] group-hover:underline underline-offset-4">{item.company}</div>
                        </div>
                    ))
                }
            </div>
            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
            <div className="flex flex-col justify-start w-full">
                {
                    data.map((item) => (
                        <>
                            <div id={item.documentId} key={item.documentId}> 
                                <a name={item.documentId} href="#">&nbsp;</a>
                                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            </div>
                            <div className="border-b-[7px] border-b-[rgb(218, 238, 243)] my-5"></div>
                        </>
                    ))

                }
            </div>
        </div>
    )

}
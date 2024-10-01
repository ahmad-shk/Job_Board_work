import { demoNotifcation } from "../../demoData"

const Notification = () => {
    let count=demoNotifcation.length
    return (
        <div className="card bg-white rounded-[8px]">
            <div className="card-body py-[12px] px-0">
                <div className="pl-[18px] pr-[40px]">
                    <div className="flex items-center justify-between">
                        <h5 className="font-bold text-[16px] text-[#1E1E1E]">Notification</h5>
                        {/* <Link className="font-bold text-[16px] text-[#1E1E1E] hover:text-primary" to={'#'}>Mark as Read</Link> */}
                    </div>
                    <div className="my-[15px]">
                        <label className="bg-[#EAECF0] text-[13px] font-normal text-[#1E1E1E] rounded-[20px] py-[2px] px-[11px]">{`${count} Unread`}</label>
                    </div>
                </div>
                
                <div className=" pl-[18px] pr-[40px]">
                    {demoNotifcation.map((item)=>{
                         return(<div className=" notification-card flex items-center gap-[15px] rounded-[15px] p-[10px] border border-[#d8d8d8] mb-8">
                         <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE] bg-cover bg-no-repeat bg-center"style={{backgroundImage: "url(/assets/images/connection-profile.svg)"}} ></div>
                         <div className="min-w-[150px] max-w-[150px]">
                             <h5 className="font-bold text-[16px] mb-[2px]">{item.name}</h5>
                             <p className="text-[10px] text-[#2E2D46] m-0">{item.time}</p>
                         </div>
                         <p className="text-[16px] m-0 text-[#1E1E1E]">{item.detail}</p>
                         <div>
                             <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                         </div>
                     </div>)
                    })}
                    {/* ------------- */}
                    {/* <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div> */}
                    {/* --------- */}
                    {/* <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] mb-8">
                        <div className="min-w-[45px] [w-[45px] h-[45px] rounded-full bg-[#E5EBFE]"></div>
                        <div className="min-w-[220px] max-w-[220px]">
                            <h5 className="font-bold text-[16px] mb-[2px]">Asad Minhas Ahmed</h5>
                            <p className="text-[10px] text-[#2E2D46] m-0">1 Hour Ago</p>
                        </div>
                        <p className="text-[16px] m-0 text-[#1E1E1E]">Use simple and straightforward language that is easy for your audience to understand. Avoid jargon, abbreviations, or slang that could potentially confuse your reader. </p>
                        <div>
                            <span className="w-2 h-2 flex rounded-full bg-primary"></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Notification
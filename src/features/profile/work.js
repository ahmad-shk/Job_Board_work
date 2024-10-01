import React, { useEffect, useState } from "react";
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import EducationAndTraining from "../../components/EducationAndTraining";
import Work1 from "../../components/Work";
import { useSelector, useDispatch } from 'react-redux'


const dumyObj = {
    "occupation": "",
    "employeer": "",
    "city": "",
    "country": "",
    "fromMonth": "",
    "fromDay": "",
    "fromYear": "",
    "toMonth": "",
    "toDay": "",
    "toYear": "",
    "ongoing":  false,
    "roleDescription":""
}
const Work = () => {
    const [collapse1, setCollapse1] = useState(true);
    const [tabData, setTabData] = useState([]);
    const { profilePagesData } = useSelector(state => state.profile)
    const { work } = profilePagesData

    useEffect(() => {
        if(work?.length === 0) setTabData([dumyObj])
        else setTabData(work)
    }, [work])

    const toggleCollapse = (collapseNumber) => {
        switch (collapseNumber) {
            case 1:
                setCollapse1(!collapse1);
                break;
            default:
                break;
        }
    };



    return (
        <div>
            <h4 onClick={() => toggleCollapse(1)} className="flex items-center justify-between cursor-pointer py-[7px] px-[20px] rounded-[5px] bg-[#D8D7D7] -hover-effect border border-[#D8D7D7] border-[2px] duration-[0.3s] font-semibold text-[16px] mb-3">
                Work
                <ChevronDownIcon className={` transition-all duration-300 ${collapse1 ? 'rotate-180' : ''} w-[23px]`} />
            </h4>

            <div className={`transition-all duration-300 ${collapse1 ? 'show' : 'hidden'}`}>
            </div>

            {
                tabData && tabData?.length > 0 && tabData?.map((item, index) => (
                    <div key={index}>
                        <Work1 collapse1={collapse1} workIndex={index} workIndexItem={item} tabData={work} />
                    </div>
                ))
            }
            {work?.length === tabData?.length && <div className="mt-2" onClick={() => setTabData([...tabData, dumyObj])}>
                <div className="inline-flex gap-1 cursor-pointer hover:text-[#FFCB05]">
                    <PlusCircleIcon className="w-[20px]" />
                    <span> Add</span>
                </div>
            </div>}
        </div>
    )
}

export default Work;

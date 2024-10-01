import React, { useEffect, useState } from "react";
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import EducationAndTraining from "../../components/EducationAndTraining";
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon';
// year-month-day
import { useSelector } from 'react-redux'
import { notifySuccess } from "../../app/toaster";
const dumyObj = {
    "academicCenter": "",
    "nameOfCenter": "",
    "degree": "",
    "fieldOfStudy": "",
    "gpa": "",
    "fromMonth": "",
    "fromDay": "",
    "fromYear": "",
    "toMonth": "",
    "toDay": "",
    "toYear": "",
    "ongoing": false
}

const Education = () => {
    const [collapse1, setCollapse1] = useState(true);
    const [tabData, setTabData] = useState([]);
    const toggleCollapse = () => { setCollapse1(prevState => !prevState); };
    const { profilePagesData } = useSelector(state => state.profile)
    const { educationTraining } = profilePagesData

    useEffect(() => {
        if(educationTraining?.length === 0) setTabData([dumyObj])
        else setTabData(educationTraining)
        // setTabData(educationTraining?.length > 0 ? educationTraining : [dumyObj])
    }, [educationTraining])

    return (
        <div>
            <div className="section-1 mb-10">
                <h4 onClick={toggleCollapse} className="flex items-center justify-between cursor-pointer py-[7px] px-[20px] rounded-[5px] bg-[#D8D7D7] -hover-effect border border-[#D8D7D7] border-[2px] duration-[0.3s] font-semibold text-[16px] mb-3">
                    Education and training
                    <ChevronDownIcon className={` transition-all duration-300 ${collapse1 ? 'rotate-180' : ''} w-[23px]`} />
                </h4>
            </div>
            {
                tabData && tabData?.length > 0 && tabData?.map((item, index) => (
                    <div key={index}>
                        <EducationAndTraining collapse1={collapse1} educationAndTrainingIndex={index} educationAndTrainingIndexItem={item} tabData={educationTraining} />
                    </div>
                ))
            }
            {educationTraining?.length === tabData?.length && <div className="mt-2" onClick={() => setTabData([...tabData, dumyObj])}>
                <div className="inline-flex gap-1 cursor-pointer hover:text-[#FFCB05]">
                    <PlusCircleIcon className="w-[20px]" />
                    <span> Add</span>
                </div>
            </div>}
        </div>
    );
}

export default Education;

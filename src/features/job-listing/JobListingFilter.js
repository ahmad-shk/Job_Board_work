import { customStylesSelect } from "../../components/ReactSelectStyle";
import Select from "react-select";
import SearchJobInput from "./Search";
import SearchJobLocation from "./Location";

const JobListingFilter = () => {
    return (
        <div className="mb-[25px] ">

            {/* <div className="flex justify-center mb-[20px]">
                <div className="bg-white flex items-center justify-center p-[10px] rounded-[10px] border border-[#919191] flex-wrap">
                    <SearchJobInput />
                    <div className="h-full w-[1px] bg-[#B5B5B5] mx-2"></div>
                    <SearchJobLocation />
                    <button className="bg-[#FFCB05] py-[8px] px-[34px] rounded-[8px] text-[#1F1E2C]">Search</button>
                </div>
            </div> */}

            <div className="flex gap-[10px] flex-wrap justify-end">
                <div>
                    <h3>Order by</h3>
                <Select
                    styles={customStylesSelect}
                    className="react-select float-right"
                    classNamePrefix="select"
                    options={[
                        { value: '1/12/12', label: 'January 12, 2012' },
                        { value: '2,2,12', label: 'February 2, 2012' }
                    ]}
                    isSearchable
                    placeholder="Jobs"
                />
                </div>
                <div>
                    <h3>Class</h3>
                
                <Select
                    styles={customStylesSelect}
                    className="react-select float-right"
                    classNamePrefix="select"
                    options={[
                        { value: '1/12/12', label: 'January 12, 2012' },
                        { value: '2,2,12', label: 'February 2, 2012' }
                    ]}
                    isSearchable
                    placeholder="Design"
                />
                </div>
            </div>
        </div>
    )
}

export default JobListingFilter
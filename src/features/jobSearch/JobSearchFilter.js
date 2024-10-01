import { useEffect, useState } from "react";
import { filterObject } from "../../app/selectData";
import { customStylesSelect } from "../../components/ReactSelectStyle";
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux'
import SearchJobLocation from "./Location";
import SearchJobInput from "./Search";
import { getJobListData } from "./jobSearchSlice";

const JobSearchFilter = () => {
    const dispatch = useDispatch()
    const [filterJob, setFilterJob] = useState({})
    
    const [searchObj, setSearchObj] = useState({name: '', location: ''})

    const { jobListPageData } = useSelector(state => state.jobSearch)
    const { filters } = jobListPageData

    const selectionHandler = (value, key, idName) => {
        let _queryObj = { ...filterJob, ...searchObj, [idName]: value }
        setFilterJob(_queryObj)
        dispatch(getJobListData(_queryObj))
    }

    const clickHandel = (key) => {
        let _queryObj = { ...filterJob, ...searchObj, }
        delete _queryObj[key]
        setFilterJob(_queryObj)
        dispatch(getJobListData(_queryObj))
    }

    const handleSearch = () => {
        console.log('searchObj', removeBlankAttributes(searchObj))
        let _queryObj = { ...filterJob, ...removeBlankAttributes(searchObj) }
        dispatch(getJobListData(_queryObj))
    }
    
    function removeBlankAttributes(obj) {
        return Object.entries(obj).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
    }

    return (
        <div className="job-search-wrapper mb-[25px] px-10 ">
            <div className="flex justify-center mb-[20px] ">
                <div className="mt-[10px] bg-[] flex flex-wrap content-center items-center justify-center p-[10px] rounded-[10px] border-2 border-[#D8D8D8] flex-wrap">
                    
                    <SearchJobInput setSearchObj={setSearchObj} searchObj={searchObj}/>
                    <span className="h-[60%] w-[2px] bg-[#D8D8D8]"></span>
                    <SearchJobLocation setSearchObj={setSearchObj} searchObj={searchObj}/>

                    <button className="bg-[#FFCB05] py-[8px] px-[34px] rounded-[8px] text-[#1F1E2C] m-[5px]" onClick={()=>{handleSearch()}}>Search</button>
                </div>
            </div>
            <div className="jobsearch-center flex gap-[10px] flex-wrap" >
                {
                    filters && filters?.length > 0 && filters?.map((optionGroup, index) => {
                        let keyy = optionGroup.displayName;
                        let idName = optionGroup.id;
                        return (
                            <div key={index}>
                                {!optionGroup?.value ? (
                                    <div>
                                        <button className="btn bg-[#555555] hover:bg-[#333333] text-[#fff] border-0 flex items-center gap-[10px]"
                                            onClick={() => clickHandel(optionGroup.id)}
                                        >
                                            {optionGroup.displayName}
                                            <svg
                                                width={"20px"}
                                                xmlns="http://www.w3.org/2000/svg" focusFable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="css-1nhvvuv eac13zx0"><path d="M5.934 4.873a.5.5 0 00-.707 0l-.354.354a.5.5 0 000 .707L8.94 10l-4.066 4.066a.5.5 0 000 .707l.354.354a.5.5 0 00.707 0L10 11.06l4.066 4.066a.5.5 0 00.707 0l.353-.354a.5.5 0 000-.707L11.06 10l4.066-4.066a.5.5 0 000-.707l-.353-.354a.5.5 0 00-.708 0L10 8.94 5.934 4.873z"></path><svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="css-1nhvvuv eac13zx0"><path d="M5.934 4.873a.5.5 0 00-.707 0l-.354.354a.5.5 0 000 .707L8.94 10l-4.066 4.066a.5.5 0 000 .707l.354.354a.5.5 0 00.707 0L10 11.06l4.066 4.066a.5.5 0 00.707 0l.353-.354a.5.5 0 000-.707L11.06 10l4.066-4.066a.5.5 0 000-.707l-.353-.354a.5.5 0 00-.708 0L10 8.94 5.934 4.873z"></path></svg></svg>
                                        </button>
                                    </div>
                                ) : 
                                (
                                    <Select
                                        styles={customStylesSelect}
                                        className="react-select"
                                        classNamePrefix="select"
                                        options={optionGroup?.value}
                                        isSearchable={true}
                                        placeholder={keyy}
                                        onChange={(e) => selectionHandler(e?.label, keyy, idName)}
                                    />
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default JobSearchFilter
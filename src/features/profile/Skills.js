import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import { postProfileData } from "../../features/profile/profileSlice";
import { useSelector , useDispatch} from 'react-redux'
import { notifySuccess } from "../../app/toaster";

const Skills = () => {

    const dispatch = useDispatch()
    const [collapse1, setCollapse1] = useState(true);
    const [loading, setLoading] = useState(false)
    const [tabData, setTabData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const { profilePagesData } = useSelector(state => state.profile)
    const { skills } = profilePagesData

    useEffect(() => {
        if (skills?.length === 0) setTabData([])
        else setTabData(skills)
    }, [skills])

    const toggleCollapse = (collapseNumber) => {
        switch (collapseNumber) {
            case 1:
                setCollapse1(!collapse1);
                break;
            default:
                break;
        }
    };

    const initialValues = { digitalSkill: "" };
    const validationSchema = Yup.object({ digitalSkill: Yup.string().required("Please enter a skill") });

    const handleSubmit = async (values, { resetForm }) => {
        //   let payload=tabData
        if (tabData.includes(values.digitalSkill)) {
            setErrorMessage("Skill already exists");
        } else {
            setTabData([...tabData, values.digitalSkill]);
            resetForm();
            setErrorMessage("");
        }
    };

    const handleCancel = (index) => {
        const updatedSkills = [...tabData];
        updatedSkills.splice(index, 1);
        setTabData(updatedSkills);
    };

    const handleSave = async () => {
        if (tabData.length === 0) {
            setErrorMessage("Please add at least one digital skill");
        } else {
            setLoading(true)
            try {
                dispatch(postProfileData({ skills: tabData })).unwrap().then(() => {
                    setLoading(false)
                    notifySuccess('Skill Update Successfully')
                })
            } catch (e) {
                console.log('error profile', e)
                setLoading(false)
            }

        }
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="section-1 mb-10">
                        <h4 onClick={() => toggleCollapse(1)} className="flex items-center justify-between cursor-pointer py-[7px] px-[20px] rounded-[5px] bg-[#D8D7D7] -hover-effect border border-[#D8D7D7] border-[2px] duration-[0.3s] font-semibold text-[16px] mb-3">
                            Digital skills
                            <ChevronDownIcon className={` transition-all duration-300 ${collapse1 ? 'rotate-180' : ''} w-[23px]`} />
                        </h4>
                        <div className={`transition-all duration-300 ${collapse1 ? 'show' : 'hidden'}`}>
                            <p>List your digital skills here and group them.</p>
                            <div className="w-full h-[1px] bg-[#D4D4D4] my-5"></div>
                            <div className="grid lg:grid-cols-2 lg:gap-20 gap-5">
                                <div className="">
                                    <label className="mb-2 block">Digital Skills</label>
                                    <div className="flex lg:w-8/12">
                                        {/* <span className="bg-[#FFCB05] w-[50px] h-[44.5px] p-2 flex items-center justify-center">
                                            <MagnifyingGlassIcon className="" />
                                        </span> */}
                                        <Field type="text" name="digitalSkill" placeholder="Please Type Skills" className="w-full text-[15px] text-[#000] px-[20px] py-[10px] outline-none border border-[#FFCB05]  placeholder:text-[#2E2D46] focus:bg-[#F3F8FC]" />
                                        <button type="submit" className="bg-[#1E1E1E] h-[44.5px] px-3 text-white flex items-center">Add</button>
                                    </div>
                                    <ErrorMessage name="digitalSkill" component="div" className="text-red-500 mt-2 ml-2" />
                                    {errorMessage && <div className="text-red-500 mt-2 ml-2">{errorMessage}</div>}
                                </div>
                                <div className="">
                                    <label className="mb-2 block">Added Digital Skills</label>
                                    <div className="flex flex-wrap gap-3">
                                        {tabData?.map((skill, index) => (
                                            <div key={index} className="flex items-center">
                                                <p className="relative py-[8px] px-[15px] border-l-[5px] bg-[#1E1E1E] text-white border-[#FFCB05]">{skill}
                                                </p>
                                                    <button type="button" onClick={() => handleCancel(index)} className=" relative right-[0px] top-0 bottom-0 px-2 font-semibold py-[8px] px-[15px] bg-[#FFCB05] border-l-[5px] -border-[#FFCB05] text-[black]">X</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-[#D4D4D4] my-5"></div>
                            {/* <div className="flex items-center gap-2">
                                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="#1E1E1E" /><circle cx="1" cy="5" r="1" fill="#1E1E1E" /><circle cx="1" cy="9" r="1" fill="#1E1E1E" /><rect x="4" width="11" height="2" fill="#1E1E1E" /><rect x="4" y="4" width="11" height="2" fill="#1E1E1E" /><rect x="4" y="8" width="11" height="2" fill="#1E1E1E" /></svg>
                                <p>Group your skills</p>
                            </div> */}
                            {/* <p>Customize your skills and group them in categories.</p> */}
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="button" onClick={handleSave} className="font-medium bg-[#FFCB05] px-[40px] text-[16px] rounded-[0px] py-[12px] border-0">{ loading ? <span className="loading"></span> :  skills?.length == 0 ? 'Save': 'Update'}</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Skills;

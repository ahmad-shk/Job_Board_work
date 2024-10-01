import { useEffect, useState } from "react";
import { customStylesSelect } from "../../components/ReactSelectStyle";
import Select from "react-select";
import { Country } from "country-state-city";
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import { DateFormatType, addresslist, citizenShipStatus, contactlist, countryCode, dateOfDDList, dateOfMMList, dateOfYYList, genderLis, genderList, languagesList } from "../../app/selectData";
import { getCountryList } from "../../app/commonFunction";
import { getCall } from "../../app/axiosConfig";
import { useSelector, useDispatch } from 'react-redux'
import PersonalInformationForm from "../../components/PersonalInformation";

const PersonalInformation = () => {


    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(true);
    const [collapse3, setCollapse3] = useState(true);
    const [collapse4, setCollapse4] = useState(true);
    const [collapse5, setCollapse5] = useState(true);
    const [collapse6, setCollapse6] = useState(true);
    const [collapse7, setCollapse7] = useState(true);
    const [countryData, setCountryData] = useState([])
    const [tabData, setTabData] = useState()
    const { profilePagesData } = useSelector(state => state.profile)
    const { personalInformation } = profilePagesData


    useEffect(() => {
        getCountryList()
            .then((data) => {
                setCountryData(data)
            })
            .catch((error) => {
                console.error("Error fetching country list:", error);
            });

    }, [])

    const toggleCollapse = (collapseNumber) => {
        switch (collapseNumber) {
            case 1:
                setCollapse1(!collapse1);
                break;
            case 2:
                setCollapse2(!collapse2);
                break;
            case 3:
                setCollapse3(!collapse3);
                break;
            case 4:
                setCollapse4(!collapse4);
                break;
            case 5:
                setCollapse5(!collapse5);
                break;
            case 6:
                setCollapse6(!collapse6);
                break;
            case 7:
                setCollapse7(!collapse7);
                break;
            default:
                break;
        }
    };



    return (
        <div>
            {personalInformation && Object.keys(personalInformation).length>0 && <PersonalInformationForm tabData={personalInformation} />}
        </div >
    )
}

export default PersonalInformation
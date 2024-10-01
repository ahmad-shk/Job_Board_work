import { useState, useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { postCall } from '../../app/axiosConfig'
import { notifySuccess } from '../../app/toaster'

function Register() {
    const navigate = useNavigate()
    const INITIAL_REGISTER_OBJ = {
        username: "",
        password: "",
        email: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = async (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (registerObj.username?.trim() === "") return setErrorMessage("Name is required! (use any value)")
        if (registerObj.email.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        if (registerObj.password.trim() === "") return setErrorMessage("Password is required! (use any value)")
        else {
            try {

                setLoading(true)
                // Call API to check user credentials and save token in localstorage
                const responce = await postCall('/auth/sign-up', registerObj)
                const { data, status } = responce
                if (status === 200) {
                    setLoading(false)
                    notifySuccess('User registered successfully')
                    navigate('/login')
                }
            } catch (e) {
                setLoading(false)

            }
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setRegisterObj({ ...registerObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-[#F3F8FC] flex items-center">
            <div className="card mx-auto w-full max-w-[1120px]">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className='bg-[#F2F2F2]'>
                        <LandingIntro
                            heading={'New Here?'}
                            subHeading={'Register and discover a great amount of new opportunities!'}
                        />
                    </div>
                    <div className='py-[69px] px-[54px] bg-[#fff]'>
                        <h2 className='text-[30px] font-medium mb-[50px] text-center'>Register</h2>
                        <form onSubmit={(e) => submitForm(e)}>

                            <div className="mb-4">

                                <InputText defaultValue={registerObj.username} updateType="username" containerStyle="mt-4" labelTitle="User Name" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />

                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn w-full btn-primary text-[20px] h-auto py-[18px] font-normal rounded-[5px] min-h-auto text-black"}>{loading ? <span className="loading"></span> :  'Register'}</button>

                            <div className='text-center mt-[20px] text-[20px]'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
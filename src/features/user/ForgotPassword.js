import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'

function ForgotPassword() {

    const INITIAL_USER_OBJ = {
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        else {
            setLoading(true)
            // Call API to send password reset link
            setLoading(false)
            setLinkSent(true)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-[#F3F8FC] flex items-center">
            <div className="card mx-auto w-full max-w-[1120px]">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className='bg-[#F2F2F2]'>
                        <LandingIntro
                            heading={'Forgot Password'}
                            subHeading={'We will send password reset link on your email Id'}
                        />
                    </div>
                    <div className='py-[69px] px-[54px] bg-[#fff]'>
                        <h2 className='text-[30px] font-medium mb-[50px] text-center'>Forgot Password</h2>

                        {
                            linkSent &&
                            <>
                                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                                <p className='my-4 text-xl font-bold text-center'>Link Sent</p>
                                <p className='mt-4 mb-8 font-semibold text-center'>Check your email to reset password</p>
                                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

                            </>
                        }

                        {
                            !linkSent &&
                            <>
                                {/* <p className='my-8 font-semibold text-center'>We will send password reset link on your email Id</p> */}
                                <form onSubmit={(e) => submitForm(e)}>

                                    <div className="mb-4">

                                        <InputText type="emailId" defaultValue={userObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />


                                    </div>

                                    <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                    <button type="submit" className={"btn w-full btn-primary text-[20px] h-auto py-[18px] font-normal rounded-[5px] min-h-auto text-black"}>{loading ? <span className="loading"></span> :  'Send Reset Link'}</button>

                                    <div className='text-center mt-[20px] text-[20px]'>Don't have an account yet? <Link to="/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</button></Link></div>
                                </form>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
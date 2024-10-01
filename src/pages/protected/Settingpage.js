import React, { useState } from 'react';
// import MyNetworkCards from '../../components/MyNetworkCards';
// import MyRequestsCards from '../../components/MyRequestCards';
import SettingComponent from '../../components/Settingcomponent';
import Changepasswordpopup from '../../components/Changepasswordpopup';

function Profileinformation() {
  
  const [popuppassworrd , setpopuppssword]=useState(false)
  const [isPopup , setIsPopup]=useState(false)
  const openPopup=()=>{
    setIsPopup(true);
  }
  const closePopup=()=>{
    setIsPopup(false);
  }

  return (
    <>
     {/* <div className='m-auto w-[90%] mt-3 '>
      <h1 className='text-3xl font-bold'>
         Setting
      </h1>
      <p>
        Manage yor account
      </p>
     </div> */}

    {/* Single box component */}
       <div className='w-[97%] border  border-[#D8D7D7] m-auto  p-5 rounded-[10px] bg-white'>     
      <h2 className='text-2xl font-bold border-b border-slate-200 p-5'>
         Sign in & security
      </h2>
       {/* component */}
      <div className='w-[100%] border-b border-[#D4D4D4] flex justify-between p-2'>
      <p className='font-semibold px-4'>
        Change password <br/>
       ***** 
        </p>
     {isPopup && <Changepasswordpopup onClose={closePopup}/>}

        <button onClick={openPopup} className='bg-[#FFCB05] h-[40px] w-[100px] mt-1 rounded font-semibold '>
          Change
        </button>
      </div>
    </div>


    {/* Single box component */}
    <div className='w-[97%] border  border-[#D8D7D7] m-auto my-2 p-5 rounded-[10px] bg-white'>     
      <h2 className='text-2xl font-bold border-b border-slate-200 p-5'>
         Visibility
      </h2>
       {/* component */}
      <SettingComponent text={"Profile viewing option"}/>
      <SettingComponent text={"Who can see or download your email address"}/>
      <SettingComponent text={"Connections"}/>
      <SettingComponent text={"Who can see members you follow?"}/>
      <SettingComponent text={"Who can see your last name"}/>
      <SettingComponent text={"profile discovery and visibility"}/>
      <SettingComponent text={"profile discovery using email address"}/>
      <SettingComponent text={"profile discovery using phone number"}/>
      <SettingComponent text={"Blocking"}/>
    </div>


      {/* Single box component */}
    <div className='w-[97%] border border-[#919191] m-auto my-2 p-5 rounded bg-white'>     
      <h2 className='text-2xl font-bold border-b border-slate-200 p-5'>
         Account Management
      </h2>
       {/* component */}
      <SettingComponent text={"Close account"}/>
    </div>
    
    </>
  );
}

export default Profileinformation;

// style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display:'grid', gridTemplateRows:'repeat(4, 1fr)'}}
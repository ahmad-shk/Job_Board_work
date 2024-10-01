import React from 'react';



function Profileinformation() {

 

  return (
    <>

      <div className='bg-white h-[600px] p-[20px] rounded-xl '>

        <div className=' h-[250px]  '>
          <div ><p className='font-bold '> Job Ad Notifications </p></div>
          <div className='flex justify-between mt-[10px]'>
            <div> <p className='font-bold '> TYPE </p></div>
            <div> <p className='font-bold'> DESCRIPTION </p></div>
            <div> <p className='font-bold'> ACTION </p></div>
          </div>
          <div class="border-t border-dotted border-[#CECECE]-300 border-t-[2.5px] mt-[10px] "></div>

          <div className='pt-[50px] '>
            <div>
              <span className='flex justify-center'>
                <img src="/assets/images/Group 1621.svg " alt="" className='mr-[10px]' />
              </span>
            </div>
            <div className='pt-[15px] flex justify-center'>No Record Found</div>
          </div>

        </div>
        
        <div className=' h-[250px]  '>
          <div ><p className='font-bold '> Other Notifications</p></div>
          <div className='flex justify-between mt-[10px]'>
            <div> <p className='font-bold '> TYPE </p></div>
            <div> <p className='font-bold'> DESCRIPTION </p></div>
            <div> <p className='font-bold'> ACTION </p></div>
          </div>
          <div class="border-t border-dotted border-[#CECECE]-300 border-t-[2.5px] mt-[10px] "></div>

          <div className='pt-[50px] '>
            <div>
              <span className='flex justify-center'>
                <img src="/assets/images/Group 1621.svg " alt="" className='mr-[10px]' />
              </span>
            </div>
            <div className='pt-[15px] flex justify-center'>No Record Found</div>
          </div>

        </div>


        <div>
          <button class="inline-flex py-2 px-4 rounded bg-[#FFCB05] hover:bg-[#F8B501] transition-colors duration-100 font-semibold">Save Changes</button>
        </div>


      </div>
    </>
  );
}

export default Profileinformation;
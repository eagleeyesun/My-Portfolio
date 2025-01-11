import React from 'react'

function Sidebar() {
    return (
        <div className='h-screen w-[31vh] flex flex-col shadow-lg'>
            <div className='flex flex-col gap-5 pt-7'>
                <h5 className='text-xs font-semibold ml-5'>Model Library</h5>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:pl-2 hover:mr-4 hover:bg-indigo-950 hover:text-white '>
                    <img src="/grid 02.svg" alt="" className='group-hover:text-white' />
                    <p className='text-sm'>Model Library</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-xs font-semibold pt-7 pl-5'>Extraction Builder</h5>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:mr-4 hover:pl-2 hover:bg-indigo-950 hover:text-white'>
                <img src="/grid 02.svg" alt="" className='group-hover:text-white' />  

                    <p className='text-sm'>Label Data</p>
                </div>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:mr-4 hover:pl-2 hover:bg-indigo-950 hover:text-white'>
                    <img src="/stacks.svg" alt="" className='group-hover:brightness-200' />
                    <p className='text-sm'>Model</p>
                </div>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:mr-4 hover:pl-2 hover:bg-indigo-950 hover:text-white'>
                    <img src="/Test.png" alt="" />
                    <p className='text-sm'>Test</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-xs font-semibold pt-7 pl-5'>Help</h5>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:mr-4 hover:pl-2 hover:bg-indigo-950 hover:text-white'>
                    <img src="/setting.png" alt="" />
                    <p className='text-sm '>Setting</p>
                </div>
                <div className='font-normal ml-6 h-10 flex items-center rounded-md gap-1 hover:mr-4 hover:pl-2 hover:bg-indigo-950 hover:text-white'>
                    <img src="/Support.png" alt="" />
                    <p className='text-sm'>Support</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
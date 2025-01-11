import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="bg-white flex w-screen h-22 ">
                <div className='w-[30vh] bg-slate-50 p-5'>
                    <img className='h-14' src="/Aventisia V1.png" alt="" />
                </div>
                <div className='flex items-center w-full justify-between pl-5 shadow-xl'>
                    <div className='flex-grow'>
                        <h1 className='text-lg '>AI/ML Model Builder</h1>
                    </div>
                    <div className='flex-grow'>
                        <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-10 bg-violet-50 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                                <path d="m19 19-3.5-3.5"></path>
                                <circle cx="11" cy="11" r="6"></circle>
                            </svg>
                            <span className="flex-auto text-xs font-light">Search...</span>
                            <kbd className="font-sans font-semibold dark:text-slate-500">
                                <abbr title="Command" className="no-underline text-slate-300 dark:text-slate-500">⌘</abbr> K
                            </kbd>
                        </button>
                    </div>
                    <div className='flex gap-6'>
                        <img className='rounded-full border-2 p-2 ' src="/bell.svg" alt="" />
                        <img className='rounded-full border-2 p-2' src="/heart.svg" alt="" />
                        <img src="/Line 1.png" alt="" />
                    </div>
                    <div className='flex items-center p-6'>
                        <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <div className='ml-2'>
                            <h2 className='text-sm'>Shubham Nalbhe</h2>
                            <p className='text-xs font-extralight text-slate-500'>shubhamnalbhe9@gmail.com</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
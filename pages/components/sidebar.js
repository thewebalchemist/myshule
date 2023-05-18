
import React from 'react';
import Header from './header';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserGraduate, FaCalendarAlt, FaUserCog, FaCogs, FaHouseUser} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const Sidebar = () => {

    return(

<main className="bg-gray-50 dark:bg-slate-900">
{/* <!-- ========== HEADER ========== --> */}
<Header />
{/* <!-- ========== END HEADER ========== -->

<!-- ========== MAIN CONTENT ========== -->
<!-- Sidebar Toggle --> */}
<div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center py-4">
    {/* <!-- Navigation Toggle --> */}
    <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button>
    {/* <!-- End Navigation Toggle -->

    <!-- Breadcrumb --> */}
    <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
        Application Layout
        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </li>
        <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
        Dashboard
        </li>
    </ol>
    {/* <!-- End Breadcrumb --> */}
    </div>
</div>
{/* <!-- End Sidebar Toggle -->

<!-- Sidebar --> */}
<div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <div className="px-6">
    <div className='flex justify-start items-center'>
            <a href="/">
            <Image  className="transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                alt="mshule logo"
                src = "/mshule.png"
                width={130} height= {100}
            />
            </a>
    </div>
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
        <li>
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="/">
        <FaHouseUser className="text-slate-700 text-md " />
            Dashboard
        </a>
        </li>

        <li className="hs-accordion" id="account-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
            <FaUserGraduate className="text-slate-700 text-md" />
            Students

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
        </a>

        <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
            <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/students/students">
                    All Students
                </a>
            </li>
            <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/students/add">
                Add Student
                </a>
            </li>
            </ul>
        </div>
        </li>

        <li className="hs-accordion" id="account-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
        <GiTeacher className="text-slate-700 text-md" />
            Teachers

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
        </a>

        <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
            <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/teachers/teachers">
                All Teachers
                </a>
            </li>
            <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/teachers/add">
                Add teacher
                </a>
            </li>
            </ul>
        </div>
        </li>


        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <FaCalendarAlt className="text-slate-700 text-md" />
            Calendar
        </a>
        </li>
        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
        <FaUserCog className="text-slate-700 text-md" />
        Account
        </a>
        </li>
        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-md font-medium tracking-wider text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <FaCogs className="text-slate-700 text-md" />
        Settings
        </a></li>
    </ul>
    </nav>
</div>
{/* {/* <!-- End Sidebar --> */}
</main>
    )
}

export default Sidebar;
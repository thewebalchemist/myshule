import React from "react";
import { FaUserGraduate, FaMoneyCheckAlt,  FaUsers} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";


const Stats = () => {
    return(
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
<div class="grid md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:border-gray-700">
{/* <!-- Card --> */}
<a class="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700" href="#">
    <div class="flex md:grid lg:flex gap-y-3 gap-x-5">
    <span>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-300/30">
            <FaUserGraduate className="text-gray-800 text-2xl" />
        </div>
    </span>

    <div class="grow">
        <p class="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
        Total Students
        </p>
        <h3 class="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
        2,540
        </h3>
        <div class="mt-1 flex justify-between items-center">
        <p class="text-sm text-gray-500">
            from <span class="font-semibold text-gray-800 dark:text-gray-200">1,104</span>
        </p>
        <span class="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
            <svg class="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            <span class="inline-block text-xs font-medium">
            12.5%
            </span>
        </span>
        </div>
    </div>
    </div>
</a>
{/* <!-- End Card --> */}

{/* <!-- Card --> */}
<a class="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700" href="#">
    <div class="flex md:grid lg:flex gap-y-3 gap-x-5">
    <span>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-300/30">
            <GiTeacher className="text-gray-800 text-2xl" />
        </div>
    </span>

    <div class="grow">
        <p class="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
        Total Teachers
        </p>
        <h3 class="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
        201
        </h3>
        <div class="mt-1 flex justify-between items-center">
        <p class="text-sm text-gray-500">
            from <span class="font-semibold text-gray-800 dark:text-gray-200">192</span>
        </p>
        <span class="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
            <svg class="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            <span class="inline-block text-xs font-medium">
            9.3%
            </span>
        </span>
        </div>
    </div>
    </div>
</a>
{/* <!-- End Card --> */}

{/* <!-- Card --> */}
<a class="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700" href="#">
    <div class="flex md:grid lg:flex gap-y-3 gap-x-5">
    <span>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-300/30">
            <FaUsers className="text-gray-800 text-2xl" />
        </div>
    </span>

    <div class="grow">
        <p class="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
        Total Staff
        </p>
        <h3 class="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
        518
        </h3>
        <div class="mt-1 flex justify-between items-center">
        <p class="text-sm text-gray-500">
            from <span class="font-semibold text-gray-800 dark:text-gray-200">612%</span>
        </p>
        <span class="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
            <svg class="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
            <span class="inline-block text-xs font-medium">
            1.7%
            </span>
        </span>
        </div>
    </div>
    </div>
</a>
{/* <!-- End Card --> */}

{/* <!-- Card --> */}
<a class="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700" href="#">
    <div class="flex md:grid lg:flex gap-y-3 gap-x-5">
    <span>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-300/30">
            <FaMoneyCheckAlt className="text-gray-800 text-2xl" />
        </div>
    </span>
    
<div className="grow">
    <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
    Total Revenue
    </p>
    <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
    92.9k
    </h3>
    <div className="mt-1 flex justify-between items-center">
    <p className="text-sm text-gray-500">
        from <span className="font-semibold text-gray-800 dark:text-gray-200">94.2k</span>
    </p>
    <span class="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
            <svg class="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
            <span class="inline-block text-xs font-medium">
            1.7%
            </span>
        </span>
    </div>
</div>
    </div>
</a>
{/* <!-- End Card --> */}
</div>
{/* <!-- End Grid --> */}
</div>
    )
}

export default Stats;
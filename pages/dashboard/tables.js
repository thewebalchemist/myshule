import { FaUserGraduate, FaPhone, FaCommentAlt, FaUserPlus} from "react-icons/fa";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Filler,
Legend
);

export const options = {
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
},
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
labels,
datasets: [
    {
    fill: true,
    label: 'Grades out of 100',
    data: labels.map(() => faker.datatype.number({ min: 20, max: 100 })),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
],
};
const Tables = () => {

    const [fname, setFName] = useState("");
const [lname, setLName] = useState("");
const [age, setAge] = useState("");
const [grade, setGrade] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState('');
const [address, setAddress] = useState("");
const [bio, setBio] = useState("");
const [showAlert, setShowAlert] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
const newStudent = { fname, lname, grade, phone, email, address, gender, age, bio };

fetch("/api/students", {
method: "POST",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(newStudent),
})
.then((response) => response.json())
.then((data) => {
    console.log("New student added:", data);
    // Clear form fields
    setFName("");
    setLName("");
    setAge("");
    setPhone("");
    setEmail("");
    setGrade("");
    setGender("");
    setAddress("");
    setBio("");
    // Show alert
    setShowAlert(true);
    // Refresh page after 3 seconds
    setTimeout(() => {
    window.location.reload();
    }, 1500);
    console.log(`New student added: { id: ${data.id}, name: "${data.name}", grade: "${data.grade}", age: ${data.age} }`);
});
};
const [students, setStudents] = useState([]);
const [selectedStudent, setSelectedStudent] = useState(null);

useEffect(() => {
fetchStudents();
}, []);

const handleEdit = (student) => {
setSelectedStudent(student);
};

const handleDelete = (student) => {
// Delete logic
};

const handleSave = (updatedStudent) => {
fetch("/api/students", {
method: "PUT",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(updatedStudent),
})
.then((response) => response.json())
.then((data) => {
    console.log(data.message);
    // Refresh students list
    fetchStudents();
    setSelectedStudent(null);
});
};

const fetchStudents = () => {
fetch("/api/students")
.then((response) => response.json())
.then((data) => setStudents(data));
};
const [circumference, setCircumference] = useState(0);
const TotalClasses = 305;
const AttendedClasses = 280;
const percentage = (AttendedClasses/TotalClasses)*100;
const Percent = Math.round(percentage);
useEffect(() => {
  setCircumference(50 * 2 * Math.PI);
}, []);



    return(
        <main>
            <div>
                {/* Alert message */}
                    {showAlert && (
                        <div className="fixed top-4 z-50 right-4 p-4 bg-blue-500 text-white rounded-md shadow-lg transition duration-500 ease-in-out">
                        New student added!
                        </div>
                    )}
                {/* Your form and other components */}
                {/* ... */}
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-14 mx-auto">
            {/* <!-- Card --> */}
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                    {/* <!-- Header --> */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                        
                        
                    <div class="inline-flex gap-x-2 sm:col-span-1">
                            <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                            Students
                            </a>
                            <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                            Teachers
                            </a>
                            <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                            Staff
                            </a>
                        </div>
                        
                        {/* <!-- Input --> */}
                        <div className="sm:col-span-1">
                            
                        <label htmlFor="hs-as-table-product-review-search" className="sr-only">Search</label>
                        <div className="relative">
                            <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="py-2 px-3 pl-11 block w-full bg-white border border-gray-200 placeholder-gray-500 shadow-sm rounded-md text-sm text-gray-400 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search"/>
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                        {/* <!-- End Input --> */}

                        <div className="sm:col-span-2 md:grow">
                            <div className="flex justify-end gap-x-2">
                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                <button id="hs-as-table-table-export-dropdown" type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Export
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-export-dropdown">
                                <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                    Options
                                </span>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>
                                    Copy
                                </a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                    </svg>
                                    Print
                                </a>
                                </div>
                                <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                    Download options
                                </span>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/>
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                    </svg>
                                    Excel
                                </a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"/>
                                    </svg>
                                    .CSV
                                </a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                                    </svg>
                                    .PDF
                                </a>
                                </div>
                                </div>
                            </div>

                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                                <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Filter
                                <span className="pl-2 text-xs font-semibold text-blue-600 border-l border-gray-200 dark:border-gray-700 dark:text-blue-500">
                                1
                                </span>
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <label htmlFor="hs-as-filters-dropdown-all" className="flex py-2.5 px-3">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-all" checked/>
                                    <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">All</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-paid" className="flex py-2.5 px-3">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-paid"/>
                                    <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Paid</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-pending" className="flex py-2.5 px-3">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-pending"/>
                                    <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Pending</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-declined" className="flex py-2.5 px-3">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-declined"/>
                                    <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Declined</span>
                                </label>
                                </div>
                                </div>
                            </div>
                            <div class="inline-flex gap-x-2">
                            <a  data-hs-overlay="#hs-modal-signup" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                                        <FaUserPlus className="text-white text-sm" />
                                        Add
                            </a>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* <!-- End Header -->

                    <!-- Table --> */}
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-slate-800">
                        <tr>
                            <th scope="col" className="pl-6 py-3 text-left">
                                <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                <input type="checkbox" className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main"/>
                                <span className="sr-only">Checkbox</span>
                                </label>
                            </th>

                            <th scope="col" className="pr-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                ID
                                </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Name
                                </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Class
                                </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Age
                                </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Gender
                                </span>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Contact
                                </span>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                View Details
                                </span>
                                </div>
                            </th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {students.map((student) => (
                        <tr  key={student.id}>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="pl-6 py-2">
                                <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                <input type="checkbox" className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1"/>
                                <span className="sr-only">Checkbox</span>
                                </label>
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="pr-6 py-2">
                                <a className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500" href="#">#{student.id}</a>
                                </div>
                            </td>
                            <td class="h-px w-px whitespace-nowrap">
                            <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                <div class="flex items-center gap-x-3">
                                <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                                <div class="grow">
                                    <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{student.fname} {student.lname}</span>
                                </div>
                                </div>
                            </div>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-2">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {student.grade}
                                </span>
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400 items-center">{student.age}</span>
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap text-left">
                                <div className="px-6 py-2 ">
                                <span className="text-sm text-gray-600 dark:text-gray-400">{student.gender}</span>
                                </div>
                            </td>
                            <td class="h-px w-px whitespace-nowrap">
                            <div className="flex space-x-2 items-center px-6 py-2">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-300/30">
                                    <FaPhone className="text-gray-800 text-sm" />
                                </div>
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-300/30">
                                    <FaCommentAlt className="text-gray-800 text-sm" />
                                </div>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5 flex justify-start">
                                <div className="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-md transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700">
                                <div className="inline-block">
                                <a class="block" href="javascript:;" data-hs-overlay="#hs-ai-invoice-modal">
                                <div class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-l-md border-1 font-medium bg-white text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    View
                                </div>
                                </a>
                                </div>
                                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                    <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-r-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                    </button>
                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
                                    <div className="py-2 first:pt-0 last:pb-0">
                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                            Options
                                        </span>
                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            Copy
                                        </a>
                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                            </svg>
                                            Print
                                        </a>
                                    </div>
                                    <div className="py-2 first:pt-0 last:pb-0">
                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                            Download options
                                        </span>
                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/>
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                            </svg>
                                            Excel
                                        </a>
                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"/>
                                            </svg>
                                            .CSV
                                        </a>
                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                            <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                                            </svg>
                                            .PDF
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                        </table>
                    {/* <!-- End Table -->

                    <!-- Footer --> */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                    <div class="inline-flex items-center gap-x-2">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Showing:
                        </p>
                        <div class="max-w-sm space-y-3">
                            <select class="py-2 px-3 pr-9 block w-full text-gray-800 bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option selected>9</option>
                            <option>20</option>
                            </select>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            of 20
                        </p>
                        </div>

                        <div>
                        <div className="inline-flex gap-x-2">
                            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                Prev
                            </button>

                            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                Next
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* <!-- End Footer --> */}
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Table Section --> */}

            
    {/* <!-- Modal --> */}
    <div id="hs-ai-invoice-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
        <div class="relative overflow-hidden min-h-[8rem] bg-gray-900 text-center rounded-t-xl">
            {/* <!-- Close Button --> */}
            <div class="absolute top-2 right-2">
            <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards" data-hs-remove-element="#hs-ai-modal">
                <span class="sr-only">Close</span>
                <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                </svg>
            </button>
            </div>
            {/* <!-- End Close Button --> */}

            {/* <!-- SVG Background Element --> */}
            <figure class="absolute inset-x-0 bottom-0">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                <path fill="currentColor" class="fill-white dark:fill-gray-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
            </svg>
            </figure>
            {/* <!-- End SVG Background Element --> */}
        </div>

        <div class="relative z-10 -mt-12">
            {/* <!-- Icon --> */}
            <span class="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <img class="rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
            </span>
            {/* <!-- End Icon --> */}
        </div>

        {/* <!-- Body --> */}
        <div class="p-4 sm:p-7 overflow-y-auto">
            <div class="text-center">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Berack Kaunda
            </h3>
            <p class="text-sm text-blue-600">
                ID: #3682303
            </p>
            <div className="flex space-x-2 justify-center px-6 py-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-300/30">
                    <FaPhone className="text-gray-800 text-sm" />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-300/30">
                    <FaCommentAlt className="text-gray-800 text-sm" />
                </div>
            </div>
        </div>
        
        *{/* <!-- Grid --> */}
            <div class="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center">
            <div>
                <span class="block text-xs uppercase text-gray-500">Class:</span>
                <span class="block text-sm font-medium text-gray-800 dark:text-gray-200">Grade 4</span>
            </div>
            {/* <!-- End Col --> */}

            <div>
                <span class="block text-xs uppercase text-gray-500">Gender:</span>
                <span class="block text-sm font-medium text-gray-800 dark:text-gray-200">Male</span>
            </div>
            {/* <!-- End Col --> */}

            <div>
                <span class="block text-xs uppercase text-gray-500">Age:</span>
                <span class="block text-sm font-medium text-gray-800 dark:text-gray-200">12</span>
            </div>
            {/* <!-- End Col --> */}

            <div>
                <span class="block text-xs uppercase text-gray-500">Address:</span>
                <span class="block text-sm font-medium text-gray-800 dark:text-gray-200">123 Main St, City, State</span>
            </div>
            {/* <!-- End Col --> */}

            </div>
            {/* <!-- End Grid --> */}

            <div class="mt-5 sm:mt-10">
                <h4 class="text-xs font-semibold capitalize text-gray-800 dark:text-gray-200">About</h4>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Sarah is a hardworking student who takes her studies seriously. 
                She is always eager to participate in class discussions 
                and is not afraid to ask questions when she doesn't understand something. 
                Her positive attitude and enthusiasm inspire those around her.
                </p>
            </div>
            {/* Student Productiviy/Attendance */}

            <div class="mt-5 sm:mt-10">
            <h4 class="text-xs font-semibold capitalize text-gray-800 dark:text-gray-200">Student Attendance</h4>   
            <div className="flex items-center flex-wrap max-w-md px-10 bg-white border shadow-xl rounded-2xl h-20 mt-10">
                <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                    <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
                    <circle
                        className="text-gray-300"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    <circle
                        className="text-red-600"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (Percent / 100) * circumference}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    </svg>
                    <span className="absolute text-2xl text-red-700">{`${Percent}%`}</span>
                </div>
                <p className="ml-10 font-medium text-gray-600 sm:text-xl">of classes</p>
                <span className="ml-auto text-xl font-medium text-red-600 hidden sm:block">{`${AttendedClasses}/${TotalClasses}`}</span>
                </div>
                </div>


                <div class="mt-5 sm:mt-10">
                    <h4 class="text-xs font-semibold capitalize text-gray-800 dark:text-gray-200">Student Perfomance</h4>
                    <Line options={options} data={data} />;
                </div>

                <div class="mt-5 sm:mt-10">
                <h4 class="text-xs font-semibold capitalize text-gray-800 dark:text-gray-200">Students from same class</h4>  
                <div className="flex items-center mt-8">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="/man.png" alt="Profile 1" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="/man.png" alt="Profile 2" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="/man.png" alt="Profile 3" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="/man.png" alt="Profile 3" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="/man.png" alt="Profile 3" />
                    </div>
                    <p className="ml-2 text-blue-600 font-semibold text-lg">+ 30 more</p>
                </div>
                </div>
            </div>
        {/* <!-- End Body --> */}
        </div>
    </div>
    </div>
    {/* <!-- End Modal --> */}


{/* <!-- Add student Modal --> */}
<div id="hs-modal-signup" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div class="p-4 sm:p-7">
    <div className="mb-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Create your student profile
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
        Manage your name, password and account settings.
        </p>
        </div>

        
<div class="mt-5">
         {/* <!-- Form --> */}
         <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-3">
            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Profile photo
            </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-9">
            <div className="flex items-center gap-5">
            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="/man.png" alt="Image Description"/>
            <div className="flex gap-x-2">
                <div>
                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    Upload photo
                    </button>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- End Col --> */}


        {/* <div className="col-span-9">
            <div className="flex items-center gap-5">
            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="/man.png" alt="Image Description"/>
            <div className="flex gap-x-2">
                <div>
                <div className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <label className="relative flex items-center">

                <svg className="w-3 h-3 absolute right-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
                    <input type="file" placeholder="Upload photo" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-blue-700
                    hover:file:bg-violet-100" />
                </label>
                </div></div>
            </div>
            </div>
        </div>
        <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Full name
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input required value={fname} onChange={(e) => setFName(e.target.value)} name="name" id="af-account-full-name" type="text" className="py-2 px-3 pr-11 block w-full  text-gray-900 bg-white  border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-50 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Maria"/>
            <input required value={lname} onChange={(e) => setLName(e.target.value)} type="text" className="py-2 px-3 pr-11 block w-full bg-white border border-gray-200 text-gray-900 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Boone"/>
            </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Age
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input value={age} onChange={(e) => setAge(e.target.value)} name="phoneNumber" id="af-account-phone" type="number" className="py-2 px-3 pr-11 block w-full bg-white border border-gray-200 text-gray-800 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Age"/>
            </div>
        </div>
        {/* <!-- End Col --> */}



        <div className="col-span-3">
            <label htmlFor="af-account-class" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Grade/Class
            </label>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <select value={grade} onChange={(e) => setGrade(e.target.value)} id="af-submit-app-category" class="py-2 px-3 pr-9 block w-full bg-white border text-gray-500 border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <option selected value="">Select Grade/Class</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            </select>
        </div>
        </div>
        {/* <!-- End Col --> */}



        <div className="col-span-3">
            <div className="inline-block">
            <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Phone
            </label>
            </div>
        </div>
        <div className="col-span-9">
            <div className="sm:flex">
            <input  value={phone} onChange={(e) => setPhone(e.target.value)} name="phoneNumber" id="af-account-phone" type="text" className="py-2 px-3 pr-11 block w-full text-gray-900 bg-white border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="+x(xxx)xxx-xx-xx"/>
            </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Email
            </label>
            <span className="text-sm text-gray-400 dark:text-gray-600">
                (Optional)
            </span>
        </div>
        {/* <!-- End Col --> */}


        <div className="col-span-9">
            <input  value={email} onChange={(e) => setEmail(e.target.value)} id="af-account-email" type="email" className="py-2 px-3 pr-11 block w-full text-gray-900 bg-white border border-gray-200 shadow-sm text-sm rounded-lg focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="maria@site.com"/>
        </div>

        <div className="col-span-3">
            <label htmlFor="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Gender
            </label>
        </div> 
        <div className="col-span-9">
        <div className="sm:flex">
            <label htmlFor="af-account-gender-checkbox" className="flex py-2 px-3 block w-full bg-white border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 rounded-full text-blue-600 pointer-events-none focus:outline-none checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Male</span>
            </label>

            <label htmlFor="af-account-gender-checkbox-female" className="flex py-2 px-3 block w-full border bg-white border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox-female"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 checked:bg-blue-500 checked:border-blue-500 rounded-full text-blue-600 pointer-events-none focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-female"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Female</span>
            </label>

            <label htmlFor="af-account-gender-checkbox-other" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input
                value="other"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="af-account-gender-checkbox-other"
                className="shrink-0 mt-0.5 bg-white border border-gray-200 rounded-full text-blue-600 pointer-events-none focus:outline-non dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-other"
            />
            <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Other</span>
            </label>
        </div>
        </div>

        <div className="col-span-3">
            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Address
            </label>
        </div>
        <div className="col-span-9">
            <input  value={address} onChange={(e) => setAddress(e.target.value)} id="af-account-bio" type="address" className="py-2 px-3 block w-full text-gray-900 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Add your location"/>
        </div>
        {/* <!-- End Col --> */}
        <div className="col-span-3">
            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            BIO
            </label>
        </div>
        <div className="col-span-9">
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} id="af-account-bio" className="py-2 px-3 block w-full bg-white border text-gray-900 border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Type your message..."></textarea>
        </div>
        {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-5 flex justify-end gap-x-2">
        <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            Cancel
        </button>
        <button type="submit" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Save changes
        </button>
        </div>
        </form>
        {/* <!-- End Form --> */}
        </div>
    </div>
    </div>
</div>
</div>
</main>
    )
}

export default Tables;
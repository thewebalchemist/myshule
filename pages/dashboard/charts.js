import React from 'react';


import {
    ArcElement,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

    ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
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
    export const data2 = {
        labels: ['Females', 'Males',],
        datasets: [
        {
        label: '',
        data: [203, 197,],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
    };

    const notices = [
    {
        title: "School Events",
        description: "Sports competition on 25th May",
    },
    {
        title: "Exam Schedule",
        description: "Term exams start on 1st June",
    },
    {
        title: "Holiday Notice",
        description: "School closed on 10th June",
    },
    {
        title: "Important Deadline",
        description: "Project submission on 15th June",
    },
    {
        title: "Club Activities",
        description: "Chess Club meeting on 5th June",
    },
    {
        title: "Scholarships",
        description: "Apply for the ABC Scholarship Program",
    },
    {
        title: "Guest Speaker",
        description: "Dr. Jane Doe's talk on 8th June",
    },
    {
        title: "Achievement Celebration",
        description: "Congrats to John for winning the science fair",
    },
    ];


export const data = {
labels,
datasets: [
    {
    label: 'Teachers',
    data: labels.map(() => faker.datatype.number({ min: 20, max: 500 })),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
    label: 'Students',
    data: labels.map(() => faker.datatype.number({ min: 100, max: 2500 })),
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
],
};

export const data3 = {
    labels,
    datasets: [
    {
        label: 'Expenses',
        data: labels.map(() => faker.datatype.number({ min: 20000, max: 100000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        label: 'Earnings',
        data: labels.map(() => faker.datatype.number({ min: 20000, max: 100000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    ],
};


const Charts = () => {
    return (
    <main>
            <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-1 grid bg-white m-2 border rounded-2xl '>
        <div class="rounded-lg p-4">
            <div class="flex justify-between items-center">
                <h2 class="text-gray-800 font-bold text-xl">Students</h2>
                <select class="ml-2 p-1 bg-gray-50 text-sm text-gray-800 rounded-3xl border hover:bg-gray-200 focus:outline-none">
                <option value="grade-1">Grade 1</option>
                <option value="grade-2">Grade 2</option>
                <option value="grade-3">Grade 3</option>
                <option value="grade-4">Grade 4</option>
                <option value="grade-5">Grade 5</option>
                <option value="grade-6">Grade 6</option>
                <option value="grade-7">Grade 7</option>
                <option value="grade-8">Grade 8</option>
                </select>
            </div>
        </div>
        <Doughnut options={options} data={data2} className='p-1' />
        </div>

        <div className='col-span-2 grid bg-white m-2 border rounded-2xl'>
        <div class="rounded-lg p-4">
            <div class="flex justify-between items-center">
                <h2 class="text-gray-800 font-bold text-xl">School Perfomance</h2>
                <select class="ml-2 p-1 bg-gray-50 text-sm text-gray-800 rounded-3xl border hover:bg-gray-200 focus:outline-none">
                <option value="grade-1">2023</option>
                <option value="grade-2">2022</option>
                <option value="grade-3">2021</option>
                <option value="grade-4">2020</option>
                </select>
            </div>
        </div>
            <Bar options={options} data={data} className='p-1' />
        </div>
    </div>
    
    
<div className='grid grid-cols-3 gap-3 m-2'>
    <div className='col-span-2'>
    <div className='bg-white border rounded-2xl'>
    <div class="rounded-lg p-4">
        <div class="flex justify-between items-center">
        <div class="text-start px-4">
                <h3 class="text-xl font-bold text-gray-800 ">Financial Report</h3>
        </div>
            <select class="ml-2 p-1 bg-gray-50  text-sm text-gray-800 rounded-3xl border hover:bg-gray-200 focus:outline-none">
            <option value="grade-1">2023</option>
            <option value="grade-2">2022</option>
            <option value="grade-3">2021</option>
            <option value="grade-4">2020</option>
            </select>
        </div>
    </div>
    <Line options={options} data={data3} />;
    </div>
    </div> <div className='col-span-1 '>
            <div className='bg-white p-4 rounded-xl border '>
            <div className="overflow-y-auto max-h-96 no-scrollbar">
            <h2 className='text-slate-700 text-lg pb-2 font-semibold'>Notice Board</h2>
            <div className='flex flex-col space-y-2'>

            {/* <!-- Card --> */}
            {notices.map((notice, index) => (
            <a key={index} class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
            <div class="p-4 md:p-5">
                <div class="flex">
                <svg class="mt-1 shrink-0 w-5 h-5 text-red-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>

                <div class="grow ml-5">
                    <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    {notice.title}
                    </h3>
                    <p class="text-sm text-gray-500">
                    {notice.description}
                    </p>
                </div>
                </div>
            </div>
            </a>
            ))}
            {/* <!-- End Card --> */}
            </div>
            </div>

            </div>
        </div>
    </div>

    </main>
    )
}

export default Charts;
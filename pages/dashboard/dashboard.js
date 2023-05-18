import { useEffect } from 'react';
import React from 'react';
import Stats from './stats';
import Charts from './charts';
import Tables from './tables';

export default function Dashboard() {
    return (
        <main>
            <div class="text-start px-4">
                <h1 class="text-3xl font-bold text-slate-700 ">Dashboard</h1>
                <p class="text-sm text-gray-600">Hi, Berack, welcome to Mshule dashboard</p>
            </div>

            <Stats />
            <Charts />
            <div className='grid grid-cols-3 gap-2'>
                <div className='col-span-2 '>
                    
                </div>
                <div className='col-span-1 '>
                    <div className='bg-white p-4 rounded-xl '>
                        

                    </div>
                </div>
            </div>
            <Tables />
            </main>
)
}

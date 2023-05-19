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
            <Tables />
            </main>
)
}

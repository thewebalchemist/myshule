import React from 'react';
import Sidebar from './sidebar';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-50 dark:bg-slate-500'>
        <Head>
            <title>Mshule Dashboard</title>
            <meta name="description" content="This is the Mshule dashboard" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar />

        <main className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-64">
            {children}
        </main>

        <footer>
            {/* Add your footer content here */}
        </footer>
        </div>
    );
    };

export default Layout;

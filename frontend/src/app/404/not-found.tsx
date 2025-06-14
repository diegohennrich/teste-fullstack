import React from 'react';

export default function NotFound(): React.ReactNode {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Not Found</h1>
            <p className="text-gray-500">The page you are looking for does not exist</p>
        </div>
    )
}
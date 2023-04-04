import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-secondary"></div>
        </div>
    );
};

export default LoadingIndicator;
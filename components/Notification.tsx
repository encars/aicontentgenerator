import React from 'react';

type NotificationType = 'success' | 'error' | 'info';

type NotificationProps = {
    message: string;
    type: NotificationType;
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <div className={`p-4 rounded ${bgColor[type]} text-white}`}>
            {message}
        </div>
    );
};

export default Notification;
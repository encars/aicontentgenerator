import React from 'react'

type ContentPreviewProps = {
    title: string;
    content: string;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ title, content }) => {
    return (
        <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default ContentPreview;
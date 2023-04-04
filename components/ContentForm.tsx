import React from 'react'

type ContentFormProps = {
    onSubmit: (data: { title: string; content: string }) => void;
    initialValues?: { title: string; content: string };
}

const ContentForm: React.FC<ContentFormProps> = (props: ContentFormProps) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {/* Render form fields here */}
            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded">
                Save
            </button>
        </form>
    );
};

export default ContentForm;
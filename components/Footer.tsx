import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary p-4">
            <div className="container mx-auto">
                <p className="text-white text-center">&copy; {new Date().getFullYear()} Falco47</p>
            </div>
        </footer>
  );
};

export default Footer;
import React from "react";

const Button = ({ children, type, onClick }) => { 
    const spl = type === 'hollow' ? "text-gray-900 hover:text-gray-600" : "bg-green-600 hover:bg-green-700 text-gray-100";
    return (
    <button onClick={onClick} className={spl + " font-bold py-4 px-8 my-8 mx-2 border rounded-md"}>
        {children}
    </button>
)};

export const Breadcrumb = ({ children, onClick, selected }) => { 
    const bg = selected ? "bg-gray-300" : "";
    return (
    <button onClick={onClick} className={bg + " cursor-pointer text-gray-600 py-2 px-8 m-2 border rounded-md text-left"}>
        {children}
    </button>
)};

export default Button;
import React from 'react';

export interface ButtonProps {
    className?: string;
    buttonText: string;
    buttonIcon?: string;
}
export const Button = (buttonProps: ButtonProps) => {
    return (
        <button
            className={`bg-primary text-white hover:bg-blue-500
    px-6 py-2 rounded-full ${buttonProps.className}`}
        >
            {buttonProps.buttonText}
        </button>
    );
};

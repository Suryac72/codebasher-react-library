import React from 'react';

export interface ButtonProps {
    className?: string;
    buttonText: string;
    buttonIcon?: string;
}
export const Button = (buttonProps: ButtonProps) => {
    return <button className={buttonProps.className}>{buttonProps.buttonText}</button>;
};

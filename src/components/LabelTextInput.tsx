import React from 'react';

interface LabelTextInputProps {
    labelText: string;
    inputPlaceholder?: string;
    className?: string;
    inputType?: string;
    labelFor?: string;
    isRequired?: boolean;
    labelinputStyle?: string;
    inputId: string;
    inputName: string;
    componentClassName?: string;
}
const LabelTextInput = (labelTextInputProps: LabelTextInputProps) => {
    return labelTextInputProps.className ? (
        <div className={labelTextInputProps.componentClassName}>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {labelTextInputProps.labelText}
            </label>
            <div className="mt-2">
                <input
                    id={labelTextInputProps.inputId}
                    name={labelTextInputProps.inputName}
                    type={labelTextInputProps.inputType}
                    autoComplete="email"
                    placeholder={labelTextInputProps.inputPlaceholder}
                    required={labelTextInputProps.isRequired ? true : false}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${labelTextInputProps.className}`}
                />
            </div>
        </div>
    ) : (
        <div className={labelTextInputProps.componentClassName}>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {labelTextInputProps.labelText}
            </label>
            <div className="mt-2">
                <input
                    id={labelTextInputProps.inputId}
                    name={labelTextInputProps.inputName}
                    type={labelTextInputProps.inputType}
                    autoComplete="email"
                    placeholder={labelTextInputProps.inputPlaceholder}
                    required={labelTextInputProps.isRequired ? true : false}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
            </div>
        </div>
    );
};

export default LabelTextInput;

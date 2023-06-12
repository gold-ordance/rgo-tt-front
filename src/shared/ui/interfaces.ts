import { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "type" | "onChange" | "readOnly"> {
    className?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

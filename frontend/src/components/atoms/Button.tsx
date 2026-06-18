import { Button as MUIButton, type ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
    label: string;
    onClick: () => void
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
    return <MUIButton onClick={onClick} {...props}>{label}</MUIButton>;
};

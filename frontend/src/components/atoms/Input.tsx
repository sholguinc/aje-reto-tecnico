import { TextField, type TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps & {
    label: string;
    error?: boolean,
}

export const Input = ({ label, error, ...props }: InputProps) => {
    return <TextField label={label} fullWidth error={error} {...props} />;
};

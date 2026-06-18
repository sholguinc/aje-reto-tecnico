import { Box, FormHelperText } from "@mui/material";
import { Input, type InputProps } from "../atoms/Input";

type FormFieldProps = InputProps & {
    helperText?: string;
}

export const FormField = ({
    helperText,
    error,
    ...props
}: FormFieldProps) => {
    return (
        <Box sx={{ mb: 2 }}>
            <Input {...props} />

            {helperText && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
            )}
        </Box>
    );
};

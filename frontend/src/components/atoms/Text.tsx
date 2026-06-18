import { Typography } from "@mui/material";
import { type ReactNode } from "react";

export interface TextProps {
    children: ReactNode;
    variant?: "name" | "body";
}

export const Text = ({ children, variant = "body" }: TextProps) => {
    const styles =
        variant === "name"
            ? { fontWeight: 600, fontSize: 16 }
            : { fontWeight: 500, fontSize: 14 };

    return <Typography sx={styles}>{children}</Typography>;
};

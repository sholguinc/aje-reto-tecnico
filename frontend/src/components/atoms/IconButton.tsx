import { IconButton as MUIIconButton } from "@mui/material";
import { type ReactNode } from "react";

export interface IconButtonProps {
    icon: ReactNode;
    onClick: () => void;
    bgColor?: string;
    iconColor?: string;
    size?: number;
}

export const IconButton = ({
    icon,
    onClick,
    bgColor = "transparent",
    iconColor = "inherit",
    size = 40,
}: IconButtonProps) => {
    return (
        <MUIIconButton
            onClick={onClick}
            sx={{
                backgroundColor: bgColor,
                width: size,
                height: size,
                borderRadius: "50%",
                "&:hover": {
                    backgroundColor: bgColor,
                    opacity: 0.85,
                },
            }}
        >
            <span style={{ color: iconColor, display: "flex" }}>
                {icon}
            </span>
        </MUIIconButton>
    );
};

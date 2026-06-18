import { Box } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { IconButton, Text } from "../atoms";

import { COLORS } from "../../constants";

export interface CardBackProps {
    email: string;
    phone: string;
    onEdit: () => void;
    onDelete: () => void;
}

export const CardBack = ({
    email,
    phone,
    onEdit,
    onDelete
}: CardBackProps) => {
    return (
        <Box
            className='card-back-container'
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "space-between",
                paddingX: 1,
                paddingY: 6,
                boxSizing: "border-box"
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center" }}>
                <Text><strong>Email:</strong> {email}</Text>
                <Text><strong>Phone:</strong> {phone}</Text>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <IconButton
                    icon={<EditOutlinedIcon />}
                    bgColor={COLORS.primary}
                    iconColor={COLORS.background}
                    onClick={onEdit}
                />

                <IconButton
                    icon={<DeleteOutlinedIcon />}
                    bgColor={COLORS.primary}
                    iconColor={COLORS.background}
                    onClick={onDelete}
                />
            </Box>
        </Box>
    );
};

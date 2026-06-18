import { Box, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { CardFront } from "../molecules";
import { CLIENT_ACTIONS, CLIENT_ACTIONS_TITLE, COLORS } from "../../constants";

export interface AddCardProps {
    handleCreate: () => void;
}

export const AddCard = ({
    handleCreate
}: AddCardProps) => {
    return (
        <Box
            className="add-card-container"
            sx={{
                perspective: "1000px",
                width: 200,
                height: 250,
                cursor: "pointer",
                boxSizing: "border-box",
            }}
        >
            <Box
                className="add-card-inner"
                onClick={handleCreate}
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    background: COLORS.background,
                    borderRadius: 3,
                    transition: "0.3s ease",
                    border: `3px solid transparent`,
                    "&:hover": {
                        background: COLORS.primary,
                        border: `3px solid ${COLORS.background}`,
                    },
                    "&:hover svg": {
                        color: COLORS.background,
                    },
                    "&:hover .MuiAvatar-root": {
                        border: `4px solid ${COLORS.background}`,
                    },
                    "&:hover .MuiTypography-root": {
                        color: COLORS.background,
                    },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                    }}
                >
                    <CardFront names={CLIENT_ACTIONS_TITLE[CLIENT_ACTIONS.CREATE]} icon={<AddIcon fontSize="large" sx={{ color: COLORS.primary }} />} />
                </Box>
            </Box>
        </Box>
    );
};

import { Box } from "@mui/material";

import { COLORS } from "../../constants";
import { CardFront, CardBack } from "../molecules";

export interface CardProps {
    names: string;
    email: string;
    phone: string;
    onEdit: () => void;
    onDelete: () => void;
}

export const Card = ({
    names,
    email,
    phone,
    onEdit,
    onDelete,
}: CardProps) => {
    return (
        <Box
            className="card-container"
            sx={{
                perspective: "1000px",
                width: 200,
                height: 250,
                cursor: "pointer",
                "&:hover .flip-inner": {
                    transform: "rotateY(180deg)",
                },
            }}
        >
            <Box
                className="flip-inner"
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    background: COLORS.background,
                    borderRadius: 3,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: "translateZ(0)",
                    willChange: "transform",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                    }}
                >
                    <CardFront names={names} />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <CardBack
                        email={email}
                        phone={phone}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Box>
            </Box>
        </Box>
    );
};

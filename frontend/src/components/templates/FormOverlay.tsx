import { Box, Fade } from "@mui/material";

interface FormOverlayTemplateProps {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export const FormOverlayTemplate = ({
    open,
    onClose,
    children,
}: FormOverlayTemplateProps) => {
    return (
        <Fade in={open} timeout={800}>
            <Box
                onClick={onClose}
                sx={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1300,
                }}
            >
                <Box onClick={(e) => e.stopPropagation()}>
                    {children}
                </Box>
            </Box>
        </Fade>
    );
};

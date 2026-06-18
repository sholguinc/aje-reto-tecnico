import { Box } from "@mui/material";

import { Avatar, Text } from "../atoms";
import { getAvatarSource } from "@/utils";

import { COLORS } from "@/constants";

export interface CardFrontProps {
  names: string;
  icon?: React.ReactNode;
}

export const CardFront = ({ names, icon }: CardFrontProps) => {
  const src = icon ? undefined : getAvatarSource(names);

  return (
    <Box
      className='card-front-container'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2.5,
        width: "100%",
        height: "100%",
      }}
    >
      <Avatar names={names} size={100} src={src} sx={{
        border: `4px solid ${COLORS.primary}`,
        backgroundColor: "transparent",
      }} >
        {!src && icon}
      </ Avatar>
      <Text variant="name">{names}</Text>
    </Box>
  );
};
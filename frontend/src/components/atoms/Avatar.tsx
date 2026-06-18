import MuiAvatar from '@mui/material/Avatar';
import { getNameInitials } from '@/utils';

export interface AvatarProps {
    names: string;
    size: number;
    src?: string;
    sx?: object;
    children?: React.ReactNode;
}

export const Avatar = ({
    names,
    size,
    src,
    sx,
    children
}: AvatarProps) => {
    const nameInitials = getNameInitials(names);

    return (
        <MuiAvatar alt={names} src={src} sx={{ width: size, height: size, ...sx }}>
            {children ?? nameInitials}
        </MuiAvatar>
    );
};

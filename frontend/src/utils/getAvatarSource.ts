const AVATAR_API_URL = `https://api.dicebear.com/7.x/avataaars/svg`

export const getAvatarSource = (name: string): string => {
    return `${AVATAR_API_URL}?seed=${(name)}`;
}

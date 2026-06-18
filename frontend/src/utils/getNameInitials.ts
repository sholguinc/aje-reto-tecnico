export function getNameInitials(names: string) {
    const parts = names.trim().split(' ');
    const first = parts[0]?.[0] ?? '';
    const second = parts[1]?.[0] ?? '';

    return `${first}${second}`;
}

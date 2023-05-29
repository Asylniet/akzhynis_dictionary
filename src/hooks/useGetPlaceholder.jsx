export const useGetPlaceholder = () => {
    const placeholders = [
        "dictionary",
        "code",
        "javascript",
        "developer",
        "map",
        "fog",
        "voter",
        "advance",
        "memorial",
        "exit",
        "nuance",
    ];

    return placeholders[Math.floor(Math.random() * placeholders.length)];
}
export function loadFile(file: string) {
    return new URL(`../assets/${file}`, import.meta.url).href
}

export function loadFileFromServer(file: string) {
    return new URL(file, location.hostname).href
}
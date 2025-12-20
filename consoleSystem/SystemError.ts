export function errorFromConsole(message: string): Error {
    return new Error(`ConsoleSystem Error: ${message}`);
}
export class ConsoleSystemError extends Error {
    constructor(message: string) {
        super(`ConsoleSystem Error: ${message}`);
        this.name = 'ConsoleSystemError';
    }
}

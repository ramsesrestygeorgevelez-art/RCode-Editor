class ConsoleHistory {
    private history: string[];

    constructor() {
        this.history = [];
    }
    record(entry: string): void {
        this.history.push(entry);
    }
    getHistory(): string[] {
        return this.history;
    }
    clear(): void {
        this.history = [];
    }

}
// Export the ConsoleHistory class
export default ConsoleHistory;
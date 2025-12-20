// require the console history module
import ConsoleHistory from './ConsoleHistory';

// SystemLog class to manage system logs
class SystemLog {

    logs: string[];
    consoleHistory: any;
    
    constructor() {
        this.logs = [];
        this.consoleHistory = new ConsoleHistory();
    }
    addLog(message: any) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] ${message}`;
        this.logs.push(logEntry);
        this.consoleHistory.record(logEntry);
        return logEntry;
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = [];
        this.consoleHistory.clear();
    }
}
export default SystemLog
export {SystemLog}

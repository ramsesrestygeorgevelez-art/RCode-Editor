import { SystemLog } from "../consoleSystem/SystemLog";

class Command {
    name: string
    description: string
    constructor(name: string, description: string, execute: (...args: any[]) => any) {
        this.name = name;
        this.description = description;
    }
    executeCommand(name: string){
        const commandPath = name.startsWith("/", 1)
        const path = commandPath.valueOf()
        if (commandPath)  {
           const log = new SystemLog()
           log.addLog("Command executed!")
           log.addLog(path)
        }
    }
}
export default Command;
export { Command };
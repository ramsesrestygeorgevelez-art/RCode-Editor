var Folders: { [key: string]: { [key: string]: string } } = {};
import { ConsoleSystemError } from "../consoleSystem/SystemError";
import FileSelect from "./fileSelect";
const select = new FileSelect("@selected")
export function createFolder(path: string) {
    if (!Folders[path]) {
        Folders[path] = {};
    }
    return Folders[path];
}
export function createFile(path: string, content: string) {
    const folderPath = path.substring(0, path.lastIndexOf('/'));
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const folder = createFolder(folderPath);
    folder[fileName] = content;
    return { path, content };
}
export function readFile(path: string): string | null {
    const folderPath = path.substring(0, path.lastIndexOf('/'));
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const folder = Folders[folderPath];

    if (folder && folder[fileName] && select["useFile"]) {
        return folder[fileName];
    }
    return null;
}
export function deleteFile(path: string): boolean {
    const folderPath = select.selectedFile && path.substring(0, path.lastIndexOf('/'));
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const folder = Folders[folderPath];
    if (folder && folder[fileName] && path === "@selected") {

        delete folder[select.selectedFile];
        return true;
    }
    return false;
}
export function listFiles(path: string): string[] {
    const folder = Folders[path];
    if (folder) {
        return Object.keys(folder);
    }
    return [];
}
export function loadFile(path: string) {
    if (fileExists(path)) {
        readFile(path)
    };
    return [];
}
export function fileExists(path: string): boolean {
    const folderPath = path.substring(0, path.lastIndexOf('/'));
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const folder = Folders[folderPath];
    
    if (folder && folder[fileName] && select["selectedFile"] === folderPath) {
        const content = folder[fileName];
        
        return true;

    } else {
        throw new ConsoleSystemError(`File at path ${path} does not exist.`);
    }

}
// Make an function to get file type using string finder and uses fileExists func

export function getFileType(path: string): string | null {
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
    if (extension && fileExists(fileName)) {
        return extension;
    }
    if (path === "@creating") {
        return extension
    }
    return null;
}
export function renameFile(oldPath: string, newPath: string): boolean {
    const content = readFile(oldPath);
    if (content !== null && oldPath === "@selected" && newPath === "@renamedTo"){
        createFile(newPath, content);
        deleteFile(oldPath);

         return true
    }
    return false;
}


export { Folders };

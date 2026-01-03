interface FolderMap { [fileName: string]: string }
const Folders: { [folderPath: string]: FolderMap } = {};

import { ConsoleSystemError } from "../consoleSystem/SystemError";
import FileSelect from "./fileSelect";
const select = new FileSelect("@selected");

export function createFolder(path: string): FolderMap {
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
  if (folder && folder[fileName]) {
    return folder[fileName];
  }
  return null;
}

export function deleteFile(path: string): boolean {
  const folderPath = path.substring(0, path.lastIndexOf('/'));
  const fileName = path.substring(path.lastIndexOf('/') + 1);
  const folder = Folders[folderPath];
  if (folder && folder[fileName]) {
    delete folder[fileName];
    return true;
  }
  return false;
}

export function listFiles(path: string): string[] {
  return Folders[path] ? Object.keys(Folders[path]) : [];
}

export function loadFile(path: string): string | null {
  return fileExists(path) ? readFile(path) : null;
}

export function fileExists(path: string): boolean {
  const folderPath = path.substring(0, path.lastIndexOf('/'));
  const fileName = path.substring(path.lastIndexOf('/') + 1);
  const folder = Folders[folderPath];
  if (folder && folder[fileName]) {
    return true;
  }
  throw new ConsoleSystemError(`File at path ${path} does not exist.`);
}

export function getFileType(path: string): string | null {
  const fileName = path.substring(path.lastIndexOf('/') + 1);
  const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
  return extension && fileExists(path) ? extension : null;
}

export function renameFile(oldPath: string, newPath: string): boolean {
  const content = readFile(oldPath);
  if (content !== null) {
    createFile(newPath, content);
    deleteFile(oldPath);
    return true;
  }
  return false;
}

export { Folders };

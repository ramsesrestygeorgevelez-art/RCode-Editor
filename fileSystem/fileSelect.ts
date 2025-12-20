import { loadFile } from "./fileCreate";
class FileSelect {
    selectedFile!: FileSystem["name"];
    constructor(name: string){
        this.selectedFile = name;

        if (name === "@selected") {
            this.useFile()
        }
    }
    useFile(){
       loadFile(this.selectedFile)
    }
}
export default FileSelect
export { FileSelect }
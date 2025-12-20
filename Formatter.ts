import { ConsoleSystemError } from "./consoleSystem/SystemError";
export function formatCode(code: string, language: string): string {
  // Simple formatter implementation
  if (language === "javascript" || language === "typescript") {
    return code
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
  }
  // Add more language formatters as needed
  return code;
}
export class Formatter {
  supportedLanguages: { [key: string]: boolean };
  constructor(supportedLanguages: { [key: string]: boolean }) {
    this.supportedLanguages = supportedLanguages;
  }
  formatFile(fileName: string, content: string): string {
    const fileExtension = fileName.split(".").pop() || "";
    if (this.supportedLanguages[fileExtension]) {
      return formatCode(content, fileExtension);
    } else {
      throw new ConsoleSystemError(
        `File type .${fileExtension} is not supported for formatting.`
      );
    }
  }
}

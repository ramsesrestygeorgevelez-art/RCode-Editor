class RCodePlugin {
  name: string;
  version: string;
  wiki: webkitURL;
  constructor(name: string, version: string, wiki: string) {
    this.name = name;
    this.version = version;
    this.wiki = new URL(wiki , "")
  }
  getInfo(): string {
    return `${this.name} v${this.version}`;
  }
  getSetting(name: string): { key: string; value: any } {
    const setting = new Setting(name, null);
    return { key: setting.key, value: setting.value };
  }

  createSetting(key: string, value: any): { key: string; value: any } {
    const setting = new Setting(key, value);
    return setting.getSettings();
  }
  addTheme(themeName: string): string {
    return `Theme ${themeName} added to plugin ${this.name}`;
  }
  setWiki(web: string) {
       this.wiki.search = web
  }
}
class Setting {
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }
  getSettings(): { key: string; value: any } {
    return { key: this.key, value: this.value };
  }
  setSetting(value: any): void {
    this.value = value;
  }
}
export { RCodePlugin, Setting };

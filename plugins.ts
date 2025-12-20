import { RCodePlugin } from './pluginHandle';
const PrettierPlugin = new RCodePlugin('Prettier', '2.3.2');
PrettierPlugin.createSetting("FileSupported", {
    "js": true,
    "ts": true,
    "json": true,
    "css": true,
    "html": true,
    "lua": true
});
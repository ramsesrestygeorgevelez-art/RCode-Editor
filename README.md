# RCode-Editor

## A code editor that is the same as VSCode and Acode but combined


``` typescript

class MyPlugin extends RCodeplugin {
    constructor(name){
        super(name)
        this.name = name
    }
    init(){
        Rcode.requireAPI("command").addCommandFromJSON({
            name: "helloWorld",
            code: () => {
                console.log("hello")
            }
        })
        Rcode.requireAPI("fileAPI").addFile("name", () => {

        })
        Rcode.requireAPI("prompt").PromptInput("title", "placeholder")
        Rcode.requireAPI("snippets").createSnippetFromJSON({
            ["name"]: "mysnippet",
            ["toadd"]: "console.log(#{1})" // #{1} is the cursor it puts.
        })
        Rcode.requireAPI("installPlugins").pluginAdd("myPlugin")
        Rcode.requireAPI("FileUtils").saveToFile({
            ["toSave"]: "myFile.rx" // rx is an custom mode. To add an mode: Rcode.requireAPI("programmingLangAdd").addPG("mo", () => {} // the token)
        })
    }
}
```

Docs:
__Rcode.requireAPI(name)__: Requires every api.

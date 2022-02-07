#### VSCode Debugger environment building

1. install node

2. npm change into domestic source

3. global install http-server

4. vscode plugin debugger for chrome

5. config file launch.json

   ~~~JSON
   {
       // Use IntelliSense to learn about possible attributes.
       // Hover to view descriptions of existing attributes.
       // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
       "version": "0.2.0",
       "configurations": [
           {
               "type": "pwa-chrome",
               "request": "launch",
               "name": "Launch Chrome against localhost",
               "url": "http://localhost:8080",
               "webRoot": "${workspaceFolder}/wwwroot"
           }
       ]
   }
   ~~~

   

#### Git integration

1. install git
2. install git plugin



#### Extension

install **vetur**（check and highlight） and **vue vscode snippets**（script package）


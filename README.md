Для настройки Prettier + ESLint:

0. Проинициализируйте проект или выполните npm i
1. Если конфигурационного файла `.eslintrc.js` нет, то выполни `npx eslint --init`
2. Если конфигурационный файл уже есть, переходи дальше
3. Установи зависимости для Prettier: `nmp i -D eslint-config-prettier prettier`
4. В конфигурационном файле `.eslintrc.js` в поле `extends` пропиши массив, в котором в конце будет строчка `'prettier'`

```js
module.exports = {
  // ...
  extends: ['airbnb-base', 'prettier'],
  // ...
};
```

5. Добавь конфигурационный файл для Prettier `.prettierrc`. Можно воспользоваться командой `npx degit grentank/create-prettierrc --force`
6. Нажми `Ctrl+Shift+P` или `Cmd+Shift+P`, введи `settings.json` и проверь файл пользовательских настроек VSCode. Там должны быть прописаны следующие строчки:

```jsonc
{
  "files.autoSave": "afterDelay",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```


## Installation

First you have to configure nvm and set version as `lts/erbium`. Type this: 

```shell
brew update
brew install nvm
mkdir ~/.nvm
vim ~/.bash_profile
```

Add this lines to your .bash_profile file: 
```shell
export NVM_DIR=~/.nvm
 source $(brew --prefix nvm)/nvm.sh
```

Execute source command to read and execute the content of the file: 
```shell
source ~/.bash_profile
```

Type 
```shell
ps -p $$
```
Then if the response is -zsh, you have to copy your .bash_profile to .zshrc to preserve npm version through your terminal session. 

Now, check you have configured the correct npm version running this: 

```sh
nvm ls
```

You have to get this response: 
```
->  v14.18.3
```

After this you can run: 

```sh
npm start
```

<h2>and then starts the magic!</h2>

Also if you nedd to rebuild the application you may type: 

```sh
npm install 
npm run build
```

# Steven Drucker's React Home Page


> Some notes: 
* Hardcoded to read researchData.json from https://stevenmdrucker.github.io/ResearchContent/ 
* Hardcoded to read images from https://stevenmdrucker.github.io/ResearchContent/researchImages
* Hardcoded to read bio.md from gist: https://stevenmdrucker.github.io/ResearchContent/Bio.md
* styles in both styles/main.scss and index.scss

## Develop
```sh
$ npm run start
```

## Build
```sh
$ npm run deploy
$ npm run publish 
```
Uses gh-pages to publish to github
Then copy contents of app directory to toplevel of steven-drucker.com

## Update
* Update data in https://stevenmdrucker.github.io/ResearchContent/researchData.json
* Add image to https://stevenmdrucker.github.io/ResearchContent/researchImages
+ To update Bio change https://stevenmdrucker.github.io/ResearchContent/Bio.md
+ To update CV change https://stevenmdrucker.github.io/ResearchContent/CV.md




inspired and forked from https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter 

## https://vivek.engineer 

## Running Locally

```sh-session
git clone https://github.com/vivek-dodia/vercel-static-portfolio
cd vercel-static-portfolio
```

Create a `.env` and update UPSTASH_REDIS_REST_URL=URL and UPSTASH_REDIS_REST_TOKEN=Token from https://upstash.com/ if you are using the projects sections.

Then install dependencies and run the development server:
```sh-session
npm install
npm run dev
```

## Cloning / Forking

Please remove all of my personal information (projects, images, etc.) before deploying your own version of this site.

## resolving 

npm WARN ERESOLVE overriding peer dependency

so i wasted couple hours trying to sort this out but if u run into this issue then 

1 - delete the preinstalled / cloned node_modules folder aka where the current version of modules / dependencies are installed.

2 - delete the package-lock.json which is like a snapshot of your project's dependencies and their exact versions at a particular time. When you run npm install, this file gets created or updated, ensuring that you and anyone else working on the project are on the same page regarding which versions of each dependency are being used. It helps to maintain consistency and eliminate the "but it works on my machine" problem but sometimes it can cause issues when u run npn install and it creates collisions with the locked version of dependency. 

3 - then try to reinstall the new version of the dependencies by npm i --force and also make sure to update the node version on the host machine when or if testing locally.
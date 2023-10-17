inspired and forked from https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter 

## https://vivek.engineer

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/upstash/clone?demo-title=Next.js%20Portfolio%20with%20Pageview%20Counter&demo-description=Portfolio%20site%20with%20pageview%20counter%2C%20built%20with%20Next.js%2013%20App%20Router%2C%20Contentlayer%2C%20and%20Upstash%20Redis.&demo-url=https%3A%2F%2Fchronark.com%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1DA8n5a6WaP9p1FXf9LmUY%2Fc6264fa2732355787bf657df92dda8a1%2FCleanShot_2023-04-17_at_14.17.37.png&project-name=Next.js%20Portfolio%20with%20Pageview%20Counter&repository-name=nextjs-portfolio-pageview-counter&repository-url=https%3A%2F%2Fgithub.com%2Fchronark%2Fchronark.com&from=templates&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17)

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
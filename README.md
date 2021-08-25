# watchtogether-bot

## About The Project

This is a very small Javascript project for a Discord bot, which generates [Watchtogether](https://community.w2g.tv/) links using their API.

## Getting Started

### Prerequisites

First of all [Node](https://nodejs.org/en/) is required to run Javascript files locally.

- Node.js
  - Make sure that you are using Node version 16.6.1 or higher, as lower versions will cause problems with the discord-js v13 package.
  - For example Node.js version 16.6.1 can be installed only on the project directory using: `npm install node@16.6.1 --save-exact`

* npm

### Installation

1. Create a new [Discord Developer Application](https://discord.com/developers/applications).
2. Create a bot for this application and generate a token for it.
3. Register at [WatchTogether](https://w2g.tv/), then go to **Edit Profile** and generate an API key.
4. Clone the repository
   `git clone https://github.com/RaphaelTravnicek/watchtogether-bot.git`
5. Install NPM packages `npm install`
6. Create a **.env** file in the same directory, which will be used to store the API keys
   The content of this file should look like this:
   ```
   DISCORD_BOT_TOKEN={insert discord bot token here}
   W2G_API_KEY={insert w2g api key here}
   ```
7. Connect the Discord bot to a server by going taking the **Application ID** form the **General Information** tab in your Discord App on the Developer Platform. Using this key go to https://discord.com/oauth2/authorize?client_id={insert application id here}&scope=bot , where a server can be selected.
8. Execute the script

```
npm run start
```

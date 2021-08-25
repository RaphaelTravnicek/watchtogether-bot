const fetch = require("node-fetch");

module.exports.createRoom = (message) => {
  fetch("https://w2g.tv/rooms/create.json", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      w2g_api_key: process.env.W2G_API_KEY,
    }),
  })
    .then((response) => response.json())
    .then(function (data) {
      const { streamkey } = data;
      message.channel.send(`https://w2g.tv/rooms/${streamkey}`);
    });
};

module.exports.createRoomURL = (message, url) => {
  fetch("https://w2g.tv/rooms/create.json", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      w2g_api_key: process.env.W2G_API_KEY,
      share: url,
    }),
  })
    .then((response) => response.json())
    .then(function (data) {
      const { streamkey } = data;
      message.channel.send(`https://w2g.tv/rooms/${streamkey}`);
    });
};

module.exports.sendHelp = (message) => {
  message.channel.send(
    "Watchtogether Bot Commands:\n $create \t\t\t\t to create a new channel \n $create [URL] \t to create a new channel and directly insert URL"
  );
};

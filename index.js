const { Client, GatewayIntentBits, Events, Colors } = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const config = require("./config.json"); 

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences
  ]
});

console.log("\x1b[32m*******************************\x1b[39m");
console.log("\x1b[32m          JSRunBot             \x1b[39m");
console.log("\x1b[32m        制作: @taka005          \x1b[39m");
console.log("\x1b[32m https://discord.gg/NEesRdGQwD \x1b[39m");
console.log("\x1b[32m*******************************\x1b[39m");

client.on(Events.MessageCreate,async(message)=>{
  if(message.author.bot) return;

  console.log(`\x1b[37m${message.author.tag}: ${message.content}\x1b[39m`);

  if(message.content.startsWith(`${config.prefix}exec`)){
    if(!config.admin.includes(message.author.id)) return await message.reply("このコマンドは関係者専用です").catch(()=>{});
    
    const script = `module.exports = async(message,client)=>{\n  ${message.content.slice(6)}\n}`;
    try{
      fs.writeFileSync("./tmp/script.js",script,"utf8");
      await require("./tmp/script")(message,message.client);
    }catch(error){
      await message.reply(`実行中にエラーが発生しました\n\`\`\`js\n${error.stack}\`\`\``).catch(()=>{});
    }
    delete require.cache[require.resolve("./tmp/script")];
  }
});


client.login(process.env.BOT_TOKEN)
  .then(()=>{
    console.log("\x1b[34mINFO: ログインしました\x1b[39m");
  })
  .catch(()=>{
    console.log("\x1b[31mERROR: ログインできませんでした\x1b[39m");
    process.exit();
  })

process.on("uncaughtException",async(error)=>{
  console.log(`\x1b[31m${error.stack}\x1b[39m`);
});

process.on("unhandledRejection",async(error)=>{
  console.log(`\x1b[31m${error.stack}\x1b[39m`);
});
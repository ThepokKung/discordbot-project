const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'Hello') {
        msg.reply('World!');
    }
    if (msg.content === 'hello') {
        msg.reply('world!');
    }
    if (msg.content == 'สวัสดี') {
        msg.reply('สวัสดีจ้า')
    }
    if (msg.content == 'รัก') {
        msg.reply('ไม่!!')
        msg.reply('ฉันไม่รักแก!')
        msg.reply('แกมันก็แค่ไอ้ลูกหมา')
    }
});

client.login(token);
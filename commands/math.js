const math = require('mathjs');

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to input the equasion!');
    
    message.channel.send('Output: ' + math.eval(args.join(' ')));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'math',
  category: 'Utility',
  description: 'Does math and returns the value',
  usage: 'math'
};

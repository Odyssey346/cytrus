const math = require('mathjs');

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to give the equation!');
    
    message.channel.send('Output: ' + math.eval(args.join(' ')));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['calc'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'math',
  category: 'Utility',
  description: 'Does math for you.',
  usage: 'math'
};

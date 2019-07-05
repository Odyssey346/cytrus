exports.run = async (client, message, args, level) => {
    try {
        if (!args[0]) return message.reply('You need to give the equation! Example: cy.math 9+10');

        message.channel.send('Output: ' + Math.eval(args.join('')));

    } catch (err) {
        exports.help = {
            name: 'math',
            category: 'Utility',
            description: 'Does math for you. \n For example: cy.math 1+1 would make Cytrus reply 2.',
            usage:math
        };
    }
}
const { Client, MessageAttachment, RichEmbed } = require('discord.js');
const command = require('./command.js')
const fs = require('fs')
exports.code = function(){

    function Timer(){
        const Timer = setTimeout(timeup, durations[durationType]);
    }
    function timeup() {
        target.roles.add(role)
        target.roles.remove(muterole)
        clearTimeout(Timer, 250);
    }


    client.on('message', (message, user) => {

        var command = '/purge';
        if(message.content.startsWith(command)){
        
        
        
        
            if (!message.member.permissions.has("MANAGE_MESSAGES")) {
                message.reply('You do not have permission to do that');
                return;
            }
            const args = message.content.split(' ').slice(1);
            const amount = args.join(' ');
            if(!amount) {
                message.reply('Put a number dumbass')
            }
            if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); 
            if (amount < 1) return message.reply('You have to delete at least 1 message!'); 
            message.channel.bulkDelete(amount)
            message.reply(`Deleted messages!`); 	
            
        
        
        } 
    });

    command(client, 'mute', async message => {
        const syntax = '!mute <@> <duration> <m,h,d,l>'
        const { member, channel, content, mentions } = message
        if (!message.member.hasPermission('MANAGE_MESSAGES')){
            channel.send('You do not have permission to run the command')
            return;
        }

        const split = content.trim().split(' ')
        if (split.length !== 4){
            channel.send('please use the correct command syntax: ' + syntax)
            return;
        }

        const duration = split[2]
        const durationType = split[3]
        if(isNaN(duration)){
            channel.send('please provide a number or the duration!\n' + syntax)
            return;
        }

        const durations = {
            m: 60,
            h: 60 * 60,
            d: 60 * 60 * 24,
            l: -1
        }

        if(!durations[durationType]){
            channel.send('please provide a duration type! \n' + syntax)
            return;
        }


        const muterole = member.guild.roles.cache.find(r => r.name.toLowerCase().includes('mute'))
        const target = mentions.members.first()
        // CHECK USER PERMS
        if (!message.member.hasPermission('MANAGE_MESSAGES')){
            channel.send('You do not have permission to run the command')
            return;
        }

        if(!target){
            channel.send('Please tag a user to mute!')
            return;
        } else {
            const { id } =  target
            const role = target.roles.cache
            target.roles.remove(role)
        }
        target.roles.add(muterole)
    })

    command(client, 'unmute', message =>{
        const syntax = '/unmute <@>'
        const { member, channel, content, mentions } = message
        const muterole = member.guild.roles.cache.find(r => r.name.toLowerCase().includes('mute'))
        const role = member.guild.roles.cache.find(r => r.name.toLowerCase() === ('member'))
        const target = mentions.members.first()
        const split = content.trim().split(' ')

        if (!message.member.hasPermission('MANAGE_MESSAGES')){
            channel.send('You do not have permission to run the command')
            return;
        }
        if (split.length !== 2){
            channel.send('please use the correct command syntax: ' + syntax)
            return;
        }
        if(!target){
            channel.send('Please tag a user to mute!')
            return;
        } else {
            const { id } =  target
            if(!role){
                message.reply('The _member_ role does not exist so it could not be added')
            }
            target.roles.add(role)
            clearTimeout(Timer, 250);
        }
        target.roles.remove(muterole)

    })
    
}

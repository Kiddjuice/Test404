import { BaseCommand, Command, Message } from '../../Structures'

@Command('bank', {
    description: '',
    usage: 'bank',
    category: 'economy',
    exp: 10,
    cooldown: 10
})
export default class command extends BaseCommand {
    override execute = async ({ from, sender, message }: Message): Promise<void> => {
        const { bank, tag } = await this.client.DB.getUser(sender.jid)
        const buttons = [
            { buttonId: `${this.client.config.prefix}wallet`, buttonText: { displayText: 'wallet 👑' }, type: 1 },
            { buttonId: `${this.client.config.prefix}bank`, buttonText: { displayText: 'bank 🔥' }, type: 1 }
        ]  
        const buttonMessage = {
            text: `${bank}`,
            footer: '404',
            buttons: buttons,
            headerType: 1
        }
        return void (await this.client.sendMessage(from, buttonMessage, {
            quoted: message
        }))
    }
}

let dia = d.toLocaleDateString(locale, { weekday: 'long' })
let fecha = d.toLocaleDateString(lenguajeGB.lenguaje(), { day: 'numeric', month: 'numeric', year: 'numeric' })
let mes = d.toLocaleDateString(lenguajeGB.lenguaje(), { month: 'long' })
let año = d.toLocaleDateString(lenguajeGB.lenguaje(), { year: 'numeric' })
let tiempo = d.toLocaleString('es-CO', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
let groups = Object.keys(await conn.groupFetchAllParticipating())
let usersTag = participants.map(u => conn.decodeJid(u.id))
let readMS = String.fromCharCode(8206).repeat(850)
await m.reply(lenguajeGB.smsChatGP1())
//for (let id of groups) {  
//let infoGP = lenguajeGB.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)  
//await conn.reply(id, infoGP + teks2, { mentions: usersTag }, { quoted: null })         
//}
for (let i = 0; i < groups.length; i++) {
const id = groups[i];
const infoGP = lenguajeGB.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)
const delay = i * 4000 //4 seg
setTimeout(async () => {
await conn.reply(id, infoGP + teks2, { mentions: usersTag }, { quoted: fkontak });
}, delay)}        
let totalGP = groups.length
await m.reply(lenguajeGB.smsChatGP3(totalGP))        
break
        
case isCommand14:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))        
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net')) 
await conn.reply(m.chat, lenguajeGB.smsBCMensaje2(), m)
let start = new Date().getTime()
let totalPri = 0
for (let user of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.reply(user, `${lenguajeGB.smsBCbot7()}\n\n` + teks3, null)
totalPri++
if (totalPri >= 500000) { 
break
}}   
let end = new Date().getTime() 
let time = Math.floor((end - start) / 1000)
if (time >= 60) {
let minutes = Math.floor(time / 60)
let seconds = time % 60
time = `${minutes} minutos y ${seconds} segundos`
} else {
time = `${time} segundos`
}
await m.reply(lenguajeGB.smsBCMensaje3(totalPri, time))        
break
        
case isCommand15:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))   
let cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks4 = text ? text : cc4.text 
let groups2 = Object.keys(await conn.groupFetchAllParticipating())
let chats2 = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
await conn.reply(m.chat, lenguajeGB.smsBCMensaje2(), m)
let start2 = new Date().getTime()
let usersTag2 = participants.map(u => conn.decodeJid(u.id))
let totalPri2 = 0
//for (let group of groups2) {
//await conn.reply(group, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, { mentions: usersTag2 }, { quoted: m })     
//}
for (let i = 0; i < groups2.length; i++) {
const group = groups2[i];
const delay = i * 4000; // 4 seg
setTimeout(async () => {
await conn.reply(group, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, { mentions: usersTag2 }, { quoted: fkontak });
}, delay)}
for (let user of chats2) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.reply(user, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, null)
totalPri2++
if (totalPri2 >= 500000) { 
break
}}  
let end2 = new Date().getTime()
let totalPrivate2 = chats2.length
let totalGroups2 = groups2.length
let total2 = totalPrivate2 + totalGroups2
let time2 = Math.floor((end2 - start2) / 1000)
if (time2 >= 60) {
let minutes = Math.floor(time2 / 60)
let seconds = time2 % 60
time2 = `${minutes} minutos y ${seconds} segundos`
} else {
time2 = `${time2} segundos`
} 
await m.reply(`${lenguajeGB.smsBCbot1()}
\`\`\`${lenguajeGB.smsBCbot2()} >> ${totalPrivate2}\`\`\`
\`\`\`${lenguajeGB.smsBCbot3()} >>   ${totalGroups2}\`\`\`
\`\`\`${lenguajeGB.smsBCbot4()} >>   ${total2}\`\`\`\n\n*${lenguajeGB.smsBCbot5()} ${time2}*\n${totalPri2 >= 500000 ? `\n*${lenguajeGB.smsBCbot6()}*` : ''}`)        
break
        
case isCommand16:
try{
await m.reply(lenguajeGB.smsreiniciar()) 
console.log(chalk.bold.magenta('❇️ RESETTING... ❇️'))
process.send('reset')
} catch (e) {
reportError(e)}  
break
        
}}
handler.command = /^(backup|respaldo|copia|ban(user|usuario|earuser|earusuario)|seradmin|autoadmin|tenerpoder|(set|cambiar|nueva|new)(bio|botbio|biobot)|(set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre)|(set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto)|update|actualizar|ups|banchat|banearchat|block|unblock|bloquear|desbloquear|restablecerdatos|borrardatos|deletedatauser|join|nuevogrupo|newgrupo|unete|bcbot|bcsubbot|bcsubot|(broadcast|bc)(group|grup|gc)|broadcastchats?|bcc(hats?)?|broadcastall|bc|reiniciar|restart)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
  
const delay = time => new Promise(res => setTimeout(res, time))

import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ° π»π° π²πΎπ½πππ°ππ΄π½Μπ° πππ΄ πππΈπ΄ππ°π πππ΄ ππ΄π½πΆπ° ππ ππ°π»π°, π΄πΉπ΄πΌπΏπ»πΎ ${usedPrefix + command} 12345678*`
let textfilter = text.toLowerCase()
let res = await fetch(global.API('https://anonyzoom.herokuapp.com', '/index.php', { pass: textfilter }))
let json = await res.json()
if (json.Join_URL == '') { throw '*[β] π·ππ±πΎ ππ½ π΄πππΎπ π°π» πΆπ΄π½π΄ππ°π π»π° ππ°π»π° ππΈππππ°π», πΏπΎπ π΅π°ππΎπ πΈπ½ππ΄π½ππ΄π»πΎ π³π΄ π½ππ΄ππΎ*'
} else {
let zoomA = `*[ πππππππππ ππ πππππ ππ ππππ ]*\n
*π»πΈπ½πΊ ππΎπΎπΌ:* ${json.Join_URL}
*π²πΎπ½πππ°ππ΄π½Μπ°:* ${json.Password}
*π³πππ°π²πΈπΎπ½ π³π΄ π»π° π»π»π°πΌπ°π³π°:* ${json.Duration} minutos`
await conn.reply(m.chat, zoomA, m)
}}
handler.command = /^(zoom|zoomgen|videollamada)$/i
export default handler

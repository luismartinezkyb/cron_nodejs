import cron from 'node-cron'
import { exec } from 'child_process'

//Respaldo en mongo
// cron.schedule('0 2 * * 0', () => {
//   exec('mongodump --out /ruta/del/respaldo', (error, stdout, stderr) => {
//     if (error) {
//       console.log(`Error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
// }, {
//   timezone: "America/Mexico_City"
// });

//CADA 3 segs
// cron.schedule('*/3 * * * * *', ()=>{
//     console.log('hey')
//     console.log('Hola');
// })

//Durante  del seg 1 al 5
// cron.schedule('1-5 * * * * *', ()=>{
//     console.log('hey')
//     console.log('Hola');
// })

//Durante cada 1, 2 y 3 segs de cada min
// cron.schedule('1,2,3 * * * * *', ()=>{
//     console.log('hey')
//     console.log('Hola');
// })

//## Ejemplos
///https://faztweb.com/contenido/cron-jobs-en-nodejs-con-node-cron

// 0 0 * * *: Este cron job se ejecutará a las 12:00 AM (medianoche) todos los días.
// 30 18 * * *: Este cron job se ejecutará a las 6:30 PM todos los días.
// 0 0 * * 0: Este cron job se ejecutará a las 12:00 AM (medianoche) todos los domingos.
// 0 0 1 * *: Este cron job se ejecutará a las 12:00 AM el primer día de cada mes.
// 0 0 1 1 *: Este cron job se ejecutará a las 12:00 AM el primer día de enero de cada año.
// */15 * * * *: Este cron job se ejecutará cada 15 minutos.
// 0 9-17 * * *: Este cron job se ejecutará en el minuto 0 de cada hora desde las 9 a.m. hasta las 5 p.m. (inclusive), todos los días.
// 0 0,12 * * *: Este cron job se ejecutará dos veces al día, a las 12:00 AM y a las 12:00 PM.


console.log('assas')
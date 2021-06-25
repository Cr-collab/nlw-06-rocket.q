const express = require('express');
/** O node é um carinha inteligente ele não precisa falar em que pasta 
 *  esta o express é so fazer a solicitação dele que ele tera  capacidade de 
 * encontrar. 
 */

const route = require('./route');
/** estou importando o arquivo route */

const path = require('path');

const server = express();
/** criamos uma constante server ,
 *  quem será o server o express iniciado ,
 *  o abre e fecha () significa que estamos iniando o brabo  express ,
 * qrue esta sendo gardado dentro  da  const serve 
 * */


 

server.use(express.static('public'));
/** aqui estamos falando que estamos utilizando nossos arquivo de css e imagens */

server.set('view engine', 'ejs');
/**  aqui estamos falando que nosso responsavel pela view engine sera o ejs*/

server.set('views', path.join(__dirname, 'views'));
/** o path ta pegando o caminho absoluto da pasta do projeto e
 *  o join ta juntanto com dirname
 *  que ta pegando a pasta onde esta a solicitação e juntando com views
 * C:\Users\cr745\OneDrive\Área de Trabalho\Projetos\rocket.q\src\views
 *  */


server.use(express.urlencoded({extended:true}));
/** middleware itermediado entre o formulario e controller */

server.use(route);
/** express usa o arquivo route */

server.listen(3000, ()=> console.log("RODANDO"));
/** o listen é uma funcionalidade que existe no express */





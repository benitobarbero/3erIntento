/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comienzaBarra(){
               setInterval(function contadorTiempo(){
              i=i-1;
              if (i > 0){
                $('.progress-bar').css('width', i+'%');
              } else {
                  if (i==0){
                      vidas--;
                      contadorVidas();
                      jugar();
                  }
                clearInterval(counterBack);
              }
 
            }, 100);
            } 
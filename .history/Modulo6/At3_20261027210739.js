/*
1. Crie uma função construtora RoboGantry que receba posicaoX e posicaoY. 
2. Adicione o método moverOrigem ao RoboGantry.prototype alterando posicaoX e posicaoY para 0. 
3. Crie duas instâncias (robo1 e robo2). 
4. Execute moverOrigem em ambas e confirme que o método é compartilhado via protótipo.
*/

function RoboGantry(posicaoX, posicaoY){
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
}

RoboGantry.prototype.moverOrigem = function(){
    return  this.posicaoX = 0,this.posicaoY = 0;
}

let robo1 = new.RoboGantry)
'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   var array = num.split("").reverse();
   for (let i = 0; i < array.length; i++) {
        decimal = decimal + array[i] * 2 ** i;
   }
   return decimal;
}

function DecimalABinario(num) {
   let Bin = [];
   while (num !== 0){
      Bin.unshift (num%2);
      num = Math.floor (num/2);
   }
   return Bin.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

const hydrate = (bebida) => {


    const numsStr = bebida.replace(/[^0-9]/g,''); //retira os numeros da frase.
    const arrayString = numsStr.toString(parseInt(numsStr)).split('');//transforma o numero em interios e depois em um array de string.
    const newArray = arrayString.map((i) => Number(i));//transforma os numeros strings em numeros do tipo number.

    const total = newArray.reduce((total, newArray) => total + newArray, 0);//com os numeros devidamente convertidos, ele soma item por item.
    
    if(numsStr === "1"){
       return `${total} copo de água`;
    }else{
      return `${total} copos de água`;
    }
 
  //  console.log(numsStr);
 
};

// hydrate('1 cerveja');

module.exports = hydrate;

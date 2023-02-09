

/*const Rec = document.createElement('button', 'div','h1');
console.log(Rec)
Rec.innerHTML = 'hopa';

document.body.appendChild(Rec);*/

class React {

    constructor() {
        this.state = {
            one: document.querySelector('.main_one'),
            text: '',
            year: null
        }

    }

    /*rreturn(e) {
        onst html = `${e}`
        console.log(e);
        this.state.one.insertAdjacentHTML('beforeend', html);

        c
    }*/
}
class main extends React{
    constructor(year,text) {
        super(text);
        this.state.text = text;
        this.state.year = year;


        this.showYear();
     }


    showYear() {
        console.log(this.state.text, "_", this.state.year);
        this.state.year = this.state.year + 2000;
        console.log(this.state.year);
        const html = `<h1>${this.state.text}</h1>`
        this.state.one.insertAdjacentHTML('afterend',html)

    }
    change() {

    }

}

new React();

 const mai = new main(1900,'this is data');

/*
const main = document.querySelector('.main_one');

const data = `<img src="../../async/img/img.png">`;



window.addEventListener("load", () => {
    main.insertAdjacentHTML('afterend',data);
});

*/

/*
console.log(window.location.href = 'load');
if(window.location.href === 'load') {
    console.log('hello');
}*/


/*const ar = [1,1,3,1,2,1,3,3,3,3]/!*[10, 20, 20, 10, 10, 30, 50, 10, 20];*!/
function stochkMerchant(ar) {
    const same = [];
    let last_num = 0;
    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    const arrs = removeDuplicates(ar);
    arrs.map(function (e, index) {
        same.push(ar.sort().filter(e => e === arrs[index]));
    });

    const sum = same.map(e => e).filter(e => e.length % 2 === 0 ? e : e.splice(e.length - 1));

    let result = 0;

    const answer = function () {
        last_num++;
        result += last_num;
        return sum[last_num].length > last_num ? answer() : sum[last_num].length;
    }
    answer();
    return result;
}
console.log(stochkMerchant(ar));*/
/*
console.log(sum[0].length /2);
*/



/*
const com = arr.sort().filter(e => e === 10);
*/




/* const k =arr.filter(function(e){
    return e > 10
}).flatMap(e => e).reduce(function(e,v,l){
    return e+ v;


});*/
/*while(length >i) {
    arr.forEach(function (num) {
        let ret = arr.filter(function (e) {
            if (e === arr[i]) {
                return e;
            }
        });
        i++
        same.push(ret);
    });
}

const compereFunctions = function(a,b) {
    let i =0;
    let truth = 0;
    if(a.length !== b.length) {
        return false;
    }else {
        let result = false;
        const sum = function () {
            if (a[i] === b[i]) {
                truth++;
                if(truth === a.length){
                    result = true
                }
            } else {
                return false;
            }
            i++;
            return i < a.length ? sum() : i;
        }
        sum();
        return result;
    }
}
console.log(same);*/
/*
let iUp =0;
function removeDuplicates(arr) {
    return arr.filter((item,index) =>  arr.indexOf(item) === index);
}
console.log(arr);
const arrOne = removeDuplicates(arr);

    arr.map(function(e){
        if(arr[0] === 10){
            console.log('hi');


        }
        iUp++;
        arr.splice(1,1);
        console.log(arr);


    });

*/



/* switch (vals) {
     case arr[iUp] :

         break;
     /!*case arrOne[1] :
         console.log(20);
         break;*!/
     /!* case arrOne[2] :
          console.log(arrOne[2]);
          break;
      case arrOne[3] :
          console.log(arrOne[3]);
          break;
      case arrOne[4] :
          console.log(arrOne[4]);
          break;*!/
 }*/







/*
console.log(compereFunctions(a,b));
*/


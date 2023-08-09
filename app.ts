const element1=document.getElementById('num1')as HTMLInputElement;
const element2=document.getElementById('num2')as HTMLInputElement;
const button=document.querySelector('button')!;
const stringar:string[]=[];
const numar: Array<number>=[];

function add(num1: number | string,num2: number | string){
    if(typeof num1==='number'&&typeof num2==='number'){
        return num1+num2;

    }
    if(typeof num1==='string'&&typeof num2==='string'){
        return num1+''+num2;

    }
    return +num1+ +num2;
}


function printobje(obj :{val:number;timestamp: Date}){
    console.log(obj.val);
}

button.addEventListener('click',()=>{
    const num1=element1.value;
    const num2=element2.value;
    const numres=add(+num1,+num2);
    numar.push(numres as number);
    const stringres=add(num1,num2);
    stringar.push(stringres as string);
    printobje({val:numres as number,timestamp:new Date()});
    console.log(numres,stringres);   
    
});
const promise=new Promise<string>((resolve,result)=>{
    setTimeout(()=>{
        resolve('it worked');
    },1000);
});
promise.then((result)=>{
    console.log(result.split(''));
})


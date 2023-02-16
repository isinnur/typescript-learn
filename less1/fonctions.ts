function getAverage(a:number,b:number,c?:number):string{
    let total =a+b;
    let count =2;

    if(typepf c!=='undefined'){
        total +=c;
        count++;
    }
    const result = (a+b+c)/3;
    return 'result: '+result;
}

getAverage(10,20,30);
getAverage(5,10);
(()=>{
    let myDYnamicVar: any;
    myDYnamicVar= 100;
    myDYnamicVar = null;
    myDYnamicVar= {};
    myDYnamicVar= ' ';
    
    myDYnamicVar = 'Hi';
    const rta = (myDYnamicVar as string).toLowerCase();
    console.log(rta);

    myDYnamicVar = 42141;
    const rta2 = (<number>myDYnamicVar).toFixed();
    console.log(rta2);
})();
(()=>{
    let userID:string | number;
    userID = 2131;
    userID=7787;
    function greeting(myText: string | number){
        if(typeof myText==='string'){
            console.log(`string ${myText.toLowerCase()}`);
        }else{
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Luis');
    greeting(21414);
})();
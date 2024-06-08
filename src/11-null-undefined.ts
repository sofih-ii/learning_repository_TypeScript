(()=>{
    let myNull: null = null;
    let myUndefined:undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined;
    myString = 'aaaa';

    function greeting(name: string | null){
        let hello = 'hi';
        if(name){
            hello+= 'name';
        }else{
            hello +='nobody'
        }
        console.log(hello);
    }
    greeting('Nicolas');
    greeting(null);
    
    function greetingV2(name: string | null){
        let hel = 'hello';
        hel += name?.toLowerCase() || 'nobody';
        console.log(hel);
    }
    

    greetingV2('Nicolas');
    greetingV2(null);
})();
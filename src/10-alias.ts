(()=>{
    type UserID = string | number |boolean;
    let userID: UserID;

    function greeting(userID: UserID){
        if(typeof userID==='string'){
            console.log(`string ${userID.toLowerCase()}`);
        }
    }

    //Literal types 
    type Sizes = 'M'|'L'|'S'|'XS'|'XL'
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'S';
    shirtSize = 'XS';
    shirtSize = 'XL';
    
    function clothes(userID: UserID, shirt:Sizes){
        if(typeof userID==='string'){
            console.log(`string ${userID.toLowerCase()}`);
        }
    }
    clothes(111, 'M');
    clothes('234', 'S');
})();
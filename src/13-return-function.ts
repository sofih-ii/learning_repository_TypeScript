(()=>{
    const calcTotal=(prices: number[]): string/*number*/=>{
        let total = 0;
        prices.forEach((item)=>{
            total+=item;
        });
        return total.toString();
    }

    const printTotal =(prices: number[]):void=>{
        const rta = calcTotal(prices);
        console.log(`el total es: ${rta}`)
    };
    const rta = printTotal([1, 2, 3,4,1]);
})();
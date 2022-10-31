abstract class AlcoholicPercentage{
    abstract percentage():number;
}

class Beer extends AlcoholicPercentage{
    percentage(): number {
        return 5;
    }
}

class Wine extends AlcoholicPercentage{
    percentage(): number {
        return 18;
    }
}

class Creator{
    public wine:number = 1;
    public beer:number = 2;

    public generator(type:number){
        switch (type) {
            case 1: return new Wine();                
            case 2: return new Beer();            
            default: return new Wine();
        }
    }
}

(function(){
    const objCreator = new Creator();
    const objAlcohilicPercentage:AlcoholicPercentage = objCreator.generator(objCreator.beer);
    console.log(objAlcohilicPercentage.percentage())
})();
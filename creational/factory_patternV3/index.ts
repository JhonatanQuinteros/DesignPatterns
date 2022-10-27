abstract class Hero{
    protected _maxHealth:number = 100;
    protected _maxShield:number = 0;
    protected _maxMana:number = 100;
    protected _totalMana:number = 100;
    protected _totalHealth:number = 100;
    protected _totalShield:number = 0;
    protected _weakness:number = 0;
    protected _manabenefit:number = 0;

    abstract info():string; 
    abstract castSpell(quantityOfMana:number):string;
    abstract incomingDamage(quantityOfDamage:number):string;
    abstract meditationPhase(meditationTime:number):string;
    abstract checkGameOver():void;

}

class MageHero extends Hero{

    constructor(){
        super();
        this._maxHealth= 100;
        this._maxShield= 20;
        this._maxMana = 300;
        this._totalHealth=100;
        this._totalShield=20;
        this._totalMana=300;
        this._weakness=30;
        this._manabenefit=50;        
    }

    info() {        
        return "Type: Mage"
    }
    checkGameOver(){
        if(this._maxHealth<1){
            console.log("Game Over");
            process.exit(1);
        }
    }
    private setHeal(healToRestore:number) {
        this._totalHealth += healToRestore; 
        if(this._totalHealth > this._maxHealth) this._totalHealth=this._maxHealth;
    }
    private setMana(manaToRestore: number) {
        this._totalMana += manaToRestore; 
        if(this._totalMana > this._maxMana) this._totalMana=this._maxMana;
    }
    meditationPhase(meditationTime:number) {
        const amountOfHealRestored = (this._totalHealth * 0.1) * meditationTime;
        const amountOfManaRestored = (this._totalMana * 0.3) * meditationTime;
        this.setHeal(amountOfHealRestored);
        this.setMana(amountOfManaRestored);
        return `total heal after meditation : ${this._totalHealth}`;
    }
    castSpell(quantityOfMana:number) {
        if(this._totalMana - quantityOfMana < 0) return "there is no enough mana";
        this._totalMana -= quantityOfMana
        return "spell casted successfully"
    }
    incomingDamage(quantityOfDamage:number) {        
        if(this._totalShield > 0){
            if(this._totalShield > quantityOfDamage){
                this._totalShield -= quantityOfDamage;
                this.checkGameOver();
                return "damage applied";
            }            
            const damageLessShield = quantityOfDamage - this._totalShield;
            this._totalShield = 0;
            this._totalHealth -= damageLessShield;
            this.checkGameOver();
            return "damage applied";
        }
        this._totalHealth -= quantityOfDamage;
        this.checkGameOver();
        return "damage applied";
    }
}

class WarriorHero extends Hero{
    constructor(){
        super();
        this._maxHealth= 100;
        this._maxShield= 20;
        this._maxMana = 300;
        this._totalHealth=100;
        this._totalShield=20;
        this._totalMana=300;
        this._weakness=30;
        this._manabenefit=50;        
    }

    info() {        
        return "Type: Warrior"
    }
    castSpell(quantityOfMana: number): string {
        throw new Error("Method not implemented.");
    }
    incomingDamage(quantityOfDamage: number): string {
        throw new Error("Method not implemented.");
    }
    meditationPhase(meditationTime: number): string {
        throw new Error("Method not implemented.");
    }
    checkGameOver(): void {
        throw new Error("Method not implemented.");
    }
}

type Heroes = "Mage" | "Warrior"

class FactoryHeroes{
    static generateHero(type: Heroes){

        switch (type) {
            case "Mage" : return new MageHero();
            case "Warrior" : return new WarriorHero();
            default:
                break;
        }
    }
}

/*Client Implementation */

/* const x = FactoryHeroes.generateHero("Warrior");
console.log(x?.info());
console.log(x?.incomingDamage(20)); //throws an error */

const x = FactoryHeroes.generateHero("Mage");
console.log(x?.info());
console.log(x?.castSpell(120));
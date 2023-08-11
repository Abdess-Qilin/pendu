import validator from "validator"

class Words {
    #name
    #categorie

    constructor(object){
        this.name = object.name;
        this.categorie = object.categorie;
    }

    get name(){
        return this.#name
    }

    get categorie(){
        return this.#categorie
    }

    set name (value){
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Le mot doit être une chaîne de caractère non nulle")
        }
        this.#name = value
    }

    set categorie (value){
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("La categorie doit être une chaîne de caractère non nulle")
        }
        this.#categorie = value
    }

}

export default Words;
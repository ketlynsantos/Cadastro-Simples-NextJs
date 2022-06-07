export default class Client {

    //Atributos privados em javascript, usa # inves de private
    #id: string
    #name: string
    #age: number
    #email: string

    constructor(name: string, age: number, email: string, id: string = null) {
        this.#name = name
        this.#age = age
        this.#email = email
        this.#id = id
    }

    static empty() { return new Client('', null, '') }

    get id() { return this.#id }

    get name() { return this.#name }

    get age() { return this.#age }

    get email() { return this.#email }
}
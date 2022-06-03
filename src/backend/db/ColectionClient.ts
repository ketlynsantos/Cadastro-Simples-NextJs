import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository"
import { dataBase } from '../config'
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc
} from 'firebase/firestore'

export default class ColectionClient implements ClientRepository {

    //conversor dentro do firebase (# - privado)
    #toConvert = {
        toFirestore: (client: Client) => {
            return {
                name: client.name,
                age: client.age,
                email: client.email
            }
        },
        fromFirestore: (
            snapshot: firestore.QueryDocumentSnapshot, 
            options: firestore.SnapshotOptions
        ) =>  {
            //Retornar um objeto do tipo client
            const data = snapshot?.data(options)
            return new Client(data.name, data.age, data.email, snapshot?.id)
        },
    }

    #colectionClient = collection(dataBase, 'clients').withConverter(this.#toConvert)
    
    async save(client: Client): Promise<Client> {
        if(client?.id) {
            //Alterar dados do cliente
            await setDoc(
                doc(dataBase, 'clients', client.id).withConverter(this.#toConvert),client
            )
            return client
        } else {
            // Salva um novo cliente
            //Referencia de um documento
            const docRef = await addDoc(this.#colectionClient, client)
            const doc = await getDoc(docRef)
            //Retorna o cliente recebido
            return doc.data()
        }
        
    }

    async delete(client: Client): Promise<void> {
        // Dentro da coleção de clientes, da pra acessar um especifico, que é um documento
        // a partir do id dele
        return await deleteDoc(doc(dataBase, 'clients', client.id))
    }

    async allClients(): Promise<Client[]> {
        const clientsSnapshot = await getDocs(this.#colectionClient)
        const clientsList = clientsSnapshot.docs.map(doc => doc.data()) ?? []
        return clientsList
    }
}
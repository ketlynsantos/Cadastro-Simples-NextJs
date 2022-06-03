import Client from "./Client";

// Métodos que irão se comunicar com o firebase
export default interface ClientRepository {
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    allClients(): Promise<Client[]>
}
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const blogs = [
            { id: 11, title: 'Titley One' },
            { id: 12, title: 'Dodiddly Tittly Two' },
            { id: 13, title: 'Stone Cold Stone Creamery' },
            { id: 14, title: 'The Rock' },
            { id: 15, title: 'The Undertaker Impersonator' },
            { id: 16, title: 'Jane' },
            { id: 17, title: 'Dodiddly Tittly SevenTeen' },
            { id: 18, title: 'Dodiddly Tittly EightTeen' },
            { id: 19, title: 'Dodiddly Tittly NineTeen' },
            { id: 20, title: 'Dodiddly Tittly Twenty' }
        ];
        return { blogs };
    }
}
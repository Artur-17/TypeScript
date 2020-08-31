import { Request, Response } from 'express';
import createUser from './services/CreateUser';



export function helloWorld(request : Request, response: Response) {
    const user = createUser({
        name: 'Artur',
        email: 'arturandrade@gmail.com',
        password: 'Senha123',
        techs: [
            'nodeJs', 
            'React', 
            'JavaScript',
            { title: 'JavaScript', experience: 100 }
        ],
    });

    console.log(user.email);

    return response.json( { message: 'HelloWorld' });
}
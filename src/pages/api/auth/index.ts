import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Tom'},
        { id: 2, name: 'Nonato'},
        { id: 3, name: 'Junior'},
    ]
    return response.json(users)
}
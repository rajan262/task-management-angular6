import { User } from './user.model';

export class Team {
    'id': number;
    'name': string;
    'description': string;
    'members': User[];
}
import { Team } from './team.model';

export class Task {
    'id': Number;
    'team': any;
    "assigned_to": {
        "id": Number,
        "email": string,
        "full_name": string
    };
    'name': string;
    'description': string;
    'status': Number;
    'deadline': string;
    'created': string;
}
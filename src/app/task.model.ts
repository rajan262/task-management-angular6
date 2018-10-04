export class Task {
    'id': Number;
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
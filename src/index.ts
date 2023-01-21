import { User } from './models/User';

const user = User.build({ id: 1, name: 'Lola', age: 1 });


user.on('save', () => console.log(user));

user.save();

user.fetch();

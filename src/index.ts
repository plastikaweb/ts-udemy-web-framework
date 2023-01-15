import { User } from './models/User';

const user = new User({name: 'Carlos', age: 32});
user.set({ age: 55 });

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('save', () => {
  console.log('save');
});

user.trigger('change');

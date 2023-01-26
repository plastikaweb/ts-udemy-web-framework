import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.build({
  name: 'NAME', age: 20
})

const userForm = new UserForm(document.getElementById('root') as Element, user);
userForm.render();

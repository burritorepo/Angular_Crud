import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';

export const USERS_COMPONENTS = [
  UsersComponent,
  CreateComponent,
  DetailComponent,
  EditComponent,
  FormComponent,
  CardComponent
]

// Para mapear en las rutas
export * from './users/users.component'
export * from './create/create.component'
export * from './detail/detail.component'
export * from './edit/edit.component'
export * from './form/form.component'
export * from './card/card.component'
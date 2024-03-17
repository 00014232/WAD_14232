import { Routes } from '@angular/router';
import { ListLocksComponent } from './pages/list-locks/list-locks.component';
import { ListKeysComponent } from './pages/list-keys/list-keys.component';
import { CreateLockComponent } from './pages/create-lock/create-lock.component';
import { CreateKeyComponent } from './pages/create-key/create-key.component';
import { EditLockComponent } from './pages/edit-lock/edit-lock.component';
import { EditKeyComponent } from './pages/edit-key/edit-key.component';
import { DeleteLockComponent } from './pages/delete-lock/delete-lock.component';
import { DeleteKeyComponent } from './pages/delete-key/delete-key.component';

export const routes: Routes = [
    {path: "locks", component:ListLocksComponent},
    {path: "keys", component:ListKeysComponent},
    {path: "create-lock", component:CreateLockComponent},
    {path: "create-key", component:CreateKeyComponent},
    {path: "edit-lock/:id", component:EditLockComponent},
    {path: "edit-key/:id", component:EditKeyComponent},
    {path: "delete-lock/:id", component:DeleteLockComponent},
    {path: "delete-key/:id", component:DeleteKeyComponent}
];

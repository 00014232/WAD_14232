import { Component, inject } from '@angular/core';
import { KeystoreService } from '../../services/keystore.service';
import { Router } from '@angular/router';
import { LockModel } from '../../models/lock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-lock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-lock.component.html',
  styleUrl: './create-lock.component.css'
})
export class CreateLockComponent {
  service = inject(KeystoreService);
  router = inject(Router);

  lock: LockModel = {
    id: 0,
    code: ''
  }

  createLock(){
    this.service.createLock(this.lock)
    .subscribe(
      response => {
        this.router.navigate(['/locks']);
      }
    )
  }
}

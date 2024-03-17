import { Component, OnInit, inject } from '@angular/core';
import { KeyModel } from '../../models/key';
import { Router } from '@angular/router';
import { KeystoreService } from '../../services/keystore.service';
import { LockModel } from '../../models/lock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-key',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-key.component.html',
  styleUrl: './create-key.component.css'
})
export class CreateKeyComponent implements OnInit {
  service = inject(KeystoreService);
  router = inject(Router);

  key: KeyModel = {
    id: 0,
    code: '',
    quantity: 0,
    lock: {
      id: 0,
      code: ''
    }
  }

  locks: LockModel[] = [];

  createKey(){
    this.service.createKey(this.key)
    .subscribe(
      response => {
        this.router.navigate(['/keys']);
      }
    )
  }

  ngOnInit(): void {
    this.service.getLocks().subscribe(
      result => {
        this.locks = result;
      }
    )
  }
}

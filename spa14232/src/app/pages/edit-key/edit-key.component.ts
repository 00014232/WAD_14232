import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyModel } from '../../models/key';
import { LockModel } from '../../models/lock';
import { KeystoreService } from '../../services/keystore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-key',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-key.component.html',
  styleUrl: './edit-key.component.css'
})
export class EditKeyComponent implements OnInit {
  service = inject(KeystoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = 0;

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

  editKey(key: KeyModel){
    this.service.editKey(this.id, key)
    .subscribe(
      response => {
        this.router.navigate(['/keys']);
      }
    )
  }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    this.id = idFromRoute ? + idFromRoute : 0; 

    this.service.getLocks().subscribe(
      result => {
        this.locks = result;
      }
    )

    this.service.getKey(this.id).subscribe(
      result => {
        this.key = result;
      }
    )
  }
}

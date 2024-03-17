import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LockModel } from '../../models/lock';
import { KeystoreService } from '../../services/keystore.service';

@Component({
  selector: 'app-edit-lock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-lock.component.html',
  styleUrl: './edit-lock.component.css'
})
export class EditLockComponent implements OnInit {
  service = inject(KeystoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  id = 0;

  lock: LockModel = {
    id: 0,
    code: ''
  }

  editLock(lock: LockModel){
    this.service.editLock(this.id, this.lock)
    .subscribe(
      response => {
        this.router.navigate(['/locks']);
      }
    )
  }
  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    this.id = idFromRoute ? + idFromRoute : 0; 

    this.service.getLock(this.id).subscribe(
      result => {
        this.lock = result;
      } 
    )
  }

}

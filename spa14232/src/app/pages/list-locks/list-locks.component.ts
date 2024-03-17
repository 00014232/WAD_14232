import { Component, OnInit, inject } from '@angular/core';
import { KeystoreService } from '../../services/keystore.service';
import { Router, RouterLink } from '@angular/router';
import { LockModel } from '../../models/lock';

@Component({
  selector: 'app-list-locks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-locks.component.html',
  styleUrl: './list-locks.component.css'
})
export class ListLocksComponent implements OnInit {
  service = inject(KeystoreService);
  router = inject(Router);
  locks: LockModel[] = [];

  ngOnInit(): void {
    this.service.getLocks().subscribe(
      result => {
        this.locks = result
      }
    );
  }
}

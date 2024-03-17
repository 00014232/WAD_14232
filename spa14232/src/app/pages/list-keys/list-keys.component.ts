import { Component, OnInit, inject } from '@angular/core';
import { KeyModel } from '../../models/key';
import { Router, RouterLink } from '@angular/router';
import { KeystoreService } from '../../services/keystore.service';

@Component({
  selector: 'app-list-keys',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-keys.component.html',
  styleUrl: './list-keys.component.css'
})
export class ListKeysComponent implements OnInit {
  service = inject(KeystoreService);
  router = inject(Router);
  keys: KeyModel[] = [];

  ngOnInit(): void {
    this.service.getKeys().subscribe(
      result => {
        this.keys = result
      }
    );
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { KeystoreService } from '../../services/keystore.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-key',
  standalone: true,
  imports: [],
  templateUrl: './delete-key.component.html',
  styleUrl: './delete-key.component.css'
})
export class DeleteKeyComponent implements OnInit{
  service = inject(KeystoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = 0;

  delete(): void{
    this.service.deleteKey(this.id).subscribe(
      result => {
        this.router.navigate(['/keys']);
      }
    )
  }

  cancel(): void{
    this.router.navigate(['/keys']);
  }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    this.id = idFromRoute ? + idFromRoute : 0; 
  }
}

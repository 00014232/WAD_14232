import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KeystoreService } from '../../services/keystore.service';

@Component({
  selector: 'app-delete-lock',
  standalone: true,
  imports: [],
  templateUrl: './delete-lock.component.html',
  styleUrl: './delete-lock.component.css'
})
export class DeleteLockComponent {
  service = inject(KeystoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = 0;

  delete(): void{
    this.service.deleteLock(this.id).subscribe(
      result => {
        this.router.navigate(['/locks']);
      }
    )
  }

  cancel(): void{
    this.router.navigate(['/locks']);
  }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    this.id = idFromRoute ? + idFromRoute : 0; 
  }
}

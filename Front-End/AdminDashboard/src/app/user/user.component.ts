import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(private UService: UsersService) {}
  users: any;

  ngOnInit() {
    console.log('ass');

    this.UService.getStats().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

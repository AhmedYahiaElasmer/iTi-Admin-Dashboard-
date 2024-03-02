import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-catogery-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  providers: [UsersService],
  templateUrl: './add-catogery-form.component.html',
  styleUrl: './add-catogery-form.component.css',
})
export class AddCatogeryFormComponent {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  consle() {
    console.log('zeko');
  }
  vaildtionCategory = new FormGroup({
    Category: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(3),
    ]),
    file: new FormControl('', [Validators.required]),
  });
  get category() {
    return this.vaildtionCategory.controls['Category'];
  }
  addCategory() {
    this.consle();
    console.log(this.vaildtionCategory);
    console.log(this.category.value);
    if (this.vaildtionCategory.status === 'VALID') {
      console.log('vaild');
      //////////////////////////////////////////
      const formData = new FormData();
      const nameCat: any = this.vaildtionCategory.value.Category;
      const imgCat: any = this.vaildtionCategory.value.file;
      formData.append('name', nameCat);
      formData.append('catImg', imgCat);
      // formData.append(
      //   'catImg',
      //   'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
      // );
      console.log('nameCat', nameCat);
      console.log(formData);
      this.UService.addNewCategory(formData).subscribe({
        complete: () => (
          alert('add successfully'),
          // this.router.navigate([''], {
          //   relativeTo: this.route,
          // })
          location.reload()
        ),
      });
    }
  }
}

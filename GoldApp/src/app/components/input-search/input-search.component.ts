import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent implements OnInit {
  filterForm: FormGroup;
  @Output() messageToParent = new EventEmitter<Object>();
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.filterForm = this.formBuilder.group({
      search: ['', [Validators.pattern('^[a-zA-Z]+(?: [a-zA-Z]+)*$')]],
      limit: []
    })
  }
  sendMessage() {
    const objectFilter = {
      nameGif: this.filterForm.controls["search"].value === "" ? 'ALL'
        : this.filterForm.controls["search"].value,
      limitPage: this.filterForm.controls["limit"].value
    }
    this.messageToParent.emit(objectFilter);
  }

}

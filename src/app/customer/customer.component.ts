import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}
  // 생성자를 통해 의존성 주입이 이루어짐
 
  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }
  // rest server 로부터 고객의 정보를 가져옴
 
  ngOnInit(): void {
     this.getCustomers();
  }
  // 생성자가 불리고 난 뒤 불림 -> getCustomers() 호출
 
  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
  // 이벤트 handler(사용자를 선택 했을 경우 onSelect 함수 호출)

}

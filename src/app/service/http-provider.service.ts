import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

//var apiUrl = "https://localhost:44370/";

var apiUrl = "http://localhost:3000";

var httpLink = {
  getAllEmployee: apiUrl + "/api/select",
  deleteEmployeeById: apiUrl + "/api/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/api/getEmployeeDetailById",
  saveEmployee: apiUrl + "/api/insert",
  updateEmployeeById: apiUrl + "/api/updateEmployeeById",
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }

  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }

  public updateEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.updateEmployeeById, model);
  }
  
}

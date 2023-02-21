import { Injectable ,Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginService } from './service/user-login.service';

@Injectable()
export class AthInterceptor implements HttpInterceptor {
  private readonly TOKEN_NAME='token';
  constructor(private injector:Injector) {}
  get token(){
    return  localStorage.getItem(this.TOKEN_NAME);


  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService=this.injector.get(UserLoginService)
    const localToken = localStorage.getItem('token');
    console.log(localToken,'localToken');
    
    request = request.clone({
      // headers: request.headers.set('Authorization', 'bearer' + localToken),
      setHeaders:{
        Autherization:`Bearer ${authService.getToken()}`
      }
    });
    return next.handle(request);
  }
}

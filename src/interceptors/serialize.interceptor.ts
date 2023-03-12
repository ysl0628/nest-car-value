import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';

// UseInterceptors decorator 太冗長了，自己寫一個 decorator
// decorator 是以 function 建立
export function Serialize<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    // Run something before a request is handled
    // by the request handler

    return next.handle().pipe(
      map((data: T) => {
        // Run something before the response is sent out
        return plainToInstance(this.dto, data, {
          // 為了防止 UserDto 中有其他非定義於 data 中的屬性一起被輸出至 response 中
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

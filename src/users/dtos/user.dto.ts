import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}

// 此 DTO 不需做任何驗證，因為不會直接以這個 DTO 輸出到 response
// 只作為 serialization interceptor 的型別確認
// 加上 Expose decorator 來表示需將指定的 props 輸出到 response

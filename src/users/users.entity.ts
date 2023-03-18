import { Report } from 'src/reports/reports.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// 建立 user table
@Entity()
export class User {
  // 建立 table 需要 primary key
  // 创建一个主列，该值将使用自动增量值自动生成
  @PrimaryGeneratedColumn()
  id: number;

  // @Column為對應的資料庫欄位，或是傳入Column Options物件
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
}

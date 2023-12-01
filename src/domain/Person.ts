import { Company } from './Company';

export interface Person {
  id: string;
  name: string;
  phones: string[];
  email: string;
  address: string;
  city: string;
  province: string;
  company: Company;
}

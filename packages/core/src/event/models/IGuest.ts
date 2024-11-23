export default interface IGuest {
  id: string;
  name: string;
  email: string;
  confirmed: boolean;
  hasCompany: boolean;
  quantityCompany: number;
}

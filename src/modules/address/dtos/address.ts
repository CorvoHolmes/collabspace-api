interface IAddress {
  id: string;
  user_id: string;
  cep: string | null;
  country: string | null;
  province: string | null;
  city: string | null;
  street: string | null;
}

export { IAddress };

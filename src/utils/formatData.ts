function TelephoneFormat(telephone: string | null): string | null {
  return telephone
    ? telephone
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .replaceAll("-", "")
    : null;
}

export { TelephoneFormat };

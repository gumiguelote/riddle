"use server";

export async function validatePassword(input: string): Promise<boolean> {
  // Normalizar: remover espaços extras e converter para minúsculas
  const normalized = input.trim().toLowerCase();

  // Palavras-chave aceitas
  const validPasswords = ["whisky", "whiskey", "uísque", "uisque"];

  return validPasswords.includes(normalized);
}

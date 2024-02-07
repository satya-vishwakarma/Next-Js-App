
/**
 * Genrate rendom User Name
 * 
 * @returns String
 */

export const randomUserName = (): string => {
  return Math.random().toString(36).substr(2, 8);
};

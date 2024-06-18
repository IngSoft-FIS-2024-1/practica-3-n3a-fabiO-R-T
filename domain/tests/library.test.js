import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });

  it('throw an error when setting an empty name', () => {
    expect(() => myLibrary.setName('')).toThrow();
  });

  it('return the total words of books', () => {
    myLibrary.addBook('Estoicismo Cotidiano', 'Ryan Holiday', 365, 2000);
    expect(myLibrary.totalWords()).toBe(2000);
  });

  it('return the total words of books', () => {
    myLibrary.addBook('Diario para estoicos', 'Ryan Holiday', 365);
    expect(myLibrary.totalWords()).toBe(0);
  });

  it('throw an error when setting an invalid words', () => {
    expect(() => myLibrary.addBook('Diario para estoicos', 'Ryan Holiday', 478, '2982')).toThrow();
    expect(() => myLibrary.addBook('Diario para estoicos', 'Ryan Holiday', 478, 'wfawdwd')).toThrow();
  });

});
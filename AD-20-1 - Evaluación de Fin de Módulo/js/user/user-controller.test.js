const UserController = require('./user-controller');
const User = require('./user');

describe('Pruebas para la clase UserController', () => {
  
  test('agregar un usuario a la lista', () => {
    let controller = new UserController();
    let user = new User(1, "Luis", "luis@mail.com");
    controller.add(user);
    expect(controller.getUsers()).toContain(user);
  });

  test('remover un usuario que no se encuentra en la lista no debe alterar los usuarios existentes', () => {
    let controller = new UserController();
    let user = new User(1, "Luis", "luis@mail.com");
    let userNoRegistrado = new User(2, "Carlos", "carlos@mail.com");
    
    controller.add(user);
    controller.remove(userNoRegistrado); 
    
    expect(controller.getUsers()).toContain(user);
    expect(controller.getUsers()).not.toContain(userNoRegistrado);
  });

  test('findByEmail debe encontrar y retornar el usuario correcto si existe', () => {
    let controller = new UserController();
    let user = new User(1, "Luis", "luis@mail.com");
    controller.add(user);
    
    expect(controller.findByEmail("luis@mail.com")).toEqual(user);
  });

  test('findByEmail debe retornar undefined si el correo no está registrado', () => {
    let controller = new UserController();
    expect(controller.findByEmail("correo_falso@mail.com")).toBeUndefined();
  });

  test('findById debe encontrar y retornar el usuario correcto por su ID', () => {
    let controller = new UserController();
    let user = new User(1, "Luis", "luis@mail.com");
    controller.add(user);
    
    expect(controller.findById(1)).toEqual(user);
  });

  test('findById debe retornar undefined si el ID no existe en la lista', () => {
    let controller = new UserController();
    expect(controller.findById(999)).toBeUndefined();
  });
});
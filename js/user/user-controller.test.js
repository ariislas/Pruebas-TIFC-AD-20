const UserController = require("./user-controller");
const User = require("./user");

//cambiamos const userController = new UserController(); por beforeEach para evitar que las pruebas compartan la misma instancia 
let userController;

beforeEach(() => {
    userController = new UserController();
});

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('debe encontrar un usuario por su correo', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findByEmail("santiago@generation.org")).toBe(user);
});

test('debe devolver undefined si el correo no existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findByEmail("otro@generation.org")).toBeUndefined();
});

test('debe encontrar un usuario por su ID', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findById(1234)).toBe(user);
});

test('debe devolver undefined si el ID no existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findById(5678)).toBeUndefined();
});



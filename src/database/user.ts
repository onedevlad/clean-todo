export class UserRepository {
  public async getUserById(id: string) {
    // ORM access code
    return {
      id,
      email: "test@gmail.com",
      firstName: "John",
      lastName: "Doe",
      password: "secret",
      createdAt: new Date(),
    }
  }
}

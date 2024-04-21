import { GetSingleUserUseCase, UserDataAccess, UserDataPresenter } from "src/new/use-cases/getSingleUser";

type UserRepository = UserDataAccess
type UserPresenter = UserDataPresenter

export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userPresenter: UserPresenter
  ) {}

  public getUser = async (id: string) => {
    const useCase = new GetSingleUserUseCase(this.userRepository, this.userPresenter);

    await useCase.execute(id)
  }
}

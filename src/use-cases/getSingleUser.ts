export interface UserById {
  id: string
  email: string
}

export interface UserDataAccess {
  getUserById(id: string): Promise<UserById | null>
}

export interface UserDataPresenter {
  present(user: UserById): void
}

export class GetSingleUserUseCase {
  constructor(
    private userDataAccess: UserDataAccess,
    private userDataPresenter: UserDataPresenter
  ) {}

  public execute = async (id: string): Promise<void> => {
    const user = await this.userDataAccess.getUserById(id)

    if (!user) {
      throw new Error("Requested user does not exist!")
    }

    this.userDataPresenter.present(user)
  }
}

import { UserById } from "src/new/use-cases/getSingleUser";

interface UserViewModel {
  id: string
  email: string
}

export interface ExternalAdapter {
  adapt(user: UserViewModel): void
}

export class UserPresenter {
  constructor(private externalAdapter: ExternalAdapter) {}

  present (user: UserById) {
    const userViewModel: UserViewModel = {
      id: user.id,
      email: user.email,
    }

    this.externalAdapter.adapt(userViewModel)
  }
}

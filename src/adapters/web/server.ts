import express from "express"
import { UserController } from "../../controllers/users"
import { UserRepository } from "../../database/user";
import { ExternalAdapter, UserPresenter } from "../../presenters/users";

const app = express()

app.get("/users", (req, res) => {
  const userRepository = new UserRepository()
  const adapter: ExternalAdapter = {
    adapt: (user) => res.status(200).json(user)
  }

  const userPresenter = new UserPresenter(adapter)
  const controller = new UserController(userRepository, userPresenter)

  try {
    controller.getUser(req.params.id)
  } catch(e: unknown) {
    res.sendStatus(500)
  }
})

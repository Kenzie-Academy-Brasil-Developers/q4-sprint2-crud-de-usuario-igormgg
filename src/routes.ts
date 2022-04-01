import { Router } from "express";
import { createUserController, deleteUserController, getUserController, getUserProfileController, updateUserController } from "./controllers";

const router = Router()

router.get('/users', getUserController)

router.post('/users', createUserController)

router.delete('/users/:uuid', deleteUserController)

router.patch('/users/:uuid', updateUserController)

router.get('/users/profile', getUserProfileController)

export default router
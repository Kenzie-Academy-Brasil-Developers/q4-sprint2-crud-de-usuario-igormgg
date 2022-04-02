import { Router } from "express";
import { createUserController, deleteUserController, getUserController, getUserProfileController, updateUserController } from "./controllers";
import loginUserController from "./controllers/user/loginUser";
import { authUser, checkAdmUser, checkSameEmail, validateBody } from "./middlewares";
import { userLoginSchema, userPatchSchema, userRegisterSchema } from "./shapes";

const router = Router()

router.get('/users', authUser, checkAdmUser, getUserController)

router.get('/users/profile', authUser, getUserProfileController)

router.post('/users', validateBody(userRegisterSchema), checkSameEmail, createUserController)

router.post('/login', validateBody(userLoginSchema), loginUserController)

router.patch('/users/:uuid', validateBody(userPatchSchema), authUser, updateUserController)

router.delete('/users/:uuid', authUser, deleteUserController)

export default router
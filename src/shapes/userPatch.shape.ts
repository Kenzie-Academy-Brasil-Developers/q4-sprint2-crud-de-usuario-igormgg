import * as yup from 'yup';

const userPatchSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string()
});

export default userPatchSchema;
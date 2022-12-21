import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      let result = {};
      res.map((item) => {
        result = { ...result, ...item };
        return undefined;
      });
      console.log(`${result.body} ${result.firstName} ${result.lastName}`);
    })
    .catch((err) => console.log(`Signup system offline`));
}

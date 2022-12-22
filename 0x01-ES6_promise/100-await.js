import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  result = await Promise.all([uploadPhoto(), createUser()])
    .then((val) => ({
      photo: val[0],
      user: val[1],
    }))
    .catch(() => ({
      photo: 'null',
      user: 'null',
    }));
  return result;
}

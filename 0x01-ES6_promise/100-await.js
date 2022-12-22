import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = await Promise.allSettled([uploadPhoto(), createUser()]);
  let result = {};
  if ((res[0].status === res[1].status) && res[1].status === 'fulfilled') {
    result = {
      photo: res[0].value,
      user: res[1].value,
    };
  } else {
    result = {
      photo: undefined,
      user: undefined,
    };
  }
  return result;
}

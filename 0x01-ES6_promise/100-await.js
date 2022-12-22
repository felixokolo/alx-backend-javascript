import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  let res;
  try {
    res = await Promise.allSettled([uploadPhoto(), createUser()]);
  } catch (e) {
    res = [undefined, undefined];
  } finally {
    if ((res[0].status === res[1].status) && res[1].status === 'fulfilled') {
      result = {
        photo: res[0].value,
        user: res[1].value,
      };
    }
  }
  return result;
}

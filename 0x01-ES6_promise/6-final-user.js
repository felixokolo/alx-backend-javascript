import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const pro = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return pro;
}
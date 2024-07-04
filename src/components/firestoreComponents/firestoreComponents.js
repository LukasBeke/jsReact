import { db } from '../../firebase';

const addNewUser = async (userData) => {
  try {
    await db.collection('users').add(userData);
  } catch (error) {
    console.error('Klaida registruojantis', error);
    throw error;
  }
};

export { addNewUser };

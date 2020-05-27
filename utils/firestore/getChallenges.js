import firebase from 'firebase/app'
import 'firebase/firestore'
import initFirebase from '../auth/initFirebase'

initFirebase()

const db = firebase.firestore();

export default async function getChallenges() {
  try {
    const querySnapshot = await db.collection('challenges').get();
    return querySnapshot.docs.map(doc => doc.data().name);
  } catch(error) {
    return [];
  }
}
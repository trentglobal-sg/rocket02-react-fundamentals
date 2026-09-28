import { atom} from 'jotai';

// a Jotai atom is one piece of data value you are sharing
// the atom function create a new atom
// the parameter is the defaul value
export const countAtom = atom(0);
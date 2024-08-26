import axios from 'axios';
import { ChaliceStructures } from '@/constants/Chalices';

const BACKEND_URL = 'https://dungen-e7e9b-default-rtdb.europe-west1.firebasedatabase.app';

export function postDungeon() {
    axios.post(
        BACKEND_URL + '/dungeon.json',
        ChaliceStructures);
}

export function fetchDungeon() {
    axios.get(BACKEND_URL + '/dungeon.json');
}
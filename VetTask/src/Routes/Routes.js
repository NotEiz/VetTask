//importuoju page failus
import Home from '../pages/Home';
import Medication from '../pages/Medication';
import NewPet from '../pages/NewPet';
import Log from '../pages/Log'
//isexportuoju path i faila
export const PETS_PATH = '/';
export const MEDICATION_PATH = '/medication';
export const NEW_PET_PATH = '/newPet';
export const LOG_PATH = '/:id'
// sukuriu nav barui  routus i pagus su pavadinimais
export const NavBarItems = [
     { title: 'Pets', path: PETS_PATH},
     { title: 'Medication', path: MEDICATION_PATH },
];

export const routes = [
     { path: PETS_PATH, Component: Home },
     { path: MEDICATION_PATH, Component: Medication },
     { path: NEW_PET_PATH, Component: NewPet},
     { path: LOG_PATH, Component: Log},
]
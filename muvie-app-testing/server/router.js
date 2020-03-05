import express, {Router} from 'express';

//import index action from controller
import { index } from './controllers/movies';

//initialize the router
const router = Router();

//Handle route with index function from controller
router.route('/movies')
.get(index);

export default router;
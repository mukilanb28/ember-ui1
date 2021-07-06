import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersController extends Controller {
    queryParams = ["archived"];
    
    model="";
    archived=0;

}

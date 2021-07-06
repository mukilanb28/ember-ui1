import { action } from '@ember/object';
import Controller, {inject as controller} from '@ember/controller';

export default class UsersIndexController extends Controller {

    @controller users;

    @action
    toggleArchiveState(state="") {
        this.users.set("archived", state); //Updated the users controller
        this.model.set("archived", state); //update model
        this.model.save(); //commit changes
    }
}

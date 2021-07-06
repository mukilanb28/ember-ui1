import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
    queryParams = { archived: {refreshModel:true}};

  model(params) {
    var tmp = {0:false, 1:"", 2:true}; //archived states
    return this.store.query('user', {archived:tmp[params.archived]})
  }
}

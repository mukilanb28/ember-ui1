import Component from '@ember/component';

export default Component.extend({

    archived:"",
    
    actions:{
        toggleState(state){
            this.toggleState(state);
        }
    }
});

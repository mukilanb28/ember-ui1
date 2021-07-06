import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
    classNameBindings:["isArchived:green-theme:red-theme"],
    
    model:"",

    isArchived:alias("model.archived"),
    label:computed("model.archived", function(){
        return this.model.archived ? "UnArchive" : "Archive";
    }),

    actions:{
        toggleArchiveState(){
            this.model.set("archived", !this.model.archived);
            this.model.save();
        }
    }
});

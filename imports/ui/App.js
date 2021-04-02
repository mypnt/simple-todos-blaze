import { Template } from 'meteor/templating';
import { TasksCollection } from '/imports/api/TasksCollection';
import './App.html';

/*Template.body.helpers({
    tasks: [
        {text: 'Suivre le tutoriel Meteor'},
        {text: 'S\'approprier coffeeScript, Jade et Stylus'},
        {text: 'Créer son propre projet pour se faire la main'},
    ],
});*/

Template.body.helpers({
    tasks() {
        return TasksCollection.find({}, { sort: { createdAt: -1 } });
    },
});

Template.form.events({
    "submit .task-form"(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        TasksCollection.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value ='';
    }
})


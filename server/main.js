import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
    if (TasksCollection.find().count() === 0) {
        [
            'Installer Node',
            'Créer un server',
            'Suivre tutoriel Meteor / Blaze',
            'Se familiariser avec Jade',
            'Se familiariser avec CoffeeScript',
            'Se familiariser avec Stylus',
            'Créer son propre projet'
        ].forEach(insertTask)
    }
});
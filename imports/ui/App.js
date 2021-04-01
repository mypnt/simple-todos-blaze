import { Template } from 'meteor/templating';

import './App.html';

Template.body.helpers({
    tasks: [
        {text: 'Suivre le tutoriel Meteor'},
        {text: 'S\'approprier coffeeScript, Jade et Stylus'},
        {text: 'Créer son propre projet pour se faire la main'},
    ],
});
# Notes

Notes and key things to remember, taken throughout the course:

* There are multiple ways to actually render something to the screen/page. A standard way to connect a Vue component to the Vue instance in `main.js` for example, is to use the `el` keyword like this: `el: '#app'`. An alternative way to do this, as is done in this project, is to chain the `mount` method to the end of the instance: `new Vue({...}).$mount('#app');`

* When adding components in the `<script>` tag of a Vue file (such as in the App.vue file), a shortcut can be used to shorten the syntax of components with the same key (name) and value. For example, the search bar component listed like this: `SeacrhBar: SearchBar`, can be shortened to simply: `SearchBar`

* Vue directives can be called using the keyword/phrase `v-on` followed by the input. This can be shortened when getting on input from the user like so, from this: `v-on:input="..."`, to this: `@input=" "`

* Add notes here

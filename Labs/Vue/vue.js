Vue.component("book-view", {
    props: [ "bookInfo" ],
    template: "<div> {{ bookInfo }}</div>"
})

var myBook = new Vue({
    el: '#book',
    data: {
        title: 'Harry Potter and the Goblet of Fire',
        cover: '🔥',
        author: 'JK Rowling', 
        ready: true
    }, 
    methods: {
        nextBook: function() {
            this.title = 'Mirador',
            this.cover = '🎮',
            this.author = 'Dan Wells',
            this.ready = false
        }
    }
});
const hello = {

    name: 'Sarath',
    place: 'pala',
    greet: function(){
        console.log(`I am ${this.name} from ${this.place}`);
    },

    message: function(){
        console.log("sample message");
    }
};

module.exports = hello;
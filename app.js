const Sequelize = require('sequelize');

// The parameters in order: Schema name, Table name, your own password 
// and object specifying what DB engine your using
const connection = new Sequelize('demo_schema', 'root', 'password', {
    // specifying what sql engine
    dialect: 'sqlite',
    // Path to Sqlite DB
    storage: './database.sqlite'
});

// Defning your model
const Article = connection.define('article', {
    // defingind the data types
    // title: Sequelize.STRING,
    // body: Sequelize.TEXT,
    // The lower is more implicit as an object, we can specify additional attributes
    title: {
        type: Sequelize.STRING,
         unique: true
    },
    body: {
        type: Sequelize.TEXT,
        defaultValue: 'Coming soon...'
    }
})

// running the DB Connection then adding a new article record to the DB
connection.sync().then(function () {
    // after connecting running the findById method to locate record in DB
    // Article.findById(1).then(function(article) {
    //     // loging just the dataValues
    //     console.log(article.dataValues)
    // })

    // This method searches all records in table
    Article.findAll().then(function(articles) {
        // loging just the length
        console.log(articles.length)
    })

    // Article.create({
    //     title: 'demo Title',
    //     body: "This is a sample body of text"
    // })
})

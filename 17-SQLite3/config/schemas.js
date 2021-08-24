exports.up = function(knex) {
    return knex.schema.createTable('messages', (table)=>{
        table.increments('id')
        table.string('name').notNullable()
        table.string('message').notNullable()
        table.timestamps(true, true)
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages')  
};
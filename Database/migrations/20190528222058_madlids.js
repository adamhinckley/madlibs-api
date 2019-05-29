exports.up = function(knex, Promise) {
    return knex.schema.createTable("madlibs", tbl => {
        tbl.increments();
        tbl.object("madlib").notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("madlibs");
};

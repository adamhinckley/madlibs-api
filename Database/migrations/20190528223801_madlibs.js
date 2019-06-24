exports.up = function(knex, Promise) {
    return knex.schema.createTable("madlibs", tbl => {
        tbl.increments();
        tbl.string("title").notNullable();
        tbl.string("blanks").notNullable();
        tbl.string("values").notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("madlibs");
};

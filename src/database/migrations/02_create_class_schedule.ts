import Knex from 'knex';

//faz uma ação
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//desfaz a ação caso ocorra um erro
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}
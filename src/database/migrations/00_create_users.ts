import Knex from 'knex';

//faz uma ação
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

//desfaz uma ação caso ocorra um erro
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}
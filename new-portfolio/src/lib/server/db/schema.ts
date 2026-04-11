import { sqliteTable, integer , text ,     } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
    email : text("email").notNull(),  
    password : text("password").notNull()
});
export const blog = sqliteTable('blog' , {
    id : integer('id', {mode:'number'}).primaryKey({autoIncrement : true }),
    title : text('title'),
    slug : text('slug').unique().notNull(),
    content : text('content'),
    views: integer('views').default(0),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date())
    }
)
export const contact = sqliteTable('contact' , {
    id : integer('id', {mode:'number'}).primaryKey({autoIncrement : true }),
    name : text('name'),
    email : text('email'),
    message : text('message')
})

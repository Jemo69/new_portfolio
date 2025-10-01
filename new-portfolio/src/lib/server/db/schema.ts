import { sqliteTable, integer , text    } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
    email : text("email").notNull(),  
    password : text("password").notNull()
});
export const blog = sqliteTable('blog' , {

    id : integer('id'), 
    title : text('title'),
    slug : text('slug').unique().notNull(),
    cotent : text('content'),
    
    }
)

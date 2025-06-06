import {
    pgTable,
    serial,
    text,
    timestamp,
    integer,
    primaryKey,
    varchar,
    uniqueIndex,
    index, boolean
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    userId: text('userId').notNull(),
    email: text('email').notNull(),
    username: text('username').notNull(),
    roleId: integer('role').references(() => roles.roleId).notNull()
});

export const roles = pgTable('roles', {
    roleId: serial('roleId').primaryKey(),
    roleName: text('roleName').notNull()
});
export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    description: text('description').notNull().default('Test Description'),
    content: text('content').notNull(),
    headerimageurl: text('headerimageurl').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    ispublished: boolean('ispublished').notNull().default(false),
    isfeatured: boolean('isfeatured').notNull().default(false),
    authorId: integer('author_id').references(() => users.id).notNull(),
    categoryId: integer('category_id').references(() => categories.id).notNull()
},
    (table) => ({
        searchIndex: index('search_index').using(
            'gin',
            sql`(
          setweight(to_tsvector('english', ${table.title}), 'A') ||
          setweight(to_tsvector('english', ${table.description}), 'B')
      )`,
        ),
    }));

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description')
},
    (table) => ({
        searchIndex: index('search_index').using(
            'gin',
            sql`(
          setweight(to_tsvector('english', ${table.name}), 'A') ||
          setweight(to_tsvector('english', ${table.description}), 'B')
      )`,
        ),
    }));

export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    name: text('name').notNull()
});

export const postTags = pgTable('post_tags', {
    postId: integer('post_id').references(() => posts.id).notNull(),
    tagId: integer('tag_id').references(() => tags.id).notNull()
}, (t) => ({
    primaryKey: primaryKey({ columns: [t.postId, t.tagId] })
}));

export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    userId: integer('user_id').references(() => users.id).notNull(),
    postId: integer('post_id').references(() => posts.id).notNull()
});
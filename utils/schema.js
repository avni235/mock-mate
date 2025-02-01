import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockMate = pgTable('MockMate', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExp: varchar('jobExp').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull()
});
export const FinalUserAnswer = pgTable('FinalUserAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),  // Fix the typo here
    userMail: varchar('userMail'),
    createdAt: varchar('createdAt'),
});

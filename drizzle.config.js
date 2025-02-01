/** @type {import ("drizzle-kit").Config}*/
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url: 'postgresql://mock-mate_owner:FWGzhbiY1e8t@ep-winter-waterfall-a5afzthv.us-east-2.aws.neon.tech/mock-mate?sslmode=require'
    }
}
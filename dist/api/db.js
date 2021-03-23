"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
// use the prisma client as your database api
// this will also get used for the context object
exports.db = new client_1.PrismaClient();
// export type Post = {
//     id: number;
//     title: string;
//     body: string;
//     published: boolean;
//     createdAt: Date;
// }
// export type Db = {
//     posts: Post[]
// }
// export const db: Db = {
//     posts: [
//         {
//             id: 1,
//             title: 'Nexus Database',
//             body: 'a great post believe it',
//             published: false,
//             createdAt: new Date(Date.now())
//         },
//         {
//             id: 2,
//             title: 'Getting Good at Nexus',
//             body: 'how to use context',
//             published: true,
//             createdAt: new Date(Date.now())
//         }
//     ]
// }
//# sourceMappingURL=db.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Todo",
    embedded: false
  },
  {
    name: "TodoList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/austin-condiff-cca331/todo-app/dev`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Todo",
    embedded: false
  },
  {
    name: "TodoList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

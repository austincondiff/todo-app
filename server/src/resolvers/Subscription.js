const Subscription = {
  todoSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .post({
          mutation_in: ['CREATED', 'UPDATED']
        })
        .node()
    },
    resolve: payload => {
      return payload
    }
  }
}

module.exports = { Subscription }

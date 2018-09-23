'use strict';

/**
 * Postscategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Postscategory`.
 */

module.exports = {

  /**
   * Retrieve postscategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.postscategory.search(ctx.query);
    } else {
      return strapi.services.postscategory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a postscategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.postscategory.fetch(ctx.params);
  },

  /**
   * Count postscategory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.postscategory.count(ctx.query);
  },

  /**
   * Create a/an postscategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.postscategory.add(ctx.request.body);
  },

  /**
   * Update a/an postscategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.postscategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an postscategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.postscategory.remove(ctx.params);
  }
};

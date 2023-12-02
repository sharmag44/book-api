'use strict';
const mapper = require('../mappers/book');
const updateEntities = require('../helpers/updateEntities');

const include = [];

const set = (model, entity) => {
    return updateEntities.update(model, entity);
};

const getById = async (id) => {
    const entity = await db.book.findByPk(id);
    return entity;
};

exports.create = async (model) => {
    try {

        const entity = new db.book(mapper.newEntity(model));
        return await entity.save();
    } catch (error) {
        throw error;
    }
};

exports.update = async (id, model) => {
    try {
        let entity = await db.book.findByPk(id);
        if (!entity) {
            throw 'book not found'
        }
        set(model, entity);
        return entity.save();
    } catch (error) {
        throw error;
    }
};

exports.search = async (query, page, user) => {
    try {
        let where = {};

        if (query.search) {
            where.title = { [Op.iLike]: '%' + query.search + '%' }
        }

        query.where = where;
        query.include = include;
        query.order = [['createdAt', 'DESC']];
        const result = await db.book.findAndCountAll(query);
        if (page) {
            return result.rows;
        } else {
            return result.rows;
        }

    } catch (error) {
        throw error;
    }
};

exports.get = async (query) => {
    try {
        if (typeof query === 'string') {
            if (query.isUUID()) {
                return getById(query)
            }
        }
        if (query.id) {
            return getById(query.id);
        }

        if (query) {
            const where = {};
            if (query.name) {
                where.name = query.name;
            }
            return this.getByCondition(where);
        }

        return null;
    } catch (error) {
        throw error;
    }
};

exports.getByCondition = async (where) => {
    return await db.book.findOne({ where });
};

exports.remove = async (query) => {
    try {
        let entity = await this.get(query);
        if (entity) {
            return await entity.destroy();
        }
        return null;
    } catch (error) {
        throw error;
    }
};

exports.afterfoundEntity = async (entity, userId, type) => {
    try {
        if (!entity) return;
        const order = await db.order.findOne({
            where: { userId },
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'addressId', 'paymentId']
        });
        if (order) {
            if (type == 'address') {
                if (order.addressId == entity.id) {
                    entity.isPrevious = true;
                }
            } else {
                if (order.paymentId == entity.id) {
                    entity.isPrevious = true;
                }
            }

        }

    } catch (error) {
        throw error;
    }
};



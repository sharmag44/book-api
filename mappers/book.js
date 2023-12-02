'use strict';
const _ = require('underscore');
exports.toModel = (entity) => {
    const model = {
        id: entity.id,
        title: entity.title,
        authorName: entity.authorName,
        isbn: entity.isbn,
        price: entity.price,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt
    };

    return model;
};

exports.toSearchModel = (entities) => {
    return _.map(entities, exports.toModel);
};

exports.newEntity = (entity) => {
    const model = {
        title: entity.title,
        authorName: entity.authorName,
        isbn: entity.isbn,
        price: entity.price,
    };

    return model;
};
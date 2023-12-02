'use strict'
exports.canCreate = async (req) => {
    let data = {
        isSuccess: false
    };
    if (!req.body) {
        data.message = 'invalid request'
        return data;
    }
    if (!req.body.title) {
        data.message = 'title required'
        return data;
    }
    if (!req.body.authorName) {
        data.message = 'authorName required'
        return data;
    }
    if (!req.body.isbn) {
        data.message = 'isbn required'
        return data;
    }
    if (!req.body.price) {
        data.message = 'price required'
        return data;
    }
    if (req.body.price !== undefined && typeof req.body.price !== "number") {
        data.message = 'Invalid price. Must be a number.'
        return data;
    }
    data.isSuccess = true
    return data;
}

exports.canUpdate = async (req) => {
    let data = {
        isSuccess: false
    };
    if (!req.body) {
        data.message = 'invalid request'
        return data;
    }
    if (!req.body.title) {
        data.message = 'title required'
        return data;
    }
    if (req.body.authorName) {
        data.message = 'authorName not allowed'
        return data;
    }
    if (req.body.isbn) {
        data.message = 'isbn not allowed'
        return data;
    }
    if (req.body.price) {
        data.message = 'price not allowed'
        return data;
    }

    data.isSuccess = true
    return data;
}

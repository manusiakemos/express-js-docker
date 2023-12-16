const express = require('express');

function paginate(req, res, next) {
    // Extract page and limit parameters from query string or defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Validate parameters and handle errors if needed

    // Calculate the offset based on page and limit
    const offset = (page - 1) * limit;

    // Store pagination information in the request object
    req.pagination = {
        page,
        limit,
        offset,
    };

    // Call next middleware or route handler
    next();
}

module.exports = paginate;
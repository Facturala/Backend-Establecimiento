"use strict"



const returnMessages = {
    ok: true,
    error: false,
    success: 'transsaction executed succssefully',
    alreadyExist: 'this item already exist in the database',
    noContent: 'there is no content matching that criteria',
    badRequest: 'transaction could not be executed in the database',
    serverError: 'An error with the server has ocurred, please try again or contact support for futher details',
}

const responses = {
    ok: {
        ok: returnMessages.ok,
        status: 200,
        message: returnMessages.success
    },
    alreadyExist: {
        ok: returnMessages.ok,
        status: 202,
        message: returnMessages.alreadyExist
    },
    noContent: {
        ok: returnMessages.ok,
        status: 204,
        message: returnMessages.noContent
    },
    badRequest: {
        ok: returnMessages.error,
        status: 400,
        message: returnMessages.badRequest
    },
    serverError: {
        ok: returnMessages.error,
        status: 500,
        message: returnMessages.serverError
    }
}

module.exports = responses;
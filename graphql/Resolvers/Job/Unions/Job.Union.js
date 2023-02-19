"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobUnions = void 0;
const jobUnions = {
    CreateJobOfferResult: {
        __resolveType(obj) {
            if (obj.jobOffer)
                return 'CreateJobOfferSuccess';
            if (obj.message)
                return 'CreateJobOfferFailed';
            return null;
        },
    },
    UpdateJobOfferResult: {
        __resolveType(obj) {
            if (obj.jobOffer)
                return 'UpdateJobOfferSuccess';
            if (obj.message)
                return 'UpdateJobOfferFailed';
            return null;
        },
    },
    DeleteJobOfferResult: {
        __resolveType(obj) {
            if (obj.deleteMsg)
                return 'DeleteJobOfferSuccess';
            if (obj.message)
                return 'DeleteJobOfferFailed';
            return null;
        },
    },
};
exports.jobUnions = jobUnions;

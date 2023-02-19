"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobResolver = void 0;
const jobResolver = {
    Mutation: {
        createJobOffer: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { ClientModel, JobModel, req } = ctx;
            const { title, description, jobDetails, requirements, inAddition, type, resumes, viewed, refused, inConsideration, saving, sharing, } = args.input;
            const admin = yield ClientModel.findById(req.headers.authorization);
            const jobOffer = yield JobModel.create({
                title,
                description,
                details: jobDetails,
                requirements,
                inAddition,
                type,
                published_by: req.headers.authorization,
                resumes,
                viewed,
                refused,
                inConsideration,
                saving,
                sharing,
            });
            admin.jobs.push(jobOffer);
            yield admin.save();
            return { jobOffer };
        }),
        updateJobOffer: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { JobModel, translate } = ctx;
            const { id, title, description, jobDetails, requirements, inAddition, type, } = args.input;
            let jobOffer = yield JobModel.findById(id);
            if (!jobOffer)
                return { message: translate('not_found', { value: 'Job Offer Id' }) };
            jobOffer = yield JobModel.findByIdAndUpdate(id, {
                title,
                description,
                jobDetails,
                requirements,
                inAddition,
                type,
            }, { new: true, runValidators: true });
            return { jobOffer };
        }),
        deleteJobOffer: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { ClientModel, JobModel, translate } = ctx;
            const { id } = args;
            let jobOffer = yield JobModel.findById(id);
            if (!jobOffer)
                return { message: translate('not_found', { value: 'Job Offer Id' }) };
            const admin = yield ClientModel.findById(jobOffer.published_by);
            if (!admin)
                return { message: translate('not_found', { value: 'Admin' }) };
            admin.jobs.pull(id);
            yield admin.save();
            jobOffer = yield JobModel.findByIdAndRemove(id);
            return { deleteMsg: translate('deleted', { value: 'Job Offer' }) };
        }),
    },
};
exports.jobResolver = jobResolver;

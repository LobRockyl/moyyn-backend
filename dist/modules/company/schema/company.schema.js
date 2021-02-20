"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const mongoose = require("mongoose");
exports.CompanySchema = new mongoose.Schema({
    company: String,
    name: String,
    website: String,
    location: String,
    email: String,
    phone: String,
    password: String,
    notification: Boolean,
    category: String,
    status: String,
    ifDeleted: Boolean,
    timestamp: Date,
    number_jobs_posted: String
});
//# sourceMappingURL=company.schema.js.map


const expenseSchema = {
    type: "object",
    properties: {
        amount: { type: "number", minimum: 0, exclusiveMinimum: 0 },
        date: { type: "string" }, // ISO 8601 format
        title: { type: "string", maxLength: 500 },
        type: { type: "string", enum: ["salary", "business", "investment", "other"] },
        category: { type: "string", maxLength: 100 },
    },
    required: ["amount", "date", "type", "category"],
    additionalProperties: false,
};

module.exports = expenseSchema;
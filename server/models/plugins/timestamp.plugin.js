module.exports = function TimestampPlugin(schema) {
  schema.add({ createdAt: Date });
  schema.add({ updatedAt: Date });

  // Hooks for update middleware
  schema.pre('findOneAndUpdate', function (next) {
    this.findOneAndUpdate({}, { updatedAt: Date.now() });
    next();
  });

  schema.pre('save', function (next) {
    const now = new Date();
    if (!this.createdAt) { this.createdAt = now; }
    this.updatedAt = now;
    next();
  });

};

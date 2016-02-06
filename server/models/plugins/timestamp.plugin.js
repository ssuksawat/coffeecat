module.exports = function TimestampPlugin(schema) {
  schema.add({ createdAt: Date });
  schema.add({ updatedAt: Date });

  schema.pre('save', function (next) {
    const now = new Date();
    if (!this.createdAt) { this.createdAt = now; }
    this.updatedAt = now;
    next();
  });
}

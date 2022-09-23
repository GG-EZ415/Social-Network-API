const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema( {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: [{
        type: String,
        required: true,
    }],
    reactions: [reactionSchema]
  },
);
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reaction.length
});

const Thought = model('Thought', thoughtSchema);

model.exports = Thought;
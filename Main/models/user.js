const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
          type: String,
          unique: true,
          required: true,
          trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must be a valid email']
        },
        thoughts: [{
          type: Schema.Types.ObjectId,
          ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
          ref: "Friends"
        }],
      },
      {
        toJSON: {
          getters: true,
        },
      }
    );
    userSchema.virtual('friendCount').get(function(){
        return this.friends.length
    });

    const User = model('User', userSchema);

    model.exports = userSchema;
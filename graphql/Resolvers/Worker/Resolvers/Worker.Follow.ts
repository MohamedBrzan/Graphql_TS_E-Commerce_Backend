import IsAuthorized from '../../../../MiddleWares/IsAuthorized';
import FollowUser from '../../common/User.Follow';

const workerFollowResolver = {
  Mutation: {
    // Create Follow (an object data) Information About Worker
    createWorkerFollow: async (
      _: unknown,
      args: { input: { following: string; follower: string } },
      ctx: any
    ) => {
      const { req, WorkerModel, translate } = ctx;

      const { token } = req.headers;

      const { follower, following } = args.input;

      return await FollowUser({
        model: WorkerModel,
        following,
        follower,
        token,
        translate,
      });
    },
    // Create Follow (an object data) Information About Worker
    deleteWorkerFollow: async (
      _: unknown,
      args: { input: { following: string; follower: string } },
      ctx: any
    ) => {
      const { req, WorkerModel, translate } = ctx;

      const { token } = req.headers;

      const { follower, following } = args.input;

      let userNeedFollowing = await WorkerModel.findOne({ _id: following });

      let userToFollow = await WorkerModel.findOne({ _id: follower });

      return await IsAuthorized({
        token,
        model: WorkerModel,
        translate,
      }).then(async (res) => {
        if (res._id && userNeedFollowing && userToFollow) {
          const findUserInFollowing =
            userNeedFollowing.following.includes(follower);

          const findUserInFollowers =
            userToFollow.followers.includes(following);

          if (!findUserInFollowers) {
            return {
              message: translate('error', {
                value: `You Already Deleted This User From Your Following List`,
              }),
            };
          } else if (!findUserInFollowing) {
            return {
              message: translate('error', {
                value: `You Already Deleted This User From Your Following List`,
              }),
            };
          }

          if (findUserInFollowing && findUserInFollowers) {
            // Add Follower to User Who Need To Follow
            userNeedFollowing = await WorkerModel.findByIdAndUpdate(
              following,
              {
                $pull: {
                  following: follower,
                },
              },
              {
                new: true,
                runValidators: true,
              }
            );

            // Add Following to User Who Followed
            userToFollow = await WorkerModel.findByIdAndUpdate(
              follower,
              {
                $pull: {
                  followers: following,
                },
              },
              {
                new: true,
                runValidators: true,
              }
            );
          }
        }

        return {
          deletedMsg: translate('deleted', {
            value: userToFollow.fullName,
          }),
        };
      });
    },
  },
};

export { workerFollowResolver };

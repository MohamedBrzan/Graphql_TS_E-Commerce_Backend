import IsAuthorized from '../../../../MiddleWares/IsAuthorized';
import FollowUser from '../../../../Functions/FollowHandler';

type FollowData = {
  input: {
    userType: string;
    following: string;
    follower: string;
  };
};

const userFollowResolver = {
  Mutation: {
    // Create Follow (an object data) Information About Worker
    createUserFollow: async (_: unknown, args: FollowData, ctx: any) => {
      const { req, ClientModel, WorkerModel, translate } = ctx;

      const { token } = req.headers;

      const { userType, follower, following } = args.input;

      if (userType === 'Freelancer') {
        return await FollowUser({
          model: WorkerModel,
          following,
          follower,
          token,
          translate,
        });
      }

      return await FollowUser({
        model: ClientModel,
        following,
        follower,
        token,
        translate,
      });
    },
    // Create Follow (an object data) Information About Worker
    deleteUserFollow: async (_: unknown, args: FollowData, ctx: any) => {
      const { req, ClientModel, WorkerModel, translate } = ctx;

      const { token } = req.headers;

      const { userType, follower, following } = args.input;

      let userNeedFollowing: any;

      let userToFollow: any;

      if (userType === 'Freelancer') {
        userNeedFollowing = await WorkerModel.findOne({ _id: following });

        userToFollow = await WorkerModel.findOne({ _id: follower });
      }

      userNeedFollowing = await ClientModel.findOne({ _id: following });

      userToFollow = await ClientModel.findOne({ _id: follower });

      return await IsAuthorized({
        token,
        model: WorkerModel,
        translate,
      }).then(async () => {
        if (userNeedFollowing && userToFollow) {
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

export { userFollowResolver };

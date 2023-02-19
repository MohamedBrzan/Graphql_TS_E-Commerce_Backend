import IsAuthorized from '../MiddleWares/IsAuthorized';

type Props = {
  model: any;
  following: string;
  follower: string;
  token: string;
  translate: any;
};

const FollowHandler = async ({
  model,
  following,
  follower,
  token,
  translate,
}: Props) => {
  let userNeedFollowing = await model.findOne({ _id: following });

  let userToFollow = await model.findOne({ _id: follower });

  return await IsAuthorized({
    token,
    model,
    translate,
  }).then(async () => {
    if (userNeedFollowing && userToFollow) {
      const findUserInFollowing =
        userNeedFollowing.following.includes(follower);

      const findUserInFollowers = userToFollow.followers.includes(following);

      if (findUserInFollowers) {
        return {
          message: translate('error', {
            value: `You Already Followed ${userToFollow.fullName}`,
          }),
        };
      }

      if (findUserInFollowing) {
        return {
          message: translate('error', {
            value: `You Already Followed ${userToFollow.fullName}`,
          }),
        };
      }

      if (!findUserInFollowing && !findUserInFollowers) {
        // Add Follower to User Who Need To Follow
        userNeedFollowing = await model.findByIdAndUpdate(
          following,
          {
            $push: {
              following: follower,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        // Add Following to User Who Followed
        userToFollow = await model.findByIdAndUpdate(
          follower,
          {
            $push: {
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
      followed: translate('followed', {
        value: userToFollow.fullName,
      }),
    };
  });
};

export default FollowHandler;

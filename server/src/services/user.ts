import { UserModel } from "../models/user";

type userReturn = Promise<number | any>;

interface userProps {
  id: any;
  ip: string;
}

interface affProps extends Pick<userProps, "ip"> {
  referedBy: any;
}

export const newUserService = async (
  props: Pick<userProps, "ip">,
  options: { x: number } = { x: 0 }
): userReturn => {
  const userExists = await UserModel.find({ ip: props.ip });
  if (!userExists.length) {
    const resp = await UserModel.create({ ip: props.ip });
    return options.x && resp;
  }
  return userService(undefined, props);
};

export const userService = async (
  props?: userProps,
  partial?: Partial<userProps>
): userReturn => {
  if (partial?.ip) {
    var user = await UserModel.findOne({ ip: partial.ip });
  } else if (props?.id) {
    var user = await UserModel.findById({ _id: props.id });
  } else {
    throw new Error("No User Exists.");
  }

  if (user?.refered) {
    return Array.isArray(user.refered) ? user.refered.length : 1;
  } else {
  }

  return 0;
};

export const affService = async (props: affProps): userReturn => {
  try {
    var refUser = await UserModel.findById({ _id: props.referedBy });
  } catch (e) {
    return newUserService(props);
  }

  if (refUser) {
    const user = await newUserService(props, { x: 1 });
    if (user && user._id !== refUser._id) {
      await refUser.updateOne({ $addToSet: { refered: user?._id } });
    }
  }
  return 1;
};

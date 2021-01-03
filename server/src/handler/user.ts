import { affService, newUserService, userService } from "../services/user";

export const userHandler = async (_: any) => {
  const { id, ip, referedBy } = _.args;

  if (!id) {
    if (referedBy) {
      var resp = await affService({ ip, referedBy });
    } else {
      var resp = await newUserService({ ip });
    }
  } else {
    var resp = await userService({ id, ip });
  }

  console.log(resp);
  return { user: resp };
};

import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class User {
  @prop({ required: false })
  public refered?: Ref<User>;

  @prop({ required: true })
  public ip!: string;
}

export default getModelForClass(User);

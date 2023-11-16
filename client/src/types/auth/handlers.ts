import type { LoginFormData, SignupFormData } from '.';

export type LoginHandlerType = (formData: LoginFormData) => Promise<void>;
export type LogoutHandlerType = () => Promise<void>;
export type SignupHandlerType = (formData: SignupFormData) => Promise<void>;

export type AuthHandlersType = {
  loginHandler: LoginHandlerType;
  signupHandler: SignupHandlerType;
  logoutHandler: LogoutHandlerType;
};

export interface RootState {
  hello: string;
}

export enum Loading {
  LOADING_INIT,
  LOADING,
  LOADING_DONE,
}

export enum userRoles {
  ADMIN = "ADMIN",
  USER = "USER",
}

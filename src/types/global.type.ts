import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};

type TErrorMessage = {
  message: string;
  path: string;
};

export type TError = {
  data: {
    errorMessages?: TErrorMessage[];
    message: string;
    stack: string;
    success: boolean;
  };

  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

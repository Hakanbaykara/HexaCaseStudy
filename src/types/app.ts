export type ApiResponse = {
  id: string;
  status: string;
  message?: string;
  result?: any;
};

export type ButtonProps = {
  onClick: () => void;
  error: boolean;
};

export enum IProcess {
  DONE = "done",
}

export type InfoCmopProps = {
  done: boolean;
  onClick: () => void;
  error: boolean;
  reset: () => void;
};

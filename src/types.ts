import { EndPoints } from "./services/utils";

export type Option = {
  name: string;
  value: string | null;
};

export type EndPointType =
  | { value: EndPoints.EVERYTHING; name: "Everything" }
  | { value: EndPoints.HEADLINES; name: "Top Headlines" };

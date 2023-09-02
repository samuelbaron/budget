import dev from "./dev.json";

export const getConfig = () => {
  const env = process.env.NODE_ENV || "dev";
  switch (env) {
    case "dev":
      return dev;
    default:
      return dev;
  }
};

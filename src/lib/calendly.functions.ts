import { createServerFn } from "@tanstack/react-start";

const SCHEDULING_URL = "https://calendly.com/nazarii-kovalenko2005/zebrixgen-meeting";

export const getSchedulingUrl = createServerFn({ method: "GET" }).handler(async () => {
  return { url: SCHEDULING_URL };
});

import { defineEventHandler } from "h3";

import { getHomeInsights } from "~~/server/services/insights";

export default defineEventHandler(() => getHomeInsights());

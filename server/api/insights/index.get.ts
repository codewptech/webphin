import { defineEventHandler } from "h3";

import { getInsightsHub } from "~~/server/services/insights";

export default defineEventHandler(() => getInsightsHub());

import { rest } from "msw";
import { alertGenerator } from "./alert-generator";
import { IAlert } from "../types";

const alerts: any = alertGenerator();
export const handlers = [
  rest.get("/api/alerts", (req, res, ctx) => {

    const pageParams = new URLSearchParams(window.location.search);
    const isError = pageParams.get('error') === 'true';

    // Example: http://localhost:3000/your_page_url?error=true
    if (isError) {
      // Query param was found, so return an error response.
      return res(
        ctx.status(404),
        ctx.json({ message: 'Oops! Something went terribly wrong.' })
      );
    }

    const results: IAlert[] = [];
    for (let i = 0; i < 20; i++) {
      results.push(alerts.next().value);
    }
    return res(ctx.status(200), ctx.json(results));
  }),
  rest.get("/api/alerts/:id", (req, res, ctx) => {}),
];

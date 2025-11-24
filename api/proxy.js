// Vercel Serverless Proxy
// Receives a URL parameter and fetches it, returning the response

export default async function handler(req, res) {
  try {
    const url = req.query.url || req.body.url;
    if (!url) {
      res.status(400).send("Missing URL");
      return;
    }

    // Basic URL validation
    const safeUrl = new URL(url);

    // Fetch target
    const response = await fetch(safeUrl.href, {
      headers: {
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0",
      },
    });

    const contentType = response.headers.get("content-type") || "text/html";

    const body = await response.text();

    res.setHeader("Content-Type", contentType);
    res.status(200).send(body);
  } catch (err) {
    console.error(err);
    res.status(500).send("Proxy Error: " + err.message);
  }
}

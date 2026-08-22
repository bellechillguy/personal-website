// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

interface CapturedError {
  error: Error;
  at: number;
}

let lastCapturedError: CapturedError | undefined;
const TTL_MS = 5_000;

function record(error: Error) {
  lastCapturedError = { error, at: Date.now() };
}

function errorFromErrorEvent(event: Event): Error {
  if ("error" in event) {
    const candidate = event.error;
    return candidate instanceof Error ? candidate : new Error(String(candidate));
  }

  return new Error(String(event));
}

function errorFromRejectionEvent(event: Event): Error {
  if ("reason" in event) {
    const candidate = event.reason;
    return candidate instanceof Error ? candidate : new Error(String(candidate));
  }

  return new Error(String(event));
}

if (globalThis.addEventListener) {
  globalThis.addEventListener("error", (event) => record(errorFromErrorEvent(event)));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record(errorFromRejectionEvent(event)),
  );
}

export function consumeLastCapturedError(): Error | undefined {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

import { findPort } from "./find-port";

export async function start(server, startPort = 8000) {
  const PORT = process.env.PORT || await findPort(startPort);
  server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
  });
};

export default start;

import { assertEquals } from "@std/assert";

Deno.test("node: --require with cjs", async () => {
  const command = new Deno.Command("node", {
    args: ["--require", "./cjs.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("node: --require with esm", async () => {
  const command = new Deno.Command("node", {
    args: ["--require", "./esm.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("node: --import with esm", async () => {
  const command = new Deno.Command("node", {
    args: ["--import", "./esm.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("deno: --preload with cjs", async () => {
  const command = new Deno.Command("deno", {
    args: ["--unstable-detect-cjs", "--preload", "./cjs.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("deno: --preload with esm", async () => {
  const command = new Deno.Command("deno", {
    args: ["--preload", "./esm.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("deno: --require with cjs", async () => {
  const command = new Deno.Command("deno", {
    args: ["--require", "./cjs.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("deno: --require with esm", async () => {
  const command = new Deno.Command("deno", {
    args: ["--require", "./esm.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

Deno.test("deno: --import with esm", async () => {
  const command = new Deno.Command("deno", {
    args: ["--import", "./esm.js", "main.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();

  assertEquals(code, 0, "exited with error");
});

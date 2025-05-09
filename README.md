# spa-client-tanstack-shadcn

SPA using 
- Tanstack React Router
- shadcn

Ideally with this folder structure

- components: reusable components to build UI not related to the application itself
- features: uses components to build up application parts
- routes: file based router, uses features to make it happen

I just can't have the components folder being used with non shareable components. :shrug:

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

This project was created using `bun init` in bun v1.2.11. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

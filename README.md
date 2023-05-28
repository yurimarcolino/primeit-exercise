This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

This app uses the following external dependencies:

1. [react-hook-form](https://github.com/react-hook-form/react-hook-form): React Hooks for form state management and validation.
2. [tailwindcss](https://github.com/tailwindlabs/tailwindcss): A utility-first CSS framework for rapidly building custom user interfaces.
3. [eslint](https://github.com/eslint/eslint): A Find and fix problems in your JavaScript code.
4. [immer](https://github.com/immerjs/immer): Create the next immutable state by mutating the current one.
5. [phosphor-react](https://github.com/phosphor-icons/react): A flexible icon family for React.
6. [zod](https://github.com/colinhacks/zod): TypeScript-first schema validation with static type inference.
7. [zustand](https://github.com/pmndrs/zustand): State management in React
8. [jest](https://github.com/jestjs/jest): Delightful JavaScript Testing.

## Notes

1. **Testing**: Currently, I have only tested the store and the format function. I believe these are a "must" of this project that must be tested. Of course, it's also important to check if the components are working alone and together, but I have decided not to pursue this approach since testing was not a requirement for this particular exercise.

2. **Atomic design**: The current design implementation of the application utilizes a design system called "Atomic design," which emphasizes dividing components into smaller, more readable, and testable pieces. I became curious about this approach after reading a blog and decided to try it out for this small project. While I haven't applied all the layers of atomic design, I believe that following the Atoms and Molecules approach is sufficient for this particular project. I've learned a lot from this experience, so I consider it a success, even though there might be some room for improvement. I plan to apply this knowledge to future projects as well.

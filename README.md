# My website ☘️

My portfolio website made with Next.js, Prisma, and Tailwind CSS would have a modern, sleek design with a smooth user experience. Next.js, with its server-side rendering capabilities, would ensure fast loading times and optimal performance. Prisma handles the database management, ensuring seamless data access and management. Tailwind CSS provides a responsive and customizable design system, allowing for easy styling and flexibility. The website showcases my projects and thoughts, with a user-friendly layout that makes it easy for visitors to navigate and learn more about the individual's skills and experience.

## Project structure

The project is structured as follows:

- `components`: Contains the React components used in the project.
- `lib`: Contains the Prisma client and other utility functions.
- `pages`: Contains the `api` folder, which contains the API routes.
- `public`: Contains the static assets.
- `app`: The new next.js app directory
- `prisma`: Contains the Prisma schema and migrations.

## Getting started

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/triyanox/website.git
cd website
yarn
```

Then, create a `.env` file in the root directory and add the following environment variables:

```bash
DATABASE_URL="mysql://user:password@host:port/database"
```

You can then run the development server:

```bash
yarn dev
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

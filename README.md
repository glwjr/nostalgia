# Nostalgia

### Team Members

Scott Lucas, Gary White, Samuel Labastille, and Michelle Un

### Vision

A platform where families and friends can stitch together artifacts, stories, and connections to create memories.

### Features:

- Users
  - [x] Users can create an account
  - [x] Users can login
  - [x] Users can update their bio
  - [x] Users can be one of two types: general or admin
- Communities
  - [x] Users can create a new community
  - [x] Users can select communities to join
  - [x] Users can manage the communities they belong to
  - [x] Users can search communities by location
- Artifacts
  - [x] Users can add artifacts with images, stories, descriptions
  - [x] Users can edit artifacts
  - [x] Users can delete artifacts
  - [x] Users can comment on artifacts
  - [x] Users can like artifacts

## Getting Started

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/glwjr/nostalgia.git
```

2. Change directory into the project:

```bash
cd moodmate
```

3. Install the dependencies

```bash
npm install
```

4. Create a PostgreSQL database and add a .env file in the root directory with the following environment variables:

```
DATABASE_URL=postgres://username:password@localhost:5432/database_name
JWT=<your-jwt-secret>
```

- You can create a secret on the command line via this `openssl` command:

```
openssl rand -base64 32
```

## Running the Application

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- `start:dev` will both start your server and build your client side files using webpack
- `start:dev:logger` is the same as `start:dev`, but you will see your SQL queries (can be helpful for debugging)
- `start:dev:seed` will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

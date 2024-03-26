# Nostalgia

## Team Members:

Scott Lucas, Gary White, Samuel Labastille, and Michelle Un

## Features

**Vision:** Nostalgia builds community by creating a platform where families and friends can stitch together artifacts, stories, and connections to create memories.

**Features:**

- **MVP Features**
  - Users
    - [x] Users can create account
    - [x] Users can login
    - [x] Users can update their bio
    - [x] Users can manage the communities they belong to and the artifacts they’ve submitted
    - [x] Users can select communities to join
    - [x] Users can belong to two types: general, admin
  - Community
    - [x] Users can create a new community
    - [ ] Users can invite other users to join the community
    - [ ] Users can request to join a community (admin can approve)
    - [ ] Communities are public but some posts can be private to the community
    - [x] Categorize communities based on geography
  - Artifacts
    - [ ] Users can add artifacts with images, stories, descriptions
    - [ ] Users can edit artifacts
    - [ ] Users can delete artifacts
    - [ ] User can submit artifacts to their communities
    - [ ] Users can comment on artifacts
    - [ ] Users can like artifacts
    - [ ] Users can change artifacts to be private or public to the community
    - [ ] User who added post can edit or delete posts
- **Bonus Features**
  - Users
    - [ ] Users can connect with other users
    - [ ] Users can disconnect from other users
  - Artifacts:
    - [ ] Expand artifacts to other categories (art, music)
    - [ ] Ability to include video content
    - [ ] Leverage Recipes API
    - [ ] Users can see content from friend’s communities

## Views

- Community View - Chronological view of community’s artifacts

  - Can contain relationships across users
  - Displays content specific to the community
  - Can see chronological view
  - Ability to see detailed and high level chronological view
  - Filterable on categories?

- Global View - Current view of what’s happening across communities in currently
  - Displays content for all users
  - Content is public to users
  - Filterable on categories?

## Wireframes

Add wireframes here

## Design

Add database schemas

## Customize

Now that you've got the code, follow these steps to get acclimated:

- Update project name and description in `package.json`, this is your database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

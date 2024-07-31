## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

# My Reflection

After Initially looking at the assignment and feeling I have a lot of work to do as I broke down what needed to be done into smaller chunks it alleviated some concerns. I was able to set up the database on supabase and deploy to vercel very easily, creating a gitHub application to also make the git hub id and secret key I also had no trouble doing, making sure my environment variables that I created in the .env.local where also added to vercel to stop anything from breaking in the deployment. From here I was able to start working on some of the stretch goals, I started with the page titles on post pages, I did this by creating a meta data function to be able to access the data from the database using a sql query.
I then decided to add in the error pages, I also added in a not found page should the user accidentally end up looking for something that isn’t available. I did not struggle with these and found them to be quite an easy task to implement into my app.
Making it so the user could only vote once was added into the sql for us so i guess as I set up my database correctly this was able to work straight off the get go.
I tried to implement the TipTap but this is where i struggled a lot! After spending most of the morning and a good portion of the afternoon on this I figured i couldn’t get it to work even after rubber ducking with other cohorts we found that we where all in the same boat with not being able to make it function as we wanted!
I decided that it was best I moved onto other stretch goals, going into the ReadMe to see what else could be implemented i decided to try and attempt the filter option. Although after some initial struggles with trying to use search params and realising I couldn’t do this is the app is made up of components and not pages I decided a work around with another cohort that we could just make a whole new page that displays the posts in the order of most upvotes as I had set the standard page to order by the most recent instead. I added a link into the header in Layout to direct to this page.
Overall I had a good experience with this day assignment and given more time would have liked to attempt some more of the stretch goals in the readMe file.

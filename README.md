# Career Path Test Exercise

"Career Path Test" platform where users can complete an assessment to get personalised career path suggestions. Built with Next.js, TypeScript, and TailwindCSS.

## Getting Started

To get the code up and running:

1. Download code
2. Run `npm install` to install packages
3. Run the development server with `npm run dev`

## Process

A little bit about the planning and implementation processes.

### Design

To start off, I scanned through the project brief to get an overview of the task and began annotating the UI mockups with any usability improvements I thought the UI could benefit from. Of course my opinion alone isn't enough to base a design on and ideally users and stakeholders would be involved in the feedback process to ensure the platform is user-focused, however, I relied on my understanding of UX/UI standards and ensured any changes reflected standard UI design patterns. In Figma, I turned the updated design ideas into wireframes which gave me a solid visual guide to develop from. I went with a mobile-first approach, ensuring the designs worked on smaller devices first and could also scale up effectively. For example, I replaced the horizontal Likert scale component with a vertical group of radio button cards with increased touch targets, improving usability on mobile devices.

View Figma designs here: https://www.figma.com/design/DUnA7nXYmCKlPSA7n8QpQZ/Career-Path-Test?node-id=0-1&t=c89kQJcFsyZJpARc-1

### Configuration

I decided on a tech stack that would make the coding process smoother and enforce the best coding standards. I chose Next.js to simplify configuration and added Prettier and ESLint plugins to enforce cleaner code. I chose TailwindCSS as it's the styling framework I'm most familiar with, plus its responsiveness features support a mobile-first approach, making it easy to implement mobile designs straight away. I also chose TypeScript for type checking as it makes it easier to spot errors, especially since due to time constraints there's no time to test the app so it adds a layer of durability to my code.

### Implementation

Initially, I went for a modular, reusable component approach and made all the components I thought I'd need based on my designs as this is how I would work in a larger codebase. However, after I had well surpassed the 3 hour mark, I decided to start over, scrapping this approach as it seemed a bit overkill with the scope I was given. During the next iteration, I decided to focus on the server and client code separately, which Next.js supports very well. I started with creating API functions and made sure the API was fetching and updating data correctly. Then I moved on to the UI, which was the main bulk of the implementation, making sure it matched the designs as much as possible. All that was left was to merge the two and exploratory test the app to make sure all was good.

### Conclusion

Overall, this was a fun project. I particularly enjoyed working on both design and development as this intersection is where I work best. It was difficult to limit things down to 3 hours of work and decide what needs to go and what to focus on. I kind of had to reverse-engineer my own process but it was interesting to see how much I could get done in that amount of time and it was quite the rewarding challenge.

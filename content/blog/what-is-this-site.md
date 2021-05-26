---
title: What is this site
publishedOn: 2020-02-28
description: Learn about who I am, and why I am that way
---

After almost a full year designing, developing, hating, and restarting (and constantly getting distracted working on other projects), I’ve finally launched my website. But why did I even build this thing in the first place? Well, for starters, it’s a good exercise. Every budding web developer needs a portfolio, a place just for them to showcase their work. Not only do I think this site is necessary for other people to be able to see what I’m capable of creating, I think it’s also an important tool for my own personal reference. It’s a place where I can go to look back at my own progress. Programming is a skill that can take a long time to get good at, and it’s easy to reach dead ends and want to give up when things aren’t coming easily. A solid website of my own means that I can recall all the parts of programming that I once found challenging and was then able to work through. I can look back at the progress I’ve made, and see how much I’ve improved since beginning.

I started off not knowing which direction I wanted to take my site. I didn’t know if I wanted a plain site that would just show my work or if I wanted something I would constantly be updating and adding to. I know site builders like Squarespace and Wordpress exist, but I felt it was crucial that I build out my domain from scratch. I wanted to show my own personal ability in this area and the merits of building a site from the ground up. With this decision, I could go in any direction; the problem was that I had trouble narrowing down everything I wanted the site to be. It didn’t help that I also didn’t know what design style I wanted it to take on. The redesign effort started off on the wrong foot. I had no plan forward and I made the scope unnecessarily complex. After watching [this video](https://www.youtube.com/watch?v=SC7lLm6QAb8) about scalable web applications I figured that I, too, would make my website using a microservice architecture. This set me down a yearlong path of learning about containerization with Docker, service discovery and container life cycles with HashiCorp Consul, and load balancing with Nginx, along with application architecture with the saga pattern, event sourcing, and CQRS. But after spending a year learning all of this, and I’m grateful that I did learn it, I still had nothing tangible to show for it. 

I realized that the system I was learning how to build was not the system that was necessary for my website to succeed. I do not get hundreds of thousands of concurrent users; I do not write ten thousand rows to a database every second (in fact, I write zero rows). The microservice architecture would be overkill. I realized that I was doing all of this work just to say I could, not because the project demanded it and it was the best tool for the job. So I did what I was taught to do in design school: I got out a pencil and paper and began sketching. I sketched out a simple UI that would have three parts: an “About Me” that would explain who I am, a blog section that I would write in periodically, and a portfolio section that would remain largely static. Once I had a sketch that I liked, I opened Adobe XD and began developing a high fidelity mockup of my future site. 

Before I began typing a single line of code, I had to set a few ground rules for myself. First, the site needed to be functional, no cruft or added decoration. Second, the site needed to be fast and accessible to anyone who wanted it. This meant first-class support for mobile browsers and slow network connections. Once I had my constraints, I could pick which technology would be best for development. At first, I considered a completely server-rendered website written in PHP. I find PHP enjoyable to write in and thought this would be simple enough, but then I really thought about it and I realized that for the most part my website would be entirely static. That is, other than the blog posts that I would occasionally write, nothing on my website would change. So why build out an entire dynamic server for a largely static app? Then I decided that the site could live entirely on the front end. I considered Vanilla HTML, CSS, and JavaScript, but decided against it, because I didn’t think it was necessary to build my own development framework, especially since there are already so many that exist. I also did not wish to manually write HTML files for each blog post. The obvious solution is to use a tool like React or Angular, but the problem with these is that they break the guidelines that I set for myself above — they aren’t fast, and they certainly aren’t lightweight or good on poor cellular connections. 

My saving grace came when I stumbled upon [Richard Harris’s talk on rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao) on YouTube. The talk was a promo of his new front-end Javascript compiler, Svelte. Svelte just made so much sense to me, it seemed like such a natural way to build a website. As mentioned before, Svelte is a compiler instead of a framework. At build time, it runs over all of my “.svelte” files and converts them to vanilla Javascript, HTML, and CSS. To handle DOM updates, instead of using a virtual DOM Svelte writes the necessary code to determine exactly where in the DOM changes can occur and then outputs optimized Javascript for handling that manipulation. This means that when I ship my application, I can do so without also having to also ship the 64kb React runtime. Svelte also scopes CSS to components out of the box so I can be sure that any styles I create won’t have any adverse effects anywhere else in the app. After watching Harris’s talk, I spent the next four days reading every line of documentation on the Svelte and Sapper (a full-stack framework built around Node and Svelte) websites. Sapper compiles your website into a static web app out of the box. Combined with MarkedJS I was able to build out a fully functional flat file static website in just a few days. 

I feel that it’s important to note that as of today, February 28th, it’s still not finished. I still must design and develop the view for displaying pieces in my portfolio. After that’s done, I want to refactor my codebase into more modular, reusable, components, and clean up the type scales in the project’s CSS. But I’m confident that I have a good framework in place that will let me expand in the ways I need to. My biggest takeaway from this experience is the importance of being able to envision your project from start to finish and picking the right tool for the job accordingly. I think that as a young developer especially it’s very easy to get caught up in the marketing surrounding certain technologies and frameworks, but what makes someone a great developer is knowing when to walk away from hype. Projects shouldn't start as a way to flaunt your skills in a given technology, but instead a developer should be able to use a wide knowledge of the tools at their disposal to pick the one that lets their project shine the most. And for me, the simplest solution is often the best.
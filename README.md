
Hi, there! 
Everything was built from the scratch.

FRONTEND:
1. added form (input for url and dropdown for depth);
2. added three buttons (to crawl, to read history, and to clear);
3. added simple style;
4. showed all results in the table(count crawledData), and to see, exactly,
   what was found in the page, I use list component;
5. implemented the logic of depth and showing the result;
6. add loader;
7. set up linter & prettier;


USE: local variables; material-ui; Reactjs, TypeScript, axios;

BACKEND:
1. created remote MONGO DB and made connection;
2. used Puppeteer to crawl the page;
3. made recursion to implemented deep scrapping with (0-2 depth);
4. made another two breakpoints to get history;
5. made relation between the results in case deep scrapping;

To implement better deep scrapping work, the LINKS WERE FILTERED in the backend!!!
                  YOU CAN REMOVE THIS FILTER!!!

USE: Nestjs, Mongoose, Puppeteer;

Tested links:
1. https://keepshoppers.com/;
2. https://metatags.io/;
3. http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm;
4. https://www.w3schools.com/;
5. https://forkify-v2.netlify.app/;


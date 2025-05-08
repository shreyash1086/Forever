# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## my content 

firstly i have install react with the help of vite to create a react project 
secondly i have installed two libraries one is react router dom and second is react toastify

we created the Navbar using the NAVLINK tag which is property from the react router dom
react router dom helps us write the location of the page we are at in the browsers search box
for doing that we do a <Routers> tag inside of which we implement different <route> we give it a path and an element 


created the navbar to change the underline property whenever we click on a nav element 
this is done by using the NavLink tag whenever we click on a navlink tag we generate a anchor tag in the html document where we get a class property called active that means we are currently at that page for example contact so in order to bring the underline below the contact what he did that he firt hide all the underline and then in index.css he did a.active hr{display:block} to mount the underline only on that nav element which is currently active


learning Context api in project useContext is a new thing please check componets latest collection and context called shopcontext.jsx
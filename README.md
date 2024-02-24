This is just a [Next.js](https://nextjs.org/) application that displays a **Jupyter Notebook** using nteract.

"nteract is an open-source organization committed to creating fantastic interactive computing experiences that allow people to collaborate with ease." ([their](https://nteract.io/) words)

So, all I did was convert (rename) my `second.ipynb` file to `second.json` and import it into `NotebookViewer.js` which uses nteract to display it. Nothing too useful or fancy.. yet! (perhaps ever)

How to run:

`npm run dev`

<img width="555" alt="A screenshot of the application showing a Jupyter Notebook being displayed on a website with other non-notebook elements such as an input field at the bottom of the page that uses some tailwind to do a label float thing" src="https://github.com/blakefrederick/next-notebook/assets/4672139/9fdc8f30-2e75-4436-8123-9e7e69224312">

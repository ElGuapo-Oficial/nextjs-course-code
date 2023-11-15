So whats the big deal here?

1) Next Pages come PreRender from the server by default.
2) Pages folder is for routes
    -There are fixed routes (someName.js)
    -And there are dynamic routes ([someId].js)
3) Inside the pages files we can have client and server logic
    -Server Logic in this exercise is to prepare the data for SSR
    - we used these functions:
        -getStaticPaths: Pregenerates speficied dynamic paths (pages)
        -getStaticProps: Will not regenerate the page unless revalidate property is specified
                         It has a context parameter but does not have req and res properties
        -getServerSideProps: Revalidates the page every time is hit
                             It has a context parameter and does have req and res properties for extra functionality

    Server Side Code can access Server functionality directly, like DB connectios, files, etc.
     
3) Inside Pages folder we can also have an 'api' folder for apis
    - The apis can be hit from the client code (e.g.: fetch('/api/{api_filename}'))
    -
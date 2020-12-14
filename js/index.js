$(document).ready(() => {
    //Slider 
    $('.bxslider').bxSlider({
        mode:'fade',
        captions:true,
        slideWidth: 1200,
    })
    
    //Posts declaration
    var posts = [
        {
            title:'HOLA',
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Quisque id dolor vitae lacus auctor venenatis. Aliquam a nibh ullamcorper, ultricies enim sit amet, hendrerit ex. Fusce suscipit feugiat enim non mattis.'
        },
        {
            title:'ADIOS',
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Quisque id dolor vitae lacus auctor venenatis. Aliquam a nibh ullamcorper, ultricies enim sit amet, hendrerit ex. Fusce suscipit feugiat enim non mattis.'
        },
        {
            title:'YEISON',
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Quisque id dolor vitae lacus auctor venenatis. Aliquam a nibh ullamcorper, ultricies enim sit amet, hendrerit ex. Fusce suscipit feugiat enim non mattis.'
        },
        {
            title:'MI ARTICULO²',
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Quisque id dolor vitae lacus auctor venenatis. Aliquam a nibh ullamcorper, ultricies enim sit amet, hendrerit ex. Fusce suscipit feugiat enim non mattis.'
        },
        {
            title:'MI ARTICULO',
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Quisque id dolor vitae lacus auctor venenatis. Aliquam a nibh ullamcorper, ultricies enim sit amet, hendrerit ex. Fusce suscipit feugiat enim non mattis.'
        },
    ]

    posts.forEach((item,index) => {
        var post = 
        `
        <article class="post">
            <h2 class="tituloArt">${item.title}</h2>
            <span class="fecha">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a class="botonmas" href="#">Leer mas</a>
        </article>
        `
        $("#posts").append(post)
    })
})